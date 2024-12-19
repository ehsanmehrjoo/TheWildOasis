import supabase, { supabaseUrl } from "./supabase";

 


export async function getCabins( ) {
    const { data, error } = await supabase
.from('cabins')
.select('*')

if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  
}
return data;
}
 
export async function deleteCabins(id) {
    

    const {data ,  error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)
    if (error) {
        console.error(error);
        throw new Error('Cabin could not be deleted');
      
    }
    return data;
   

}

export async function CreateEditCabins(newCabins, id) {
    console.log(newCabins, id);
  
    const hasImagePath = newCabins.image?.startsWith?.(supabaseUrl);
  
    const imageName = newCabins.image
      ? `${Math.random()}-${newCabins.image.name}`.replaceAll("/", "")
      : null;
  
    if (!imageName) {
      throw new Error("Image name is invalid.");
    }
  
    const imagePath = hasImagePath
      ? newCabins.image
      : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  
    // 1. Create/edit cabins
    let query = supabase.from("cabins");
  
    if (!id) {
      // Create
      query = query.insert([{ ...newCabins, image: imagePath }]);
    } else {
      // Edit
      query = query.update({ ...newCabins, image: imagePath }).eq("id", id);
    }
  
    const { data, error } = await query.single();
  
    if (error) {
      console.error("Supabase Error:", error);
      throw new Error("Cabin could not be created or edited.");
    }
  
    // 2. Upload image
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabins.image);
  
    // 3. Delete cabin if image upload fails
    if (storageError) {
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error("Storage Error:", storageError);
      throw new Error("Cabin image could not be uploaded. Cabin was deleted.");
    }
  
    return data;
  }
  
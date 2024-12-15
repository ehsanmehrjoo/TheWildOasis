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

export async function CreateCabins(newCabins) {
      
 
const imageName = `${Math.random()}-${newCabins.image.name}`.replaceAll("/", "")
const imagePath  = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

//  1.  Create Cabin
const { data, error } = await supabase
 .from('cabins')
 .insert([{...newCabins , image : imagePath}])
 .select()

    if (error) {
      console.error("Supabase Error:", error);
      throw new Error("Cabin could not be created");
    }

    // 2. Upload image
    const {  error  : storageError} = await supabase
  .storage
  .from('cabin-images')
  .upload( imageName, newCabins.image)
//   3. Delete the cabin IF there was an error uploading image
if(storageError){
    await supabase
    .from('cabins')
    .delete()
    .eq('id', data.id)
    console.error(storageError);
    throw new Error("Cabin image  not be uploaded and the cabin was not  created");
}
    return data;
  }
  
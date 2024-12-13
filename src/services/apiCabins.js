import supabase from "./supabase";

 


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
    
const { data, error } = await supabase
.from('cabins')
.insert([newCabins])
.select()

    if (error) {
      console.error("Supabase Error:", error);
      throw new Error("Cabin could not be created");
    }
    return data;
  }
  
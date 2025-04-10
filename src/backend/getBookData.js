import supabase from "./initSupabase";

export async function getBookData() {
    const { data, error } = await supabase.from("books").select();
    if(error){
        console.error("Unexpected error: ", error);
        return [];
    }
    return data;
}
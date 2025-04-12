import supabase from "./initSupabase";

export async function getGenres() {
    const { data, error } = await supabase.from("genres").select();
    if(error){
        console.error("Unexpected error: ", error);
        return [];
    }
    return data;
}
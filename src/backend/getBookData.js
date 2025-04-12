import supabase from "./initSupabase";

export async function getBookData(pageNumber) {
    const { data, error } = await supabase.from("books").select().range(pageNumber-1, pageNumber*15).order("created_at", {ascending:false});
    if(error){
        console.error("Unexpected error: ", error);
        return [];
    }
    return data;
}
export async function getSingleBookData(book_id){
    const { data, error } = await supabase.from("books").select(`*, book_genres(genre_name)`).eq("book_id", book_id).single();
    if(error){
        console.error("Unexpected error: ", error);
        return null;
    }
    return data;
}
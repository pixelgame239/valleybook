import supabase from "./initSupabase";

export async function getBookData(pageNumber) {
    const { data, error } = await supabase.from("books").select().range(8*(pageNumber-1), pageNumber*8-1).order("created_at", {ascending:false});
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
export async function filterBook(genreList){
    const { data, error } = await supabase.from("books").select(`*,book_genres(genre_name)`).in('genre_name', genreList);

}
export async function getNumsBook(filter) {
    if(!filter){
        const { data, error, count } = await supabase.from("books").select("*", {count:"exact"});
        const numPages = Math.ceil(count/8);
        return numPages;
    }
    return;
}
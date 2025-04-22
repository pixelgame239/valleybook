import supabase from "./initSupabase";

export async function getBookData() {
    // const { data, error } = await supabase.from("books").select().range(8*(pageNumber-1), pageNumber*8-1).order("created_at", {ascending:false});
    const { data, error } = await supabase.from("books").select().order("created_at", {ascending:false});
    if(error){
        console.error("Unexpected error: ", error);
        return [];
    }
    return data;
}
export async function getSingleBookData(book_id){
    const { data, error } = await supabase.from("books").select(`*, book_genres(genre_name), authors(author_name)`).eq("book_id", book_id).single();
    if(error){
        console.error("Unexpected error: ", error);
        return null;
    }
    return data;
}
export async function filterBook(genreList, priceList, authorList){
    const { data, error } = await supabase
    .from("books")
    .select(`*, book_genres!inner(genre_name), authors(author_name)`)
    .in('book_genres.genre_name', genreList)
    .order("created_at", { ascending: false });
    // const { data, error } = await supabase.from("books").select(`*,book_genres(genre_name)`).filter('genre_name',"in", genreList).order("created_at", {ascending:false});;
    if(error){
        console.error("Unexpected error: ", error);
        return [];
    }
    return data;
}
export function getNumsBook(bookData) {
    let numPages;
    numPages = Math.ceil(bookData.length/8);
    return numPages;
}
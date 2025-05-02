import supabase from "./initSupabase";

export async function getUserData(userEmail) {
    const { data, error } = await supabase.from("accounts").select("username, email, phone_number, black_list").eq("email", userEmail).single();
    if(!error){
        return data;
    }
    else{
        return null;
    }
}
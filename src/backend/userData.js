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
export async function signUpNewUser(username, userEmail, password, address, phone_number, ) {
    const {data, error} = await supabase.from("accounts").insert({ username: username ,email: userEmail, password:password, address: address, phone_number: phone_number});
    if(error){
        console.log(error);
    }
}
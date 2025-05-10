import supabase from "./initSupabase";

export async function getUserData(userEmail) {
  const { data, error } = await supabase
    .from("accounts")
    .select("username, email, phone_number, address, cart_items, user_voucher")
    .eq("email", userEmail)
    .single();
  if (!error) {
    return data;
  } else {
    return null;
  }
}

export async function getUserDataByUsername(username) {
  const { data, error } = await supabase
    .from("accounts")
    .select("username, email, phone_number, address, user_voucher, cart_items")
    .eq("username", username)
    .single();
  if (error) {
    console.error("Error fetching user data by username:", error);
    return null;
  }
  return data;
}
export async function signUpNewUser(
  username,
  userEmail,
  password,
  address,
  phone_number
) {
  const { data, error } = await supabase.from("accounts").insert({
    username: username,
    email: userEmail,
    password: password,
    address: address,
    phone_number: phone_number,
  });
  if (error) {
    console.log(error);
  }
}

export async function updateUserData(username, updateFields) {
  const { data, error } = await supabase
    .from("accounts")
    .update(updateFields)
    .eq("username", username)
    .single();
  if (error) {
    console.error("Error updating user data:", error);
    return null;
  }
  return data;
}
export async function updateCartItems(email, items){
    const {data, error} = await supabase.from("accounts").update({ cart_items: items }).eq("email", email);
    if(error){
        console.log(error);
    }
}
export async function updateVoucherItems(email, items){
    const {data, error} = await supabase.from("accounts").update({ user_voucher: items }).eq("email", email);
    if(error){
        console.log(error);
    }
}
export async function fetchVoucher(userEmail) {
    const { data, error } = await supabase.from("accounts").select("user_voucher").eq("email", userEmail).single();
    if(error){
        console.log(error);
        return [];
    }
    else{
        if(data.user_voucher===null || data.user_voucher.length===0){
            return [];
        }
        else{
            return data.user_voucher.filter(voucher => voucher !== null);        }
    }
}

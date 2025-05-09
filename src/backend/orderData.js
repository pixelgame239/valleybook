import { supabase } from "./initSupabase";

export async function insertOrder (orderDetails, orderStatus){
  try {
    const { data, error } = await supabase
      .from("orders")
      .insert([
        {
          order_details: orderDetails,
          email: orderDetails.customerInfo.email,
          payment_method: orderDetails.paymentMethod,
          total_price: Math.ceil(orderDetails.total),
          status: orderStatus
        },
      ])
      .select("*");

    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error("Error inserting order:", error);
    throw error;
  }
};
export async function generateNewOrder(){
  const {data, error} = await supabase.from("orders").select("order_id").order("created_at", {ascending:false});
  if(error){
    console.log(error);
  }
  else{
    return data[0].order_id+1;
  }
}
export async function handleSendEmail (orderID, userEmail) {
  // Create your payload with the required fields.
  const payload = {
    sender: "MS_F0Drdc@test-eqvygm00n3wl0p7w.mlsender.net",
    recipient: userEmail, // Replace with the actual recipient email
    subject: "Xác nhận đơn hàng của bạn",
    html_body: `<html><body><p>Confirm your order</p><a href=\"https://asrqcfdysjuddpjxnnkx.supabase.co/functions/v1/confirm_order?token=${orderID}\">Confirm</a>.</body></html>`
  };

  // Call the remote procedure (RPC)
  const { data, error } = await supabase.rpc("send_email_mailersend", { message: payload });

  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent successfully:", data);
  }
};


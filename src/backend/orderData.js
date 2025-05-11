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
    console.log("Order inserted:", data[0]);
    return data[0];
  } catch (error) {
    console.error("Error inserting order:", error);
    throw error;
  }
};

// Hàm lấy tất cả đơn hàng của một người dùng dựa trên email
export const getAllOrders = async (userEmail) => {
  try {
    let query = supabase
      .from("orders")
      .select(
        `
        order_id,
        created_at,
        total_price,
        status,
        order_details->customerInfo->>fullName as customer_name
      `
      )
      .order("created_at", { ascending: false }); // Sắp xếp theo ngày tạo mới nhất

    // Thêm điều kiện lọc theo email nếu userEmail được cung cấp
    if (userEmail) {
      query = query.eq("email", userEmail);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

// Hàm lấy chi tiết một đơn hàng theo order_id
export const getOrderById = async (orderId) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select("*") // Lấy tất cả các cột
      .eq("order_id", orderId)
      .single(); // Trả về một đối tượng duy nhất

    if (error) throw error;
    return data;
  } catch (error) {
    console.error(`Error fetching order with id ${orderId}:`, error);
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
    sender: "MS_0ikNTZ@test-z0vklo669r1l7qrx.mlsender.net",
    recipient: userEmail, // Replace with the actual recipient email
    subject: "Xác nhận đơn hàng của bạn",
    html_body: `<html><body><p>Xác nhận đơn hàng của bạn</p><a href=\"https://asrqcfdysjuddpjxnnkx.supabase.co/functions/v1/alter_order?token=${orderID}\">Xác nhận</a>.</body></html>`
  };

  // Call the remote procedure (RPC)
  const { data, error } = await supabase.rpc("send_email_mailersend", { message: payload });

  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent successfully:", data);
  }
};


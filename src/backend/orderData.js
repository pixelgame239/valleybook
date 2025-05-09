import { supabase } from "./initSupabase";

export const insertOrder = async (orderDetails) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .insert([
        {
          order_details: orderDetails,
          payment_method: orderDetails.paymentMethod,
          email: orderDetails.customerInfo.email, // Giả sử email lấy từ customerInfo
        },
      ])
      .select();

    if (error) throw error;
    console.log("Order inserted:", data[0]);
    return data[0];
  } catch (error) {
    console.error("Error inserting order:", error);
    throw error;
  }
};

// Hàm lấy tất cả đơn hàng (hoặc có thể thêm filter theo người dùng nếu cần)
export const getAllOrders = async () => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .select(
        `
        order_id, 
        created_at, 
        total_price, 
        status, 
        order_details->customerInfo->>fullName as customer_name 
      `
      ) // Ví dụ: lấy tên khách hàng từ JSON
      .order("created_at", { ascending: false }); // Sắp xếp theo ngày tạo mới nhất

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

import { supabase } from "./initSupabase";

export const insertOrder = async (orderDetails) => {
  try {
    const { data, error } = await supabase
      .from("orders")
      .insert([
        {
          order_details: orderDetails,
          payment_method: orderDetails.paymentMethod,
          email: orderDetails.customerInfo.email,
        },
      ])
      .select();

    if (error) throw error;
    return data[0];
  } catch (error) {
    console.error("Error inserting order:", error);
    throw error;
  }
};

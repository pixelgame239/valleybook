import supabase from "./initSupabase";

export async function getVoucher(type) {
    if(type === "Voucher") {
        const { data, error } = await supabase
            .from("voucher")
            .select();

        if (error) {
            console.error("Error fetching vouchers:", error);
            return [];
        }
        const filteredData = data.filter(voucher => 
            voucher.voucher_id.startsWith("FSHIP") || voucher.voucher_id.startsWith("V")
        );

        filteredData.forEach(voucher => {
            console.log(voucher); // Process the filtered data
        });
        return filteredData;
    }
}
export async function getUserVoucher(voucherList) {
    const { data, error } = await supabase.from("voucher").select().in("voucher_id", voucherList);
    if(error){
        console.log(error);
        return [];
    }
    return data;
}

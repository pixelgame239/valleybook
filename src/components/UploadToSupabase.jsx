import { supabase } from "../backend/initSupabase";

export async function uploadImage(file) {
  if (!file) return null;

  const fileName = `${Date.now()}_${file.name}`;
  const { data, error } = await supabase.storage
    .from("image") // Tên bucket
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Upload error:", error);
    throw error;
  }

  const { data: urlData } = supabase.storage
    .from("image")
    .getPublicUrl(fileName);

  return urlData.publicUrl;
}

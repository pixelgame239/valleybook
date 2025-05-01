import supabase from "./initSupabase";

export async function getAdminPost() {
    const { data, error } = await supabase.from("forum").select().ilike("username", "%@valleybook.com");
    if(!error){
        console.log(data);
        return data;
    }
    else{
        console.log(error);
        return [];
    }
}
export async function postForumTopic(topicContent, creator, imageFile) {
    // Insert the forum topic into the "forum" table and select the inserted row.
    const { data: rowData, error: rowError } = await supabase
      .from("forum")
      .insert({ topic: topicContent, username: creator })
      .select();
  
    if (rowError) {
      console.error("Error inserting forum topic:", rowError);
      return;
    }
  
    const topicId = rowData[0].id;
    console.log("Inserted forum topic:", rowData);
  
    if (imageFile) {
      const { data: imageData, error: imageError } = await supabase
        .storage
        .from("forum")
        .upload(`${topicId}.jpg`, imageFile);
  
      if (imageError) {
        console.error("Error uploading image:", imageError);
      } else {
        const { data: urlData, error: urlError } = supabase
          .storage
          .from("forum")
          .getPublicUrl(`${topicId}.jpg`);
  
        if (urlError) {
          console.error("Error retrieving public URL:", urlError);
        } else {
            console.log(urlData.publicUrl);
          const { error: updateError } = await supabase
            .from("forum")
            .update({ topic_image: urlData.publicUrl })
            .eq("id", topicId);
  
          if (updateError) {
            console.error("Error updating topic with image URL:", updateError);
          }
        }
      }
    }
  }
  
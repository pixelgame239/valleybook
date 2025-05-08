import { email } from "react-admin";
import supabase from "./initSupabase";

export async function getAdminPost() {
  const { data, error } = await supabase
    .from("forum")
    .select()
    .ilike("username", "%@valleybook.com");
  if (!error) {
    return data;
  } else {
    console.log(error);
    return [];
  }
}
export async function getExplorePost() {
  const { data, error } = await supabase
    .from("forum")
    .select()
    .not("username", "ilike", "%@valleybook.com")
    .order("created_at", { ascending: false });
  if (!error) {
    return data;
  } else {
    console.log(error);
    return [];
  }
}
export async function getSinglePost(postID) {
  const { data, error } = await supabase
    .from("forum")
    .select()
    .eq("id", postID)
    .single();
  if (!error) {
    return data;
  } else {
    console.log(error);
    return null;
  }
}
export async function getHomePost(userEmail) {
  const { data: userData, error: userError } = await supabase
    .from("accounts")
    .select("username")
    .eq("email", userEmail)
    .single();
  if (!userError) {
    const { data, error } = await supabase
      .from("forum")
      .select()
      .eq("username", userData.username)
      .order("created_at", { ascending: false });
    if (!error) {
      return data;
    } else {
      console.log(error);
      return [];
    }
  } else {
    return [];
  }
}
export function getNumsPost(postData, numDisplay) {
  let numPages;
  if (postData.length === 0) {
    return 1;
  } else {
    numPages = Math.ceil(postData.length / numDisplay);
    return numPages;
  }
}
export async function postForumTopic(topicContent, userEmail, imageFile) {
  // Insert the forum topic into the "forum" table and select the inserted row.
  const { data: userData, error: userError } = await supabase
    .from("accounts")
    .select("username")
    .eq("email", userEmail)
    .single();

  const { data: rowData, error: rowError } = await supabase
    .from("forum")
    .insert({ topic: topicContent, username: userData.username })
    .select();

  if (rowError) {
    console.error("Error inserting forum topic:", rowError);
    return;
  }

  const topicId = rowData[0].id;
  console.log("Inserted forum topic:", rowData);

  if (imageFile) {
    const { data: imageData, error: imageError } = await supabase.storage
      .from("forum")
      .upload(`${topicId}.jpg`, imageFile);

    if (imageError) {
      console.error("Error uploading image:", imageError);
    } else {
      const { data: urlData, error: urlError } = supabase.storage
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
export async function handleEmo(postId, emoType, userEmail) {
  const { data, error } = await supabase.rpc("toggle_emo", {
    column_name: emoType,
    element_to_toggle: userEmail,
    id: postId,
  });
  if (error) {
    console.log(error);
  }
}
export async function replyPost(postID, answerContent, userEmail, counter) {
  const { data, error } = await supabase.rpc("reply_topic", {
    id: postID,
    new_reply: {
      ans_num: counter,
      answer: answerContent,
      email: userEmail,
    },
  });
  if (error) {
    console.log(error);
  }
}
export async function getTopicAnswer(topicReply) {
  const { data, error } = await supabase
    .from("accounts")
    .select("username")
    .eq("email", topicReply.email)
    .single();
  if (!error) {
    return {
      ans_num: topicReply.ans_num,
      answer: topicReply.answer,
      username: data ? data.username : "Người dùng bí ẩn",
    };
  } else {
    console.log(error);
    return {
      ans_num: topicReply.ans_num,
      answer: topicReply.answer,
      username: "Người dùng bí ẩn",
    };
  }
}
export async function deleteTopic(topicID) {
  const { data: delData, error: delErr } = await supabase
    .from("forum")
    .delete()
    .eq("id", topicID);
  const { data, error } = await supabase.storage
    .from("forum")
    .remove(`${topicID}.jpg`);
}
export async function editTopic(topicID, topicContent, topicImage) {
  if (topicImage === "Unchange") {
    console.log("Unchange");
    const { data, error } = await supabase
      .from("forum")
      .update({ topic: topicContent })
      .eq("id", topicID);
    if (error) {
      console.log(error);
    }
  } else if (!topicImage) {
    console.log("Null image");
    const { data, error } = await supabase
      .from("forum")
      .update({ topic: topicContent, topic_image: null })
      .eq("id", topicID);
    const { data: imageData, error: imageError } = await supabase.storage
      .from("forum")
      .remove(`${topicID}.jpg`);
    if (error) {
      console.log(error);
    }
  } else {
    console.log("Change");
    const { data: imageData, error: imageError } = await supabase.storage
      .from("forum")
      .upload(`${topicID}.jpg`, topicImage, {
        upsert: true,
      });
    if (!imageError) {
      const { data: downData, error: downError } = supabase.storage
        .from("forum")
        .getPublicUrl(`${topicID}.jpg`);
      const tempImageURL = `${downData.publicUrl}?t=${Date.now()}`;
      const { data: tableData, error: tableError } = await supabase
        .from("forum")
        .update({ topic: topicContent, topic_image: tempImageURL })
        .eq("id", topicID);
      if (tableError) {
        console.log(tableError);
      }
    } else {
      console.log(imageError);
    }
  }
}

export async function getTop3LikedPosts() {
  const { data, error } = await supabase
    .from("forum")
    .select("*, array_length(like_count, 1)")
    .order("array_length", { ascending: false })
    .limit(3);

  if (!error) {
    return data;
  } else {
    console.log("Error fetching top liked posts:", error);
    return [];
  }
}

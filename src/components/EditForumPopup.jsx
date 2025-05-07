import { useRef, useState } from "react";
import editStyle from "../../public/assets/css/overlayForum.module.css"; // Reusing the existing styles
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { editTopic } from "../backend/forumData";

const EditForumPopup = ({ onClose, onSave, currentTopic }) => {
  const [editContent, setEditContent] = useState(currentTopic.topic);
  const [editImage, setEditImage] = useState(currentTopic.topic_image);
  const [uploadImage, setUploadImage] = useState("Unchange");
  const fileInputRef = useRef(null);
  const handleImageUploadClick = () => {
    fileInputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEditImage(URL.createObjectURL(file));
      setUploadImage(file); 
    }
  };
  const handleContentChange = (event) =>{
    setEditContent(event.target.value);
  }
  return (
    <div className={editStyle.overlay}> {/* Reusing the overlay class from the CSS module */}
      <div className={editStyle.modal}> {/* Reusing the modal class from the CSS module */}
        <h2 className={editStyle.header}>Chỉnh sửa bài viết</h2> {/* Reusing header class */}
        
        <div className={editStyle.contentWrapper}>
          <label htmlFor="content" className={editStyle.label}>Nội dung bài đăng</label>
          <textarea
            id="content"
            className={editStyle.textArea}
            value={editContent}
            onChange={handleContentChange}
          />
        </div>

        <div className={editStyle.imageWrapper}>
          <label htmlFor="image" className={editStyle.label}>Ảnh bài đăng</label>
          <div className={editStyle.imagePreview}>
            {editImage? (
              <div style={{width:"fit-content", position:"relative"}}>
              <div className={editStyle.imageRemove} onClick={()=>{setEditImage(null);
                setUploadImage(null);
              }}><CancelRoundedIcon sx={{fontSize:20}}></CancelRoundedIcon></div>
              <img src={editImage} alt="Current" className={editStyle.image} />
              </div>
            ) : (
              <p>Bài viết không có ảnh</p>
            )}
          </div>

          <button className={editStyle.uploadButton} onClick={handleImageUploadClick}>
            Tải lên ảnh mới
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg"
            style={{ display: 'none' }}
            onChange={handleImageChange}  
          />
        </div>

        <div className={editStyle.buttonContainer}> {/* Reusing button container class */}
          <button className={editStyle.cancelButton} onClick={onClose}>Hủy</button> {/* Reusing cancelButton class */}
          <button className={editStyle.saveButton} onClick={async()=>{
            await editTopic(currentTopic.id, editContent, uploadImage);
            onSave()}}>Lưu thay đổi</button> {/* Reusing saveButton class */}
        </div>
      </div>
    </div>
  );
}

export default EditForumPopup;

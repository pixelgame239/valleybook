import deleteStyle from "../../public/assets/css/overlayForum.module.css";

const DeleteForumPopup = ( {onClose, onDelete} ) =>{
    return(
        <div className={deleteStyle.overlay}> {/* Use the overlay class from the CSS module */}
            <div className={deleteStyle.modal}> {/* Use the modal class from the CSS module */}
                <h2 className={deleteStyle.header}>Xác nhận xóa bài viết</h2> {/* Use the header class */}
                <p className={deleteStyle.content}>Bạn chắc chắn muốn xóa bài viết này không? Hành động này không thể hoàn tác.</p> {/* Use the content class */}
                <div className={deleteStyle.buttonContainer}> {/* Use the buttonContainer class */}
                <button className={deleteStyle.cancelButton} onClick={onClose}>Hủy</button> {/* Use the cancelButton class */}
                <button className={deleteStyle.deleteButton} onClick={onDelete}>Xóa</button> {/* Use the deleteButton class */}
                </div>
            </div>
        </div>
    );
}
export default DeleteForumPopup;
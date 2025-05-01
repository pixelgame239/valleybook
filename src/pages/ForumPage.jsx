import Footer from "../components/Footer";
import "../../public/assets/css/forumStyle.css";
import Header from "../components/Header";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../components/AuthContext";
import AdminPost from "../components/AdminPost";
import { postForumTopic } from "../backend/forumData";
import supabase from "../backend/initSupabase";
import Preloader from "../components/Preloader";
import { ForumContext } from "../backend/ForumContext";
import { getAdminPost } from "../backend/forumData";

const ForumPage = () =>{
    const { setAdminPost } = useContext(ForumContext);
    const [imageUpload, setImageUpload] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [forumContent, setForumContent] = useState("Explore");
    const [showSearch, setShowSearch] = useState(false);
    const { loggedIn } = useContext(AuthContext);
    const [postTopic, setPostTopic] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const initAdminPost = async() =>{
            setLoading(true);
            const adminData = await getAdminPost();
            if(adminData.length>0){
                setAdminPost(adminData);
                setLoading(false);
            }
        }
        initAdminPost();
    }, []);
    const handleTextChange = (e) => {
        setPostTopic(e.target.value);
      };
    const handlePostTopic = async() =>{
            setLoading(true);
        try {
        // Ensure you pass all relevant data, such as postTopic text.
        await postForumTopic(postTopic, "admin1@valleybook.com", imageUpload);
        } catch (err) {
        console.error("Error posting topic:", err);
        } finally {
        setLoading(false);
        }
    }
    return(
        <div>
            {loading?<Preloader></Preloader>:<>
                <Header currentPage="forum" />
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Diễn đàn</h3>
                            <span className="breadcrumb">
                                <a href="/">Trang chủ</a> &gt; Diễn đàn
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="forum-container">
                {loggedIn ? (
                    <div className="sidebar-container">
                        <ul>
                            <li className={forumContent==="Explore" ? "active-content" : ""} onClick={() => setForumContent("Explore")}>
                                <ExploreIcon /> Khám phá
                            </li>
                            <li className={forumContent==="Home" ? "active-content" : ""} onClick={() => setForumContent("Home")}>
                                <HomeIcon /> Bài viết của tôi
                            </li>
                            <li className={forumContent==="Search" ? "active-content" : ""} onClick={() => setShowSearch(true)}>
                                <SearchIcon /> Tìm kiếm
                            </li>
                        </ul>
                    </div>
                ) : null}
                
                <div className="content-container">
                    <div className="content-inner">
                        {forumContent==="Explore"?<AdminPost />:null}
                        {loggedIn&&forumContent==="Explore" ? (
                            <div className="forum-create-area">
                                <textarea className="forum-write-area" placeholder="Tạo bài viết..." value={postTopic} onChange={handleTextChange}></textarea>
                                <div className="forum-posting-button">
                                    <input 
                                        type="file" 
                                        id="image-upload" 
                                        className="file-input"  
                                        accept=".jpg" 
                                        style={{ display: "none" }}
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                setImageUpload(file);
                                                setPreviewImage(URL.createObjectURL(file));
                                            }
                                        }}
                                    />
                                    <button className="upload-button" onClick={() => document.getElementById("image-upload").click()}>
                                        <AddPhotoAlternateRoundedIcon /> Thêm ảnh
                                    </button>
                                    <button className="post-button" onClick={async()=>{handlePostTopic()
                                    }} disabled={postTopic.trim()===""}>Đăng</button>
                                </div>
                                {imageUpload && (
                                    <div className="image-preview">
                                        <img src={previewImage} alt="Preview" />
                                        <button className="image-remove" onClick={() => {
                                            setImageUpload(null);
                                            setPreviewImage(null);
                                            }}>
                                            <CancelRoundedIcon />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            
            {showSearch && (
                <div className="search-overlay">
                    <input
                        type="text"
                        autoFocus
                        placeholder="Tìm kiếm..."
                        className="search-forum-input"
                    />
                    <button className="close-search" onClick={() => setShowSearch(false)}>
                        <CancelRoundedIcon />
                    </button>
                </div>
            )}

            <Footer />
            </>}
        </div>
    );
}
export default ForumPage;
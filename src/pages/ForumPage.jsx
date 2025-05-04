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
import { getExplorePost, getHomePost, getNumsPost, postForumTopic } from "../backend/forumData";
import supabase from "../backend/initSupabase";
import Preloader from "../components/Preloader";
import { ForumContext } from "../backend/ForumContext";
import { getAdminPost } from "../backend/forumData";
import UserPost from "../components/UserPost";
import BottomBanner from "../components/BottomBanner";

const ForumPage = () =>{
    const { setAdminPost, setExplorePost, setHomePost, setSearchPost, explorePost, adminPost, searchPost, homePost, currentPage, setCurrentPage } = useContext(ForumContext);
    const [imageUpload, setImageUpload] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [forumContent, setForumContent] = useState("Explore");
    const [showSearch, setShowSearch] = useState(false);
    const [searchString, setSearchString] = useState("");
    const { loggedIn } = useContext(AuthContext);
    const [postTopic, setPostTopic] = useState("");
    const [pageCount, setPageCount] = useState(1);
    const [loading, setLoading] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const handleChangingPage=async (pageNumber)=>{
        setCurrentPage(pageNumber);
      }
    useEffect(() => {
        console.log(userInfo);
        const fetchUserPost = async()=>{
            setLoading(true);
            const tempPost = await getExplorePost();
            const adminData = await getAdminPost();
            if(tempPost.length>0){
                setExplorePost(tempPost);
                setPageCount(getNumsPost(tempPost,5));
                setCurrentPage(1);
            }
            if(adminData.length>0){
                setAdminPost(adminData);
            }
            if(userInfo){
                const tempHPost = await getHomePost(userInfo.email);
                if(tempHPost.length>0){
                    setHomePost(tempHPost);
                }
            }
            setSearchPost([...adminData,...tempPost]);
            setLoading(false);
        }
        fetchUserPost();
    }, []);
    useEffect(()=>{
        const allPost = [...adminPost,...explorePost];
        const tempSearch = allPost.filter((sPost)=>sPost.topic.toLowerCase().includes(searchString.toLowerCase()));
        setSearchPost(tempSearch);
        setPageCount(getNumsPost(tempSearch,5));
    }, [searchString]);
    const handleTextChange = (e) => {
        setPostTopic(e.target.value);
      };
    const handlePostTopic = async() =>{
            setLoading(true);
        try {
        // Ensure you pass all relevant data, such as postTopic text.
        await postForumTopic(postTopic, userInfo.email, imageUpload);
        } catch (err) {
        console.error("Error posting topic:", err);
        } finally {
        setLoading(false);
        setImageUpload(null);
        setPreviewImage(null);
        setPostTopic("");
        }
    }
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

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
            {loggedIn ? (
                <div className="sidebar-container">
                        <ul>
                            <li className={forumContent==="Explore" ? "active-content" : ""} onClick={() => {
                                setShowSearch(false);
                                setForumContent("Explore");
                                setCurrentPage(1);
                                setPageCount(getNumsPost(explorePost,5))}}>
                                <ExploreIcon /> Khám phá
                            </li>
                            <li className={forumContent==="Home" ? "active-content" : ""} onClick={() => {
                                setShowSearch(false);
                                setForumContent("Home");
                                setCurrentPage(1);
                                setPageCount(getNumsPost(homePost,5))}}>
                                <HomeIcon /> Bài viết của tôi
                            </li>
                            <li className={forumContent==="Search" ? "active-content" : ""} onClick={() => {
                                setShowSearch(true);
                                setForumContent("Search");
                                setCurrentPage(1);
                                setPageCount(getNumsPost(searchPost,5));
                                }}>
                            <SearchIcon /> Tìm kiếm
                            </li>
                        </ul>
                    </div>
                ) : null}
            {showSearch && (
                <div className="search-container">
                    <input
                        type="text"
                        autoFocus
                        placeholder="Tìm kiếm bài viết...."
                        className="search-forum-input"
                        value={searchString}
                        onChange={(e)=>setSearchString(e.target.value)}
                    />
                </div>
            )}
            <div className="forum-container">                
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
                        <UserPost forumType={forumContent}></UserPost>
                    </div>
                </div>
            </div>
            <div className="section trending">
            <div style={{margin:"25px"}}>
            <div className="row">
                <div>
                  <ul className="pagination">
                    <li>
                      <a style={{cursor: currentPage===1?"not-allowed":"pointer", backgroundColor: currentPage===1?"gray":null, color:currentPage===1?"black":null}} onClick={()=>{
                        if(currentPage===1)
                          return;
                        else{
                          handleChangingPage(currentPage-1)
                        }
                      }}>&lt;</a>
                    </li>
                    {pages.map(page=>(
                    <li>
                      <a style={{cursor:"pointer"}} className={currentPage===page?"is_active":""} onClick={()=>{handleChangingPage(page)}}>{page}</a>
                    </li>
                    ))}
                    <li>
                      <a style={{cursor: currentPage===pageCount?"not-allowed":"pointer", backgroundColor: currentPage===pageCount?"gray":null, color:currentPage===pageCount?"black":null}} onClick={()=>{
                        if(currentPage===pageCount)
                          return;
                        else{
                          handleChangingPage(currentPage+1)
                        }
                      }}>&gt;</a>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
              </div>
              {!loggedIn?<BottomBanner></BottomBanner>:null
}
            <Footer />
            </>}
        </div>
    );
}
export default ForumPage;
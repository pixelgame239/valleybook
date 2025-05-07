import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { deleteTopic, getSinglePost, getTopicAnswer, handleEmo, replyPost } from "../backend/forumData";
import Preloader from "../components/Preloader";
import "../../public/assets/css/forumDetailStyle.css";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import SendIcon from '@mui/icons-material/Send';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { AuthContext } from "../components/AuthContext";
import BottomBanner from "../components/BottomBanner";
import supabase from "../backend/initSupabase";
import AnswerList from "../components/AnswerList";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DeleteForumPopup from "../components/DeleteForumPopup";
import EditForumPopup from "../components/EditForumPopup";

const ForumDetailPage =()=>{
    const { id } = useParams();
    const [topicData, setTopicData] = useState(null);
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] =useState(false);
    const { loggedIn } = useContext(AuthContext);
    const [answerContent, setAnswerContent] = useState("");
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const navigate = useNavigate();
    const handleDeleteTopic = async (postID) =>{
        await deleteTopic(postID);
        setShowDelete(false);
        navigate("/forum");
    }
    const handleEmoChange=async (emoType)=>{
        if(emoType==="like_count"){
            await handleEmo(id, emoType, userInfo.email);
            if(topicData.dislike_count.includes(userInfo.email)){
                await handleEmo(id, "dislike_count", userInfo.email);
            }
        }
        else{
            await handleEmo(id, emoType, userInfo.email);
            if(topicData.like_count.includes(userInfo.email)){
                await handleEmo(id, "like_count", userInfo.email);
            }
        }
    }
    const handleReply = async()=>{
        const counter = !topicData.reply||topicData.reply.length===0?0:topicData.reply.length;
        setAnswerContent("");
        await replyPost(id, answerContent, userInfo.email, counter);
    }
    useEffect(()=>{
        const fetchTopic = async () =>{
            const tempData = await getSinglePost(id);
            if(tempData!==null){
                setTopicData(tempData);
                console.log(tempData.topic_image);
                setLoading(false);
            } 
        }
    fetchTopic();
    const forum_channel = supabase
        .channel('forum_channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'forum', filter:`id=eq.${id}` }, async payload => {
            await fetchTopic();
        })
        .subscribe();
        return () => {
            supabase.removeChannel(forum_channel);
        };
    }, []);
    return(
        <div>
            {loading?<Preloader></Preloader>:
               <div>
                    {showDelete?<DeleteForumPopup onClose={()=>setShowDelete(false)} onDelete={async()=>handleDeleteTopic(topicData.id)}></DeleteForumPopup>:null}
                    {showEdit?<EditForumPopup currentTopic={topicData} onClose={()=>setShowEdit(false)} onSave={()=>setShowEdit(false)}></EditForumPopup>:null}
                    <div className="back-to-forum" onClick={()=>navigate("/forum")}><ArrowBackIosRoundedIcon sx={{fontSize: 40}}></ArrowBackIosRoundedIcon></div>
                    <div className="forum-topic">
                        <div className="topic-content">
                            <div className="topic-image-container">
                                <img className="topic-image" src={topicData.topic_image}></img>
                            </div>
                            <p className="topic-text">
                                {topicData.topic}
                            </p>
                            <p className="topic-username">Người đăng: {topicData.username}
                            <span
                                    className="topic-date-created">Ngày đăng: {new Date(topicData.created_at).toLocaleString()}
                                </span>
                            </p>
                        </div>
                            <div className="topic-emotion">
                                {userInfo?<>
                                <span className={`topic-like ${topicData.like_count&&topicData.like_count.includes(userInfo.email)?"active":""}`} onClick={async()=>await handleEmoChange("like_count")}>
                                {(!topicData.like_count || topicData.like_count.length === 0) ? 0 : topicData.like_count.length} 
                                <ThumbUpAltIcon sx={{fontSize:40}} />
                            </span>
                            <span className={`topic-dislike ${topicData.dislike_count&&topicData.dislike_count.includes(userInfo.email)?"active":""}`} onClick={async()=>await handleEmoChange("dislike_count")}>
                                {(!topicData.dislike_count || topicData.dislike_count.length === 0) ? 0 : topicData.dislike_count.length} 
                                <ThumbDownAltIcon sx={{fontSize:40}}/>
                            </span></>:<>
                              <span className={`topic-like active`} style={{cursor:"default"}}>
                              {(!topicData.like_count || topicData.like_count.length === 0) ? 0 : topicData.like_count.length} 
                              <ThumbUpAltIcon sx={{fontSize:40}}/>
                          </span>
                          <span className={`topic-dislike active`} style={{cursor:"default"}}>
                              {(!topicData.dislike_count || topicData.dislike_count.length === 0) ? 0 : topicData.dislike_count.length} 
                              <ThumbDownAltIcon sx={{fontSize:40}}/>
                          </span>
                          </>
                            }
                            </div>
                            {userInfo&&(userInfo.username===topicData.username||userInfo.username.endsWith("@valleybook.com"))?<div className="topic-interaction">
                                <span className="edit-topic" onClick={()=>setShowEdit(prev=>prev=true)}><EditRoundedIcon  sx={{ fontSize: 40}}></EditRoundedIcon></span>
                                <span className="delete-topic" onClick={()=>setShowDelete(prev=>prev=true)}><DeleteRoundedIcon sx={{ fontSize: 40}}></DeleteRoundedIcon></span>
                            </div>:null}
                    </div>
                    <p className="reply-section">Các câu trả lời:</p>
                    <AnswerList replyList={topicData.reply}></AnswerList>
                    {loggedIn?
                        <div className="reply-container">
                            <div className={`reply-box ${expanded ? "expanded" : ""}`}>
                                {!expanded ? (
                                    <button className="reply-button" onClick={() => setExpanded(true)}>
                                        Trả lời
                                    </button>
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Nhập phản hồi..."
                                            className="reply-input"
                                            value={answerContent}
                                            onChange={(e)=>setAnswerContent(e.target.value)}
                                        />
                                        <button className="send-button" onClick={async()=>{
                                            await handleReply();
                                            setExpanded(false);
                                        }} disabled={answerContent.trim===""}><SendIcon></SendIcon></button>
                                        <button className="cancel-button" onClick={() => setExpanded(false)}><CancelRoundedIcon></CancelRoundedIcon></button>
                                    </>
                                )}
                            </div>
                        </div>
                    :<BottomBanner></BottomBanner>}
                </div>
            }
        </div>
    );
}
export default ForumDetailPage;
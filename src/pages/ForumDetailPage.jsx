import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { getSinglePost, getTopicAnswer, handleEmo, replyPost } from "../backend/forumData";
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

const ForumDetailPage =()=>{
    const { id } = useParams();
    const [topicData, setTopicData] = useState(null);
    const { userInfo } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] =useState(false);
    const { loggedIn } = useContext(AuthContext);
    const [answerContent, setAnswerContent] = useState("");
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
                            <span className={`topic-like ${topicData.like_count&&topicData.like_count.includes(userInfo.email)?"active":""}`} onClick={async()=>await handleEmoChange("like_count")}>
                                {(!topicData.like_count || topicData.like_count.length === 0) ? 0 : topicData.like_count.length} 
                                <ThumbUpAltIcon />
                            </span>
                            <span className={`topic-dislike ${topicData.dislike_count&&topicData.dislike_count.includes(userInfo.email)?"active":""}`} onClick={async()=>await handleEmoChange("dislike_count")}>
                                {(!topicData.dislike_count || topicData.dislike_count.length === 0) ? 0 : topicData.dislike_count.length} 
                                <ThumbDownAltIcon />
                            </span>
                            </div>
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
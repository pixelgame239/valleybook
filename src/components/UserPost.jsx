import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { ForumContext } from "../backend/ForumContext";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const UserPost = ({ forumType }) =>{
    const navigate = useNavigate();
    const { explorePost, homePost, searchPost, currentPage } = useContext(ForumContext);
    return(
        <div>
            {forumType==="Explore"?
            <>
                  {explorePost.length===0?"Chưa có bài viết nào":
                    explorePost.slice(5*(currentPage-1), currentPage*5).map((singPost, index)=>
                        <div key={index}>
                    <div className="forum-post" 
                    onClick={()=>navigate(`/forum/${singPost.id}`)}>
                        <div className="post-content">
                            <p className="post-topic">
                                {singPost.topic}
                            </p>
                            <p className="post-username">Người đăng: {singPost.username}</p>
                        </div>
                        <div className="post-attribute">
                            <p className="post-date-created">{new Date(singPost.created_at).toLocaleString()}</p>
                            <div className="post-emotion">
                            <span className="post-like">
                                {(!singPost.like_count || singPost.like_count.length === 0) ? 0 : singPost.like_count.length} 
                                <ThumbUpAltIcon />
                            </span>
                            <span className="post-dislike">
                                {(!singPost.dislike_count || singPost.dislike_count.length === 0) ? 0 : singPost.dislike_count.length} 
                                <ThumbDownAltIcon />
                            </span>
                            </div>
                        </div>
                    </div>
                </div>)
                }
                </>
            : forumType==="Search" ?
            <> {searchPost.length===0?"Không tìm thấy bài viết":
                searchPost.slice(5*(currentPage-1), currentPage*5).map((singPost, index)=>
                    <div key={index}>
                <div className="forum-post" 
                onClick={()=>navigate(`/forum/${singPost.id}`)}>
                    <div className="post-content">
                        <p className="post-topic">
                            {singPost.topic}
                        </p>
                        <p className="post-username">Người đăng: {singPost.username}</p>
                    </div>
                    <div className="post-attribute">
                        <p className="post-date-created">{new Date(singPost.created_at).toLocaleString()}</p>
                        <div className="post-emotion">
                        <span className="post-like">
                            {(!singPost.like_count || singPost.like_count.length === 0) ? 0 : singPost.like_count.length} 
                            <ThumbUpAltIcon />
                        </span>
                        <span className="post-dislike">
                            {(!singPost.dislike_count || singPost.dislike_count.length === 0) ? 0 : singPost.dislike_count.length} 
                            <ThumbDownAltIcon />
                        </span>
                        </div>
                    </div>
                </div>
            </div>)
            }</>
            :
             <> {homePost.length===0?"Chưa có bài viết nào, hãy viết bài viết đầu tiên của mình nào":
                homePost.slice(5*(currentPage-1), currentPage*5).map((singPost, index)=>
                    <div key={index}>
                <div className="forum-post" 
                onClick={()=>navigate(`/forum/${singPost.id}`)}>
                    <div className="post-content">
                        <p className="post-topic">
                            {singPost.topic}
                        </p>
                        <p className="post-username">Người đăng: {singPost.username}</p>
                    </div>
                    <div className="post-attribute">
                        <p className="post-date-created">{new Date(singPost.created_at).toLocaleString()}</p>
                        <div className="post-emotion">
                        <span className="post-like">
                            {(!singPost.like_count || singPost.like_count.length === 0) ? 0 : singPost.like_count.length} 
                            <ThumbUpAltIcon />
                        </span>
                        <span className="post-dislike">
                            {(!singPost.dislike_count || singPost.dislike_count.length === 0) ? 0 : singPost.dislike_count.length} 
                            <ThumbDownAltIcon />
                        </span>
                        </div>
                    </div>
                </div>
            </div>)
            }</>}
        </div>
    )
}
export default UserPost;
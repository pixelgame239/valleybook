import { useState, useEffect } from "react";
import { getNumsPost, getTopicAnswer } from "../backend/forumData";
import "../../public/assets/css/answerList.css";

const AnswerList = ( {replyList} ) =>{
    const [topicAnswer, setTopicAnswer] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const[currentPage,setCurrentPage] = useState(1);
    const handleChangingPage= (pageNumber)=>{
        setCurrentPage(pageNumber);
        }
    useEffect(()=>{
        if(replyList&&replyList.length>0){
            setTopicAnswer([]);
            setPageCount(getNumsPost(replyList,10));
            replyList.map(async singleAnswer=>{
                const tempAnswer = await getTopicAnswer(singleAnswer);
                setTopicAnswer(prevState=>[...prevState, tempAnswer]);
            })
        }
    },[replyList]);
    const pages = Array.from({ length: pageCount }, (_, index) => index + 1);
    return(
    <div className="answer-container">
        {topicAnswer.length===0?
        "Chưa có câu trả lời":
        topicAnswer.sort((a, b) => b.ans_num - a.ans_num).slice(10*(currentPage-1), 10*currentPage).map((singanswer, index) => (
            <div className="answer-post" key={index}>
              <p className="answer-username">{singanswer.username}</p>
              <p className="answer-content">{singanswer.answer}</p>
            </div>
          ))                          
        }
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
    </div>
    )
}
export default AnswerList;
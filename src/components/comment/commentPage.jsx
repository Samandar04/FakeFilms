import React, { useState } from "react";
import {
  Comments,
  CommentBot,
  CommentUser,
  CommentWrap,
  TitleComment,
  CommentMy,
  TypingCom,
} from "./style-comment";

function CommentPage() {
  const [BotComment,setBotComment]=useState([
    {
      img:"https://cdn-icons-png.flaticon.com/512/149/149071.png",
      text:"RELEASE THE MOVIE ASAP",
    },
    {
      img:"https://cdn-icons-png.flaticon.com/512/149/149071.png",
      text:"I heard about the good movie",
    },
  ])
  const [Comment,setComment]=useState([])
  const [ShowComment,setShowComment]=useState({
    comment:true
  })
  const [imgComment,setimgComment]=useState({
    index:false
  })
  const Sending=(e)=>{
    e.preventDefault()
    const inputText=document.getElementById('commenttext').value
    const inputImg="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
if(inputText===""){
  return "nan"
  
}
   else if(inputText!==""){
      const PushComment={
        img:inputImg,
        text:inputText
      }
      Comment.push(PushComment)
      // setShowComment({comment:false})
      setShowComment({comment:false})
      setimgComment({index:true})
    
    }

   console.log(inputText.length);
   const remove = document.getElementById("commenttext").value = ""
  }
  console.log(Comment);
  return (
    <CommentWrap>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      {/* Title comment start */}
      <TitleComment>
        
        <p className="comment-text"> {BotComment.length+Comment.length} Comments</p>
      </TitleComment>
      {/* Title comment end */}
      {/*Comments Start */}
      <Comments>
        {
          BotComment.map(({img,text},index)=>(
            <CommentBot>
              <div className="img">
                <img src={img} alt="" />
              </div>
              <div className="text">{text}</div>
            </CommentBot>
          ))
        }
       
        {/* <CommentBot>
          <div className="img">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
          </div>
          <div className="text">Loreddm, ipsum dolor.</div>

        </CommentBot> */}
        {/* <CommentBot>
       
        </CommentBot> */}
        <TypingCom>
        {
          ShowComment.comment===true?(<></>) : <>{
            Comment.map(({img,text},index)=>(
              <CommentMy>
              <div className="img">
            <img src={img} alt="" />
              </div>
              <div className="text">{text}</div>
            </CommentMy>
            ))
   }</>
       }
         </TypingCom>
       
      </Comments>
      <CommentUser>
            <input id="commenttext" placeholder="Send you comment..." type="text" />
          <button onClick={Sending} className="send-btn fa-solid fa-paper-plane"/>
        </CommentUser>
      {/*Comments End */}
    </CommentWrap>
  );
}

export default CommentPage;

import styled from "styled-components";

export const CommentWrap=styled.div` 
width:1050px;
position:relative ;
max-height:440px ;
background:lightskyblue;

`
export const TitleComment=styled.div` 
text-align:center ;
background:white ;

.comment-text{
padding:10px ;

}
`
export const Comments=styled.div` 
overflow-y: auto;
height:360px ;
width:100% ;
::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-track{
        box-shadow:inset 0 0 5px grey ;
        border-radius: 10px;
}
::-webkit-scrollbar-thumb{
    background-color: black;
    width: 100%;
    border-radius: 20px 0 0  20px;
}
::-webkit-scrollbar-thumb:hover{
    background: grey;
}
`
export const CommentBot=styled.div`
display: flex;
margin:10px ;
.img{
  width:50px ;
  height: 50px;
  img{
  border-radius:50%;
    width: 100%;
  }
}
.text{
  border:1px solid black ;
 padding:10px ;
 margin-left:10px ;
  background:white;
  border-radius:15px 15px 15px 0px;
}
`
export const CommentMy=styled.div` 
display: flex;
padding-top:20px ;
justify-content: flex-end;
.img{
  width:50px;
  height:50px;
  img{
  border-radius:50%;
    width: 100%;
  }
}
.text{
  border:1px solid black ;
 padding:10px ;
 margin-left:10px ;
  background:white;
  border-radius:15px 15px 15px 0px;
}
`
export const CommentUser=styled.div` 
width: 100%;
display: flex;
position: absolute;
bottom:0 ;
right:0;


  input{

position:relative ;
width: 100%;
border:none;
padding:10px;
border-radius :10px 10px 0 0 ;
}


.send-btn{
  background:transparent;
  border:none;
  margin-left:-30px ;
color:lightskyblue ;
  font-size:20px;
  cursor: pointer;
  z-index:1 ;
}
`
export const TypingCom=styled.div` 
width: 100%;
` 
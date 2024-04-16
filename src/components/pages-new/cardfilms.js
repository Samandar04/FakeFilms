import styled from "styled-components";
import FilmVideoImg from "../../img/logo.png";
export const CardWrap = styled.div`
background:#3f7392 ;
box-sizing:border-box ;
width:100% ;

`
export const FilmsFlex = styled.div`
display: flex;
justify-content: space-between;
padding:10px 10px ;

`
export const FilmImg = styled.div`
border-radius:15px;
position:relative ;
height:600px;
/* background-image:url(${FilmVideoImg}); */
background-size:100%;
background-repeat:no-repeat ;
video{
    width:100% ;
    height: 100%;
}
img{
    z-index:2;
    width:100% ;
    height:100% ;
}

`
export const FilmId = styled.div` 
width:70%;
height:250px ;
.filmstitle{
    font-size:23px;
    color:black ;
    font-weight: bold;
}
.filmsover{
    font-size:18px;
    color:white ;
}

/* height:700px ; */
p{
    font-size:23px;
}

`
export const RemoveAdvertisingS = styled.div`
position:absolute;
right:35px;

bottom: 80px;
cursor: pointer;
text-transform:capitalize ;
z-index:1 ;
border-radius:10px ;
padding:5px 8px ;
button{
    color:white ;
    cursor: pointer;
    background:transparent ;
  
   
  
}
`
export const PlayButton = styled.button`
position:absolute;
left:45% ;
top: 45%;
font-size: 40px;
background:transparent;
border:none ;
color:white ;
i{
    cursor: pointer;
}
`
export const MoreFilm = styled.div`
width: 28%;
height:1290px ;
overflow-y:auto ;
::-webkit-scrollbar{
            width:0px;
            height:0px;
        }
        &:hover{
            ::-webkit-scrollbar{
            width:3px;
            height:5px;
            color:#222 ;
        }
        ::-webkit-scrollbar-thumb {
  background: #222; 
  border-radius: 5px;
}
        ::-webkit-scrollbar-track{
            box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
        }
    }
`
export const MoreCards = styled.div`

.film{
    width:48%;

    img{
        width: 100%;
        border-radius:10px;
    }
}
.text{
    width:48%;
 margin-left:15px ;
    display: block;
    .title{
       color:black;
       /* list-style:none ; */
      text-decoration:none;
        font-weight:bold;
        font-size:22px ;
    }
    i{display: flex;
        color:gold;
        span{
color:#222 ;
margin-left:5px ;
        }
    }

    .over{
        ::-webkit-scrollbar{
            width:0px;
            height:0px;
        }
        &:hover{
            ::-webkit-scrollbar{
            width:3px;
            height:5px;
            color:#222 ;
        }
        ::-webkit-scrollbar-thumb {
  background: #222; 
  border-radius: 5px;
}
        ::-webkit-scrollbar-track{
            box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
        }
       
        }
        color:white ;
        height:150px ;
        text-decoration:none ;
        overflow-y:scroll ;
    }
}
`
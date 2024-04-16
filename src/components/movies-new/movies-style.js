import styled from "styled-components";

export const SearchBar = styled.div`
/* width: 100%; */
height: 80px;
overflow-y: hidden;
background-color: #032541;
display: flex;
justify-content: flex-end;
align-items: center;
margin-left: auto;

input{
    margin: 0px 20px;
    padding: 3px 4px;
    outline: none;
    background-color: #032541;
    border: 2px solid #0ab5e1;
    border-radius: 13px;
    text-indent: 5px;
    font-weight: bold;
    color: #fff;
    
}
`
export const MoviesCard = styled.div`
 width: 100%;
 height: auto;
 background-color: #0ab5e1;
 padding: 50px 0px;
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 
`

export const CardFilm=styled.div`
width: 300px;
margin: 10px 10px;
background-color: #032541;
overflow: hidden;
box-shadow: 2px 2px 3px #032541;

img{
    width: 100%;
    
}
`
export const TextCard=styled.div`
 display: flex;
 width: 275px;
 justify-content: space-around;
 margin: -10px 10px;
 color: #fff;
 .title{
   font-weight: 500;
   color: #0ab5e1;
 }
 .vote{
     font-weight: 500;
 }
`
import styled from "styled-components";

export const NavbarWrap=styled.nav`
width: 100%;
display: flex;
box-sizing:border-box ;
max-width:100% ;
background: #032541;
padding: 5px;
font-family: cursive;
`
export const NavbarFlex=styled.div`
width: 1200px;
margin: auto;

ul{
    display: flex;
    
    li{
        list-style: none;
        padding:0 25px 0 85px ;
        
        .link{
            text-transform: capitalize;
            text-decoration: none;
            font-size: 20px;
            color: white;
            a{
                color:white;
                text-decoration:none ;
            }
        }
    }
}
`

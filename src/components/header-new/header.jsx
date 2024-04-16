import React from 'react'
import { HeaderCard1, HeaderContainer, HeaderFlex, HeaderWrap } from './styles'

function Header() {
    const myFunc=()=>{
        alert(<HeaderCard1>hello</HeaderCard1>)
    }
    return (
        <HeaderWrap>
            <HeaderContainer>
                <HeaderFlex>
                    <HeaderCard1>
                        films
                        <button onClick={()=>myFunc()}>button</button>
                        dsds
                    </HeaderCard1>
                </HeaderFlex>
            </HeaderContainer>
        </HeaderWrap>
    )
}


export default Header
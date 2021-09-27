import styled from "styled-components";


export const NavStyle = styled.div`
display: flex;

`
export const Menu = styled.div`
flex:15%;
margin-top: 2rem;

@media (min-width: 1152px){
    flex:8%;
}

`

export const Logo = styled.div`
flex: 85%;
margin-top: 1rem;
margin-left: 0.5rem;

img {
    width: 247px;
    height: 56px;
}

@media (min-width: 1152px){
    flex: 82%;
    margin-left: 1.2rem;
}

`
export const ConnectBtn = styled.div`
display: none;

@media (min-width: 1152px){
    display: flex;
    flex:10%;
    
    button {
        background: #5E6CFA;
        border: none;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.045em;
        text-transform: capitalize;
        color: #FFFFFF;
        width: 210px;
        height: 56px;
        margin-top: 1rem;
        margin-right: 4rem;
    }
    
  }

`
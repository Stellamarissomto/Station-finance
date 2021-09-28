import styled from "styled-components";
import px2vw from "../../theme/px2vw";


export const NavStyle = styled.div`
display: flex;

`
export const Menu = styled.div`
flex:15%;
margin-top: ${px2vw(32,414)};
cursor: pointer;

@media (min-width: 1024px){
    margin-top:${px2vw(32,1440)};
    flex:8%;
}

`

export const Logo = styled.div`
flex: 85%;
margin-top: ${px2vw(16,414)};
margin-left: ${px2vw(8, 414)};

img {
    width: ${px2vw(247, 414)};
    height: ${px2vw(56, 414)};
}

@media (min-width: 1024px){
    flex: 82%;
    margin-left: ${px2vw(32, 1440)};
    margin-top: ${px2vw(16, 1440)};
   

    img{
        width: ${px2vw(247, 1440)};
        height: ${px2vw(56, 1440)};
    }
`
export const ConnectBtn = styled.div`
display: none;


@media (min-width: 1024px){
    display: flex;
    flex:10%;
    
    button {
        background: #5E6CFA;
        border: none;
        font-family: Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: ${px2vw(15, 1440)};
        line-height: ${px2vw(23, 1440)};
        text-align: center;
        letter-spacing: 0.045em;
        text-transform: capitalize;
        color: #FFFFFF;
        width: ${px2vw(200, 1440)};
        height:${px2vw(56, 1440)};
        margin-top: ${px2vw(16, 1440)};
        margin-right:${px2vw(64, 1440)};
        cursor: pointer;
    }
    
  }

`
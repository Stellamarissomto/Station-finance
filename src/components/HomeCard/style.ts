import styled from "styled-components";
import px2vw from "../../theme/px2vw";

export const Card = styled.div`
display: flex;
flex-direction: column;
background: #F2F2F4;
border-radius: ${px2vw(10,414)};
width: 75%;
height: ${px2vw(180,414)};
margin: 0 auto;
margin-bottom:${px2vw(51.2,414)};
cursor: pointer;

@media (min-width: 1024px){
    margin: 0;
    width: 25%;
    height:${px2vw(140,1440)};
    border-radius: ${px2vw(10,1440)};
    margin-bottom:${px2vw(51.2,1440)};
}




`
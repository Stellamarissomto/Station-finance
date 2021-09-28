import styled from "styled-components";
import px2vw from "../../theme/px2vw";


export const Section = styled.div`
background: #1F2436;
border-radius: ${px2vw(10,414)};
width: 90%;
height: ${px2vw(900,414)};
margin: 0 auto;
margin-top: ${px2vw(80,414)};
padding-bottom: ${px2vw(48,414)};
margin-bottom:  ${px2vw(48,414)};

@media (min-width: 1024px){
    border-radius: ${px2vw(10,1440)};
    width: 85%;
    height:${px2vw(410,1440)};
    margin-top: ${px2vw(80,1440)};
    padding-bottom: ${px2vw(48,1440)};
    margin-bottom:  ${px2vw(50,1440)};
}


`


export const HeroText = styled.h2`

font-family: Open Sans;
font-style: normal;
font-weight: 300;
font-size: padding-bottom: ${px2vw(48,414)};
margin-bottom:${px2vw(28,414)};
line-height: ${px2vw(38,414)};
letter-spacing: 0.045em;
text-align: center;
padding-top: ${px2vw(32,414)};

color: #FFFFFF;

@media (min-width: 1024px ) {
    padding-top: ${px2vw(16,1400)};
    font-size: ${px2vw(50,1440)};
    margin-left:${px2vw(260,1440)};
    margin-bottom:${px2vw(28,1440)};
    line-height: ${px2vw(38,1440)};
    
   
}


`
export const Station = styled.img`
width: ${px2vw(187,414)};
height:${px2vw(31,414)};
display: block;
margin-left: auto;
margin-right: auto;

@media (min-width: 1024px){
    margin-left: ${px2vw(16,1440)};
    width: ${px2vw(380,1440)};
    height: ${px2vw(50,1440)};
    padding-top:${px2vw(52,1440)};
    
}

`

export const HeroP = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: 300;
font-size: ${px2vw(17,414)};
line-height: ${px2vw(27,414)};
letter-spacing: 0.045em;
text-align: center;
margin-top: ${px2vw(48,414)};
margin-bottom: ${px2vw(48,414)};

color: #FFFFFF;

@media (min-width: 1024px){
    
    font-size: ${px2vw(24,1440)};
    margin-top: ${px2vw(8,1440)};
    margin-bottom: ${px2vw(48,1440)};
    line-height: ${px2vw(27,1440)};
   
}
`

export const CardImage = styled.img`
width: ${px2vw(50,414)};
height: ${px2vw(50,414)};
margin-left: auto;
margin-right: auto;
margin-top: ${px2vw(40,414)};

@media (min-width: 1024px){
    
    margin-top: ${px2vw(32,1440)};
    width: ${px2vw(50,1440)};
    height: ${px2vw(50,1440)};
   
}

`
export const CardText = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size:  ${px2vw(17,414)};
line-height:${px2vw(27,414)};
text-align: center;
letter-spacing: 0.045em;
text-align: center;
color: #000000;

@media (min-width: 1024px){
    font-size:  ${px2vw(17,1440)};
    line-height:${px2vw(27,1440)};
}
`

export const Welcome = styled.div`
@media (min-width: 1024px){
    display: flex;
}
`

export const Card = styled.div`
@media (min-width: 1024px){
    display: flex;
   flex-direction: row;
   gap:  ${px2vw(32,1440)};
   margin-left:  ${px2vw(160,1440)};
 
}
`

import styled from "styled-components";


export const Section = styled.div`
background: #1F2436;
border-radius: 10px;
width: 90%;
height: 900px;
margin: 0 auto;
margin-top: 5rem;
padding-bottom: 3rem;
margin-bottom: 3rem;

@media (min-width: 1152px){
    height: 454px;
}

@media (min-width: 1440px){
   width: 85%;
   margin-top: 7rem;
}

`


export const HeroText = styled.h3`

font-family: Open Sans;
font-style: normal;
font-weight: 300;
font-size: 28px;
line-height: 38px;
letter-spacing: 0.045em;
text-align: center;
padding-top: 2rem;

color: #FFFFFF;

@media (min-width: 1152px ) {
    
    font-size: 40px;
    margin-left: 19rem;
   
}

@media (min-width: 1200px){
    
    margin-left: 22rem;
   
}

@media (min-width: 1440px){
    
    margin-left: 25rem;
   
}
`
export const Station = styled.img`
width: 187px;
height: 31px;
display: block;
margin-left: auto;
margin-right: auto;

@media (min-width: 1152px){
    margin-left: 1rem;
    width: 185px;
    height: 34px;
    padding-top: 4.5rem;
    
}
`

export const HeroP = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 27px;
letter-spacing: 0.045em;
text-align: center;
margin-top: 3rem;
margin-bottom: 3rem;

color: #FFFFFF;

@media (min-width: 1152px){
    
    font-size: 24px;
    margin-top: 1rem;
   
}
`

export const CardImage = styled.img`
width: 60px;
height: 60px;
margin-left: auto;
margin-right: auto;
margin-top: 2.5rem;

`
export const CardText = styled.p`
font-family: Open Sans;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 27px;
text-align: center;
letter-spacing: 0.045em;
text-align: center;
color: #000000;
`

export const Welcome = styled.div`
@media (min-width: 1152px){
    display: flex;
}
`

export const Card = styled.div`
@media (min-width: 1152px){
    display: flex;
   flex-direction: row;
}
`

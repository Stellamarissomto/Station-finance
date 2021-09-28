import styled from "styled-components";


export const Card = styled.div`
display: flex;
flex-direction: column;
background: #F2F2F4;
border-radius: 10px;
width: 75%;
height: 180px;
margin: 0 auto;
margin-bottom: 3.2rem;
cursor: pointer;

@media (min-width: 1152px){
    margin: 0;
    width: 25%;
    height: 140px;
}

@media (min-width: 1440px){
    width: 25%;
    height: 150px;
}


`
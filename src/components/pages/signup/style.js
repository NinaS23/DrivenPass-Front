import styled from "styled-components";

const MainContent = styled.div`
display: flex;
margin-top: 4%;
flex-direction: column;
justify-content: center;
 align-items: center;
div{
 justify-content: center;
 align-items: center;
}
p{
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 22px;
/* identical to box height */

text-align: center;
text-decoration-line: underline;

color: #000000;

}

`

const Title = styled.h1`
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.012em;
color:  #005985;

`
const Inputs = styled.div`

`




export {
    MainContent,
    Title,
    Inputs
}
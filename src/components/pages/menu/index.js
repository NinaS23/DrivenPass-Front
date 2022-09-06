import styled from "styled-components";
import credentials from "../../../assets/images/credentials.svg";
import safeNotes from "../../../assets/images/safeNotes.svg";
import card from "../../../assets/images/card.svg";
import { Link } from "react-router-dom";

export default function Menu({setType, pathWay}){
    setType("Minhas senhas")

    return (
        <>
        <ContentMenu>
            <div>
            <StyledLink to={"/credentials"}> 
                <Items>                
                <img src={credentials} alt="cadeado" />
                <h3>credentials</h3>
                </Items>
                </StyledLink>
                <Circle><h3>1</h3></Circle>
            </div>
                <div>
                    <StyledLink to={"/safeNotes"}>
                        <Items>
                            <img src={safeNotes} alt="cadeado" />
                            <h3>safeNotes</h3>
                        </Items>
                    </StyledLink>
                    <Circle><h3>1</h3></Circle>
                </div>
            <div>
                <Items>                
                <img src={card} alt="cadeado" />
                <h3>credentials</h3>
                </Items>
                <Circle><h3>1</h3></Circle>
            </div>
            <div>
                <Items>                
                <img src={safeNotes} alt="cadeado" />
                <h3>credentials</h3>
                </Items>
                <Circle><h3>1</h3></Circle>
            </div>
        </ContentMenu>
        <Plus>
            <h2>+</h2>
            </Plus>
        </>

    )
}


const ContentMenu = styled.div`
padding-top:5%;
display: flex;
flex-direction: column;
justify-content:center;
div{
    margin-left:3%;
    margin-right:3%;
    display: flex;
    justify-content:space-between;
    margin-top:5%;
}
`
const Plus = styled.div`
position: absolute;
bottom: 12px;
height: 61px;
width: 61px;
background-color:  #005985;
border-radius: 50%;
justify-content:center;
margin-left:4%;
padding-left: 4%;
margin-top:30%;
h2{

font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 58px;
/* identical to box height */
color: #FFFFFF
}
`

const Items = styled.div`
h3{
    font-family: 'Recursive';
    margin-left: 5%;
font-style: normal;
margin-top: 4%;
font-weight: 400;
font-size: 18px;
line-height: 22px;
/* identical to box height */


color: #222222;
}
`

const Circle = styled.div`
height: 35px;
width: 35px;
background-color:  #005985;
border-radius: 50%;
justify-content:center;
h3{
    margin-top:15%;
    margin-left:13px;
    font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #FFFFFF;

}
`

const StyledLink = styled(Link)`
text-decoration: none;
`
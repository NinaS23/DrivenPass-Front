       
import styled from "styled-components";
import card from "../../../assets/images/card.svg";
import {Link} from "react-router-dom";

export default function Cards({setType,setpathWay}){
    setType("cards")
    return (
        <>
        <ContentMenu>
            <div>
            <StyledLink to={"/card/:id"}>
                <Items>                
                <img src={card} alt="cadeado" />
                <h3>card</h3>
                </Items>
                </StyledLink>
            </div>
            <div>
                <Items>                
                <img src={card} alt="cadeado" />
                <h3>card</h3>
                </Items>
            </div>
            <div>
                <Items>                
                <img src={card} alt="cadeado" />
                <h3>card</h3>
                </Items>
            </div>
            <div>
                <Items>                
                <img src={card} alt="cadeado" />
                <h3>card</h3>
                </Items>
            </div>
            <div>
                <Items>                
                <img src={card} alt="cadeado" />
                <h3>card</h3>
                </Items>
                </div>
            </ContentMenu>
            <Link to={"/cadastro-card"}>
                <Plus><h2>+</h2></Plus>
            </Link>
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
overflow-y: hidden;
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
font-weight: 400;
font-size: 18px;
line-height: 22px;
/* identical to box height */


color: #222222;
}
`


const StyledLink = styled(Link)`
text-decoration: none;
`


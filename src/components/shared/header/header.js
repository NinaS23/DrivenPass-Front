import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import lock from "../../../assets/images/lock.svg";
import out from "../../../assets/images/out.svg";

export default function Header({ type }) {
    const location = useLocation();

    function canRenderHeader() {
        return !["/", "/sign-up"].includes(location.pathname);
    }

    return canRenderHeader() ? (
        <>
            <HeaderContent>
                <div>
                    <Link to={"/menu"}>
                        <img src={lock} alt="cadeado" />
                    </Link>
                    <h2>DrivenPass</h2>
                </div>
                <Link to={"/"}>
                    <img src={out} alt="cadeado" />
                </Link>
            </HeaderContent>
            <Status><h3>{type}</h3></Status>
        </>
    ) : null;
}

const HeaderContent = styled.div`
display: flex;
justify-content: space-between;
img{
    margin-right: 7%;
    margin-top: 4%;
}
div{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
    margin-left: 17%;
    height:60px ;
    width: 45px;
    margin-bottom: 3%;
  }
    h2{
        margin-top: 7%;
        margin-left: 4%;
     font-family: 'Righteous';
     font-style: normal;
     font-weight: 400;
     font-size: 36px;
     line-height: 45px;
     display: flex;
     align-items: center;
     text-align: center;
     letter-spacing: -0.012em;
     color: #005985;
  }
}

`
const Status = styled.div`
width: 100%;
height: 41px;
background-color: #005985;
justify-content: center;
align-items:center;
padding-left: 3%;
padding-top:2%;
h3{
    font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #FFFFFF;

}

`

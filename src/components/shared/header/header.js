import { useLocation } from "react-router-dom";
import styled from "styled-components";
import lock from "../../../assets/images/lock.svg";
import out from "../../../assets/images/out.svg";

export default function Header() {
    const location = useLocation();

    function canRenderHeader() {
        return !["/", "/sign-up"].includes(location.pathname);
    }

    return canRenderHeader() ? (
        <>
            <HeaderContent>
                <div>
                    <img src={lock} alt="cadeado" />
                    <h2>DrivenPass</h2>
                </div>
                <img src={out} alt="cadeado" />
            </HeaderContent>
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

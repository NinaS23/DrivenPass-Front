
import styled from "styled-components";
import wifi from "../../../assets/images/wifi.svg";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";


export default function Wifi({setType}){
    setType("wifi")
    const [data,setData] = useState([])
    const [length,setLength] = useState(0)
    const token = localStorage.getItem("token");
    async function getWifi() {
   
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get(`http://localhost:6003/networks`,config)
            .then(({ data }) => {
                setData(data)
                setLength(data.length)
            })
            .catch((error) => {
                swal(error.response.data, error.response.data, "error")
            });
    }
    useEffect(() => {
        getWifi()
    }, [length]);
  
    function Wifis({name,id}) {
        return (
            <div>
                <StyledLink to={`/wifi/${id}`}>
                    <Items>
                        <img src={wifi} alt="cadeado" />
                        <h3>{name}</h3>
                    </Items>
                </StyledLink>
            </div>
        )
    }
    return (
        <>
            <ContentMenu>
                {data.length === 0 ? (
                    <p>Não há Wifi cadastrados</p>
                ) : (
                    data.map((e, index) => (
                        <Wifis key={index} name={e.networkName} id={e.id} />
                    ))
                )}
            </ContentMenu>
            <Link to={"/cadastro-wifi"}>
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
position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #005985;
  color: white;
  text-align: center;
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
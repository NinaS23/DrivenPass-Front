import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Delete from "../../shared/deleIcon.js";
import swal from "sweetalert";
import axios from "axios";
import { useState, useEffect } from "react";

export default function WifiById({ setType,setPathBack }) {
    setType("wifi")
    setPathBack("/wifi")
    const text = "< voltar"
    const { id } = useParams();
    const [data, setData] = useState([])
    const token = localStorage.getItem("token");

    async function getWifiById() {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get(`http://localhost:6003/network/${id}`, config)
            .then(({ data }) => {
                setData(data)
            })
            .catch((error) => {
                swal(error.response.data, error.response.data, "error")
            });
    }
    
    useEffect(() => {
        getWifiById()
    }, []);
    
    return (
        <>
            <ContentCredential>
                <h3>nome do wifi</h3>
                <div>
                    <ItemsCredentials>
                        <h2>Nome da rede</h2>
                        <p>{data.networkName}</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>Rótulo da rede</h2>
                        <p>{data.title}</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>Senha</h2>
                        <p>conteúdo sensivel</p>
                    </ItemsCredentials>
                </div>
            </ContentCredential>
            <Footer>
                <Link to={"/wifi"}>
                    <Voltar>{text}</Voltar>
                </Link>
                <Delete
                    id={data.id}
                    pathBack={"/network"}
                    pathFront={"/wifi"}
                />
            </Footer>
        </>

    )
}

const ContentCredential = styled.div`
display: flex;
flex-direction: column;
margin-left: 7%;
margin-top: 5%;
width: 100%;
height: 50px;
h3{
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
color: #222222;

}
`

const ItemsCredentials = styled.div`
margin-top: 21px;
h2{
    font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;

color: #222222;
}
p{
    font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;

color: #222222;

}
`

const Voltar = styled.h3`
font-family: 'Recursive';
font-style: normal;
position: absolute;
bottom:0px;
font-weight: 400;
margin-top: 5%;
font-size: 18px;
line-height: 22px;
/* identical to box height */

text-align: center;
text-decoration-line: underline;

color: #000000;
`

const Footer = styled.div`
display: flex;
position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #FFFFFF;
  color: white;
  text-align: center;
`
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Delete from "../../shared/deleIcon.js";
import swal from "sweetalert";
import axios from "axios";
import { useState, useEffect } from "react";

export default function CredentialById({ setType,setPathBack }) {
    setType("credentials")
    setPathBack("/credentials")
    const text = "< voltar"
    const { id } = useParams();
    const [data, setData] = useState([])
    const token = localStorage.getItem("token");
    async function getCredential() {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get(`http://localhost:6003/credential/${id}`, config)
            .then(({ data }) => {
                setData(data)
            })
            .catch((error) => {
                swal(error.response.data, error.response.data, "error")
            });
    }
  
    useEffect(() => {
        getCredential()
    }, []);

    return (
        <>
            <ContentCredential>
                <h3>{data.title}</h3>
                <div>
                    <ItemsCredentials>
                        <h2>URL</h2>
                        <p>{data.url}</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>Usuário</h2>
                        <p>{data.username}</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>Senha</h2>
                        <p>{data.password}</p>
                    </ItemsCredentials>
                </div>
            </ContentCredential>
            <Footer>
                <Delete
                    id={data.id}
                    pathBack={"/credential"}
                    pathFront={"/credentials"}
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

const Footer = styled.div`
 position: absolute;
width: 100%;
bottom: 0px;
display: flex;
padding-left: 5%;
padding-right:15%;
justify-content: flex-end;
`
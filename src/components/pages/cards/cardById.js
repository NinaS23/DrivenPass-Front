import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Delete from "../../shared/deleIcon.js";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";

export default function CardById({ setType,setPathBack }) {
    setType("card")
    setPathBack("/cards")
    const text = "< voltar"
    let virtual = ""
    let typeCard = ""
    const { id } = useParams();
    const [data, setData] = useState([])
    const token = localStorage.getItem("token");
    async function getCard() {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get(`http://localhost:6003/card/${id}`, config)
            .then(({ data }) => {
                setData(data)
            })
            .catch((error) => {
                swal(error.response.data, error.response.data, "error")
            });
    }
 
    useEffect(() => {
        getCard()
    }, []);

    if (data.isVirtual === true) {
        virtual = "sim"
    } else {
        virtual = "não"
    }


    if (data.type === "credit") {
        typeCard = "crédito"
    } else if (data.type === "debit") {
        typeCard = "débito"
    } else {
        typeCard = "débito e crédito"
    }

    return (
        <>
            <ContentCredential>
                <h3>{data.title}</h3>
                <div>
                    <ItemsCredentials>
                        <h2>Número do cartão</h2>
                        <p>{data.number_card}</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>Nome Impresso</h2>
                        <p>{data.name}</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>titulo do cartão</h2>
                        <p>{data.title}</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>Código de Segurança</h2>
                        <p>o código é criptografado</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>data de expiração</h2>
                        <p>{data.expirationDate}</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>senha</h2>
                        <p>senha criptografada</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>tipo do cartão</h2>
                        <p>{typeCard}</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>virtual</h2>
                        <p>{virtual}</p>
                    </ItemsCredentials>
                </div>
            </ContentCredential>
            <Footer>
                <Link to={"/cards"}>
                    <Voltar>{text}</Voltar>
                </Link>
                <Delete
                    id={data.id}
                    pathBack={"/cards"}
                    pathFront={"/cards"}
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
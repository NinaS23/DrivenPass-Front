//import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Delete from "../../shared/deleIcon.js";
export default function CardById({ setType }) {
    setType("card")
    const text = "< voltar"
    //const { id } = useParams();
    return (
        <>
            <ContentCredential>
                <h3>cartão</h3>
                <div>
                    <ItemsCredentials>
                        <h2>Número do cartão</h2>
                        <p>conteudo do titulo referente a credencial</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>Nome Impresso</h2>
                        <p>conteudo do titulo referente a credencial</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>titulo do cartão</h2>
                        <p>conteudo do titulo referente a credencial</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>Código de Segurança</h2>
                        <p>conteudo do titulo referente a credencial</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>data de expiração</h2>
                        <p>conteudo do titulo referente a credencial</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>senha</h2>
                        <p>conteudo do titulo referente a credencial</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>tipo do cartão</h2>
                        <p>conteudo do titulo referente a credencial</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>virtual</h2>
                        <p>conteudo do titulo referente a credencial</p>
                    </ItemsCredentials>
                </div>
            </ContentCredential>
            <Footer>
            <Link to={"/cards"}>
                    <Voltar>{text}</Voltar>
                </Link>
                <Delete />
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
  height: 10%;

`
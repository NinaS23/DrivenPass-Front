//import { useParams } from "react-router-dom";
import styled from "styled-components";
import Confirmation from "../../shared/modalConfirmation.js";
import Delete from "../../shared/deleIcon.js";
export default function CredentialById({ setType }) {
    setType("credenciais")
    const text = "< voltar"
    //const { id } = useParams();
    return (
        <>
            <ContentCredential>
                <h3>nome da credencial</h3>
                <div>
                    <ItemsCredentials>
                        <h2>URL</h2>
                        <p>conteudo do titulo referente a credencial</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>Usuário</h2>
                        <p>conteudo do titulo referente a credencial</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>Senha</h2>
                        <p>conteudo do titulo referente a credencial</p>
                    </ItemsCredentials>
                </div>
            </ContentCredential>
            <Footer>
                <Voltar>{text}</Voltar>
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
 position: absolute;
bottom:30px;
width: 100%;
display: flex;
padding-left: 5%;
padding-right:15%;
justify-content: space-between;
`
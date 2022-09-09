import styled from "styled-components";
import Confirmation from "../../shared/modalConfirmation.js";
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function RegisterCard({ setType }) {
    setType("card")
    let typeCard = ""
    let isVirtualCard;
    const list = [
        { id: 1, name: 'escolha uma opção' },
        { id: 1, name: 'crédito' },
        { id: 2, name: 'débito' },
        { id: 3, name: 'ambos' }
    ];
    const isVirtual = [
        { id: 1, name: 'escolha uma opção' },
        { id: 1, name: 'sim' },
        { id: 2, name: 'não' }
    ];
    const text = "< voltar";
    const [disabled, setDisabled] = useState(false);//setar true depois
    const [cardInfo, setCardInfo] = useState({
        number_card: "",
        name: "",
        title: "",
        CVC: "",
        expirationDate: "",
        password: "",
        isVirtual: "",
        type: ""
    });
    if (cardInfo.type === "crédito") {
        typeCard = "credit"
    } else if (cardInfo.type === "débito") {
        typeCard = "debit"
    } else {
        typeCard = "debitAndCredit"
    }
    console.log(typeCard)

    if (cardInfo.isVirtual === "sim") {
        isVirtualCard = true
    } else {
        isVirtualCard = false
    }
    console.log(isVirtualCard)
    return (
        <>
            <Register>cadastro</Register>
            <ContentMenu>
                <Items>
                    <h3>Número do cartão</h3>
                    <input
                        type="text"
                        placeholder=""
                        disabled={disabled}
                        value={cardInfo.number_card}
                        onChange={e => { setCardInfo({ ...cardInfo, number_card: e.target.value }) }}
                    />
                </Items>
                <Items>
                    <h3>Nome Impresso</h3>
                    <input 
                    type="text" 
                    disabled={disabled}
                    placeholder="" 
                    value={cardInfo.name}
                    onChange={e => { setCardInfo({ ...cardInfo, name: e.target.value }) }}
                    />
                </Items>
                <Items>
                    <h3>titulo do cartão</h3>
                    <input 
                    type="text" 
                    disabled={disabled}
                    placeholder="" 
                    value={cardInfo.title}
                    onChange={e => { setCardInfo({ ...cardInfo, title: e.target.value }) }}
                    />
                </Items>
                <Items>
                    <h3>Código de Segurança</h3>
                    <input 
                    type="text" 
                    disabled={disabled}
                    placeholder="" 
                    value={cardInfo.CVC}
                    onChange={e => { setCardInfo({ ...cardInfo, CVC: e.target.value }) }}
                    />
                </Items>
                <Items>
                    <h3>data de expiração</h3>
                    <input 
                    type="text" 
                    disabled={disabled}
                    placeholder="" 
                    value={cardInfo.expirationDate}
                    onChange={e => { setCardInfo({ ...cardInfo, expirationDate: e.target.value }) }}
                    />
                </Items>
                <Items>
                    <h3>senha</h3>
                    <input 
                    type="text" 
                    disabled={disabled}
                    placeholder="" 
                    value={cardInfo.password}
                    onChange={e => { setCardInfo({ ...cardInfo, password: e.target.value }) }}
                    />
                </Items>
                <Items>
                    <h3>tipo do cartão</h3>
                    <select
                        name="select"
                        className="inputText"
                        value={cardInfo.type}
                        onChange={e => { setCardInfo({ ...cardInfo, type: e.target.value }) }}
                    >
                        {list.map((item, index) => (
                            <option value={item.name}>{item.name}</option>
                        ))}
                    </select>

                </Items>
                <Items>
                    <h3>o cartão é virtual</h3>
                    <select
                        name="select"
                        className="inputText"
                        value={cardInfo.isVirtual}
                        onChange={e => { setCardInfo({ ...cardInfo, isVirtual: e.target.value }) }}
                    >
                        {isVirtual.map((item, index) => (
                            <option value={item.name}>{item.name}</option>
                        ))}
                    </select>

                </Items>
            </ContentMenu>
            <Footer>
                <Link to={"/cards"}>
                    <Voltar>{text}</Voltar>
                </Link>
                <Confirmation />
            </Footer>
        </>

    )
}


const Register = styled.h2`
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
margin-top: 5%;
margin-left: 5%;
color: #222222;

`
const ContentMenu = styled.div`
padding-top:5%;
display: flex;
align-items: center;
flex-direction: column;
justify-content:center;
overflow-y: scroll;
div{
    margin-left:3%;
    margin-right:3%;
    display: flex;
    justify-content:space-between;
    margin-top:5%;
}
`
const Footer = styled.div`
margin-top: 10%;
width: 100%;
display: flex;
padding-left: 5%;
padding-right:15%;
justify-content: space-between;
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

const Items = styled.div`
display: flex;
flex-direction: column;

h3{
    font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #222222;
}
input{
    
background: #FFFFFF;
border: 3px solid #005985;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width:338px;
height: 40px;
}
select{
    background: #FFFFFF;
border: 3px solid #005985;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width:338px;
height: 40px; 
margin-top: 3%;
}
`





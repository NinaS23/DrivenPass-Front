import styled from "styled-components";
import Confirmation from "../../shared/modalConfirmation.js";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RegisterSafeNotes({ setType,setPathBack }) {
    setType("safeNotes")
    setPathBack("/safeNotes")
    const text = "< voltar";
    const [safeNotesInfo, setSafeNotesInfo] = useState({
        title: "",
        note: "",
    });
    const [disabled, setDisabled] = useState(false);//setar true depois
    const body = {
        title: safeNotesInfo.title,
        note: safeNotesInfo.note
    }
    return (
        <>
            <Register>cadastro</Register>
            <ContentMenu>
                <Items>
                    <h3>Título</h3>
                    <input
                        type="text"
                        placeholder=""
                        disabled={disabled}
                        value={safeNotesInfo.title}
                        onChange={e => { setSafeNotesInfo({ ...safeNotesInfo, title: e.target.value }) }}
                    />
                </Items>
                <Items>
                    <h3>Anotação</h3>
                    <textarea
                        type="text"
                        placeholder=""
                        disabled={disabled}
                        value={safeNotesInfo.note}
                        onChange={e => { setSafeNotesInfo({ ...safeNotesInfo, note: e.target.value }) }}
                    />
                </Items>
            </ContentMenu>
            <Footer>
                <Confirmation
                    body={body}
                    setDisabled={setDisabled}
                    pathFront={"/safeNotes"}
                    pathBack={"/safeNote"}
                />
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
div{
    margin-left:3%;
    margin-right:3%;
    display: flex;
    justify-content:space-between;
    margin-top:5%;
}
`
const Footer = styled.div`
 position: absolute;
bottom:30px;
width: 100%;
display: flex;
padding-left: 5%;
padding-right:15%;
justify-content: flex-end;
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
textarea{
    background: #FFFFFF;
border: 3px solid #005985;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width:338px;
height: 300px; 
}
`



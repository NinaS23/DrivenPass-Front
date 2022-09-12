import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Delete from "../../shared/deleIcon.js";
import swal from "sweetalert";
import axios from "axios";
import { useState, useEffect } from "react";

export default function SafeNotesById({ setType,setPathBack }) {
    setType("safeNotes")
    setPathBack("/safeNotes")
    const text = "< voltar"
    const { id } = useParams();
    const [data, setData] = useState([])
    const token = localStorage.getItem("token");
    async function getSafeNote() {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get(`https://drivenpass-nina.herokuapp.com/safeNote/${id}`, config)
            .then(({ data }) => {
                setData(data)
            })
            .catch((error) => {
                swal(error.response.data, error.response.data, "error")
            });
    }
    useEffect(() => {
        getSafeNote()
    }, []);
    return (
        <>
            <ContentCredential>
                <h3>{data.title}</h3>
                <div>
                    <ItemsCredentials>
                        <h2>Titulo</h2>
                        <p>{data.title}</p>
                    </ItemsCredentials>
                    <ItemsCredentials>
                        <h2>Anotação</h2>
                        <Note>{data.note}</Note>
                    </ItemsCredentials>
                </div>
            </ContentCredential>
            <Footer>
                <Delete 
                  id={data.id}
                  pathBack={"/safeNote"}
                  pathFront={"/safeNotes"}
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
const Note = styled.div`
width:338px;
height: 300px; 
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
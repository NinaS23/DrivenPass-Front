
import styled from "styled-components";
import safeNotes from "../../../assets/images/safeNotes.svg";
import {Link} from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import swal from "sweetalert";

export default function SafeNotes({setType,setPathBack}){
    setType("safeNotes")
    setPathBack("/menu")
    const [data,setData] = useState([])
    const [length,setLength] = useState(0)
    const token = localStorage.getItem("token");
    async function getSafeNotes() {
   
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get(`http://localhost:6003/safeNote`,config)
            .then(({ data }) => {
                setData(data)
                setLength(data.length)
            })
            .catch((error) => {
                swal(error.response.data, error.response.data, "error")
            });
    }
    useEffect(() => {
        getSafeNotes()
    }, [length]);

    function SafeNote({title,id}) {
        return (
            <div>
                <StyledLink to={`/safeNotes/${id}`}>
                    <Items>
                        <img src={safeNotes} alt="cadeado" />
                        <h3>{title}</h3>
                    </Items>
                </StyledLink>
            </div>
        )
    }

    return (
        <>
            <ContentMenu>
                {data.length === 0 ? (
                    <p>Não há notas cadastradas</p>
                ) : (
                    data.map((e, index) => (
                        <SafeNote key={index} title={e.title} id={e.id}/>
                    ))
                )}

            </ContentMenu>
            <Link to={"/cadastro-safeNotes"}>
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
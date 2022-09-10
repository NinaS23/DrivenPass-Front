
import styled from "styled-components";
import credentials from "../../../assets/images/credentials.svg";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useState } from "react";

export default function Credentials({setType}){
    setType("credenciais")
    const [data,setData] = useState([])
    const [length,setLength] = useState(0)
    const token = localStorage.getItem("token");
    async function getCredentials() {
   
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        axios
            .get(`http://localhost:6003/credentials`,config)
            .then(({ data }) => {
                setData(data)
                setLength(data.length)
            })
            .catch((error) => {
                swal(error.response.data, error.response.data, "error")
            });
    }
    useEffect(() => {
        getCredentials()
      }, [length]);
    

    function Credential({title,id}) {
        return (
            <div>
            <StyledLink to={`/credentials/${id}`}>
                <Items>
                    <img src={credentials} alt="cadeado" />
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
          <p>Não há credenciais cadastradas</p>
        ) : (
          data.map((e, index) => (
            <Credential key={index} title={e.title} id={e.id}/>
          ))
        )}
            </ContentMenu>
            <Link to={"/cadastro-credentials"}>
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



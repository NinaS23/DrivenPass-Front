import styled from "styled-components";


export default function RegisterCredentials({ setType }) {
    setType("credenciais")
    return (
        <>
         <Register>cadastro</Register>
            <ContentMenu>
                <Items>
                    <h3>Título</h3>
                    <input type="text" placeholder="" />
                </Items>
                <Items>
                    <h3>URL</h3>
                    <input type="text" placeholder="" />
                </Items>  
                <Items>
                    <h3>Usuário</h3>
                    <input type="text" placeholder="" />
                </Items>
                <Items>
                    <h3>Senha</h3>
                    <input type="text" placeholder="" />
                </Items>
            </ContentMenu>
            <Plus><h2>+</h2></Plus>
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
const Plus = styled.div`
height: 61px;
width: 61px;
background-color:  #005985;
border-radius: 50%;
justify-content:center;
padding-left:4%;
margin-top:28%;
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
`



import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function FormsLoginSingin({
     sendFormes,
     email, setEmail,
     password, setPassword,
     LinkTo, TextRedirect, TextButton,
     disabled, corBackgroundInput
    }){


    return(
      <>
        <Form onSubmit={sendFormes}>
 
                <h3>Usuário (e-mail)</h3>
                <Input placeholder="" type="email" required value={email} onChange={e => setEmail(e.target.value)} disabled={disabled} />

                <h3>senha</h3>
                <Input placeholder="" type="password" required value={password} onChange={e=>setPassword(e.target.value)} disabled={disabled}/>

       <Button disabled={disabled} corBackgroundInput={corBackgroundInput}><h3>{TextButton}</h3>  </Button>
       
        </Form>

        <RedirectRoute >
       
        <Link to={LinkTo}>
          <h1>{TextRedirect}</h1>
        </Link>
        </RedirectRoute>


      </>
    )
}


const Form = styled.form `
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 295px;
padding-top: 20%;

`
const Input = styled.input`
   height: 40px;
    width:80%;
    border-radius:6px;
    margin-bottom:11px;
    border: 3px solid #005985;
`
const RedirectRoute = styled.div`
a{
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 300;
  
}
@media(max-width: 796px) {
        margin-bottom: 50px;
        }
`

const Button = styled.button`
    margin-top:20%;
    background-color: #9BFBB0;
    height: 40px;
    width:80%;
    border:  none;
    border-radius: 6px;
    h3{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
        color:#000000;
        font-size: 18px;
    }
`
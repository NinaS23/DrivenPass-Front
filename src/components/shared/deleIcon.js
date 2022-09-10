import axios from "axios";
import Modal from "react-modal";
import styled from "styled-components";
import swal from 'sweetalert';
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

Modal.setAppElement(".root");

function Delete({ id,pathFront,pathBack }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token")
  const navigate = useNavigate()

  function modalDinamico() {
    setIsOpen(!isOpen);
  }

  async function deletePost() {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`http://localhost:6003${pathBack}/${id}`, config);
      setLoading(false);
      modalDinamico();
      navigate(pathFront)
    } catch (e) {
      modalDinamico();
      setLoading(false);
      swal( "opsssss",
       "insira os dados corretamente",
      "error",) 
    }
  }

  return (
    <Conteudo>
         <Plus onClick={()=> modalDinamico()}><h2>x</h2></Plus>
      <Modal
        isOpen={isOpen}
        className="_"
        overlayClassName="_"
        contentElement={(props, children) => (
          <ModalStyle {...props}>{children}</ModalStyle>
        )}
        overlayElement={(props, contentElement) => (
          <OverlayStyle {...props}>{contentElement}</OverlayStyle>
        )}
      >
        <div className="pergunta">
        really want to delete?
        </div>
        <div className="opcao">
          <button className="voltar" onClick={modalDinamico} disabled={loading}>
            No
          </button>
          {loading ? (
            <Carregando>
              <ThreeDots color="#FFFFFF" width={50} />
            </Carregando>
          ) : (
            <button className="deletar" onClick={deletePost}>
              Yes
            </button>
          )}
        </div>
      </Modal>
    </Conteudo>
  );
}

export default Delete;

const Conteudo = styled.div`
  svg {
    cursor: pointer;
  }
  width: 14px;
  height: 14px;

`;

const ModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  .opcao {
    width: 250px;
    display: flex;
    justify-content: space-between;
    background-color:#FFFFFF;
    margin-left: 40px;
  }
  .pergunta {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color:#000000;
    background-color:  #FFFFFF;
  }
  button {
    border: none;
    cursor: pointer;
    width: 134px;
    height: 37px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
  }
  .voltar {
    color:#ffffff;
    background-color: #FB9B9B;
  }
  .deletar {
    color: #ffffff;
    background-color:#9BFBB0;
  }
  @media (max-width: 700px) {
    width: 400px;
    height: 200px;
    padding: 18px 50px 18px 50px;
    .pergunta {
      font-size: 24px;
      width: 280px;
    }
    .opcao {
      width: 250px;
      justify-content: space-evenly;
      margin: auto;
    }
    button {
      width: 100px;
      height: 37px;
      font-size: 14px;
    }
  }
  @media (max-width: 500px) {
    width: 320px;
    height: 140px;
    padding: 20px 50px 50px 50px;
    .pergunta {
      font-size: 14px;
      width: 280px;
      margin-bottom: 20px;
    }
    .opcao {
      width: 180px;
      margin: auto;
      justify-content: space-between;
    }
    button {
      width: 85px;
      height: 30px;
      font-size: 12px;
    }
  }
`;

const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);


`;

const Carregando = styled.div`
  border: none;
  border-radius: 5px;
  width: 134px;
  height: 37px;
  background-color: #005985;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  @media (max-width: 700px) {
    width: 100px;
    height: 37px;
  }
  @media (max-width: 500px) {
    width: 85px;
    height: 30px;
  }
`;

const Plus = styled.div`
height: 60px;
width: 60px;
position: absolute;
bottom:0px;
margin-left: 76%;
background-color:  #F52424;
border-radius: 50%;
justify-content:center;
margin-top:30%;
h2{
margin-left: 24%;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 48px;
line-height: 58px;
/* identical to box height */
color: #FFFFFF
}
`
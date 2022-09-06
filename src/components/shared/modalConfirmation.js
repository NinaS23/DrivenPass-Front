import axios from "axios";
import Modal from "react-modal";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import correct from "../../assets/images/correct.svg";
import {useState} from "react";

Modal.setAppElement(".root");

function Confirmation({ postId, token, renderizarPosts, render }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

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

      await axios.delete(`https://linkr-driven-16.herokuapp.com/post/${postId}`, config);
      setLoading(false);
      modalDinamico();
      renderizarPosts();
    } catch (e) {
      console.log(e);
      modalDinamico();
      alert("Não foi possível excluir o post");
      setLoading(false);
    }
  }

  return (
    <Conteudo>
         <img src={correct} alt="done"  onClick={() => modalDinamico()}/>
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
          everything is ready for creation?
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

export default Confirmation;

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
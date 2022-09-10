import { MainContent, Title, Inputs } from "./style";
import lock from "../../../assets/images/lock.svg";
import FormsLoginSingin from "../../shared/FormsLoginSigin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
console.log(email,password)
    async function sendFormes(e) {
        try {
          e.preventDefault();
          setDisabled(true);
          setLoading(true)
        
    
          const body = { email, password };
    
          await axios.post(`http://localhost:6003/sign-up`, body);
    
          navigate("/");
        } catch (error) {
          setDisabled(false);
          setLoading(false);
          swal(error.response.data , error.response.data , "error")
        }
      }

    return(
        <MainContent>
        <div>
            <img src={lock} alt="cadeado" />
        </div>
            <Title>DrivenPass</Title>
            <Inputs>
                <FormsLoginSingin
                    type={true}
                    email={email}
                    loading={loading}
                    disabled={disabled}
                    sendFormes={sendFormes}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    typeRegister={"register"}
                    LinkTo={"/"}
                    TextButton="criar"
                    TextRedirect="First time? Create an account!"
                />
            </Inputs>

        </MainContent>
    )
}


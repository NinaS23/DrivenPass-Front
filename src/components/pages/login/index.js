import { MainContent, Title, Inputs, Bar } from "./style";
import lock from "../../../assets/images/lock.svg";
import FormsLoginSingin from "../../shared/FormsLoginSigin";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState(false);


    let navigate = useNavigate();

    async function sendFormes(e) {
        try {
            e.preventDefault();
            setDisabled(true);
            setLoading(true)
            setEmail("")
            setPassword("")
            

            const body = { email, password };
          const dataUser =  await axios.post(
                `http://localhost:6003/sign-in`,
                body
            );
            const token = dataUser.data.token;
            const userId = dataUser.data.userId;

            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);

            setEmail("")
            setPassword("")
            setDisabled(false);
            setLoading(false)
            navigate("/menu");
        } catch (error) {
            console.log(error)
            setLoading(false)
            setDisabled(false);
            setEmail("")
            setPassword("")
            swal(error.response.data , error.response.data , "error")
        }
    }

      
    return (
        <MainContent>
            <div>
                <img src={lock} alt="cadeado" />
            </div>
            <Title>DrivenPass</Title>
            <Inputs>

                <FormsLoginSingin
                    email={email}
                    sendFormes={sendFormes}
                    setEmail={setEmail}
                    disabled={disabled}
                    password={password}
                    setPassword={setPassword}
                    loading={loading}
                    LinkTo={"/menu"}
                    typeRegister={"login"}
                    TextButton="acessar"
                    TextRedirect="First time? Create an account!"
                />

            </Inputs>
          <Bar></Bar>
          <Link to={"/sign-up"}>
          <p>Primeiro acesso? Crie sua conta!</p>
          </Link>
        </MainContent>
    )
}
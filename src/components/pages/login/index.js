import { MainContent, Title, Inputs, Bar } from "./style";
import lock from "../../../assets/images/lock.svg";
import FormsLoginSingin from "../../shared/FormsLoginSigin";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <MainContent>
            <div>
                <img src={lock} alt="cadeado" />
            </div>
            <Title>DrivenPass</Title>
            <Inputs>

                <FormsLoginSingin
                    type={false}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    LinkTo={"/menu"}
                    TextButton="acessar"
                    TextRedirect="First time? Create an account!"
                />

            </Inputs>
          <Bar></Bar>
          <p>Primeiro acesso? Crie sua conta!</p>
        </MainContent>
    )
}
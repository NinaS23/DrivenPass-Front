import { MainContent, Button, Title, Inputs } from "./style";
import lock from "../../../assets/images/lock.svg";
import FormsLoginSingin from "../../shared/FormsLoginSigin";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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


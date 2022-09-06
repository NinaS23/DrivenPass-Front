import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./pages/login/index.js";
import Credentials from "./pages/credentials/index.js";
import Cards from "./pages/cards/index.js";
import RegisterCredentials from "./pages/registerCredentials/index.js";
import Signup from "./pages/signup/index.js";
import Menu from "./pages/menu/index.js";
import CredentialById from "./pages/credentialsById/index.js";
import RegisterSafeNotes from "./pages/safeNotes/index.js";
import SafeNotes from "./pages/safeNotes/safeNotes.js";

import Header from "./shared/header/header.js";
import { useState } from "react";



export default function App() {
  const [type , setType] = useState("")

  return (
    <>
        <BrowserRouter>
          <Header type={type}/>
          <Routes>
            <Route path="/" element={<Login/>} />  
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/menu" element={<Menu setType={setType}/>} />
            <Route path="/credentials" element={<Credentials  setType={setType}/>} />
            <Route path="/cadastro-credentials" element={<RegisterCredentials  setType={setType}/>} />
            <Route path="/credentials/:id" element={<CredentialById  setType={setType}/>} />
            <Route path="/cadastro-safeNotes" element={<RegisterSafeNotes  setType={setType}/>} />
            <Route path="/safeNotes" element={<SafeNotes  setType={setType}/>} />
            <Route path="/card" element={<Cards />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./pages/login/index.js";
import Credentials from "./pages/credentials/index.js";
import Cards from "./pages/cards/index.js";
import RegisterCredentials from "./pages/registerCredentials/index.js";
import Signup from "./pages/signup/index.js";
import Menu from "./pages/menu/index.js";
import Wifi from "./pages/wifi/index.js";

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
            <Route path="/card" element={<Cards />} />
            <Route path="safe-notes" element={<registSafeNoteserCredentials />} />
            <Route path="wifi" element={<Wifi />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

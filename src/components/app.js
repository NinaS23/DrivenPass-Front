import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./pages/login/index.js";
import Credentials from "./pages/credentials/index.js";
import Cards from "./pages/cards/index.js";
import SafeNotes from "./pages/safeNotes/index.js";
import Signup from "./pages/signup/index.js";
import Menu from "./pages/menu/index.js";
import Wifi from "./pages/wifi/index.js";

import Header from "./shared/header/header.js";



export default function App() {
  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/login" element={<Login/>} />  
            <Route path="/" element={<Signup />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/card" element={<Cards />} />
            <Route path="safe-notes" element={<SafeNotes />} />
            <Route path="wifi" element={<Wifi />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

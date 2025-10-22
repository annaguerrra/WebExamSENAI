import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";

export default function App() {
    return(
        <>
            <BrowserRouter >
              <Routes>
                <Route  path="/" element={<Home/>}></Route>
              </Routes>
            </BrowserRouter>
        </>
    )
}
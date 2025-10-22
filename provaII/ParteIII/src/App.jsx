import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import User from "./Components/User";

// o axios deu pau
export default function App() {
    return(
        <>
            <BrowserRouter >
              <Routes>
                <Route  path="/" element={<User/>}></Route>
              </Routes>
            </BrowserRouter>
        </>
    )
}
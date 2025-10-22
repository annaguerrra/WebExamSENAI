import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


export default function User (){
    const [data, setData] = useState([]);

    useEffect(() => {
        getUserData();
    })

    const getUserData = async () => {
        const response = await axios.get("https://avaliacao-bosch.onrender.com/usuario.");
        setData(response.data);
        console.log(response.data)
    }

    return(
        <div>
            <h1>{data.nome}</h1>
        </div>
    );
}
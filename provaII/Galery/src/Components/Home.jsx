import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        getInfo();
    }, []);

    // const Matricula = () => {

    //     if(info.status == "Matriculado"){
    //         setInfo(() => {info.status.replace("✅")}, []);
    //     }
    //     else{
    //         setInfo(() => {info.status.replace("❌")}, []);
    //     }
    // };

    const getInfo = async () => {
        const response = await axios.get("https://avaliacao-bosch.onrender.com/all");
        setInfo(response.data);
        console.log(response.data)
    }

    return(
        <>
            <div>
                <ul className="grid grid-rows-3 justify-center items-center gap-5 ">
                    {info.map(info => (
                        <li key={info.id
                        }>
                            <div className="w-350px h-200px bg-gray-100 shadow-2xl "> 
                                <p className="font-thin">DivaID {info.id}</p>
                                <img src={info.imagem} alt="" width="60px" height="60px"  />
                                <h3 className="text-2xl">{info.nome}</h3> <p> '{info.apelido}'</p>
                                {/* <p>{Matricula}</p> */}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

// useState is a hook which returns array

import { useState } from "react";


function ChangeName()
{
    let [name,setName]=useState("Guru")
    const change =()=>{

        setName("Gurjeet");
    }

    let [y,setYear]=useState("2024")
    const year =()=>{

        setYear(2025);
    }

    return(
        <div>
            <hr />
            <h1 onClick={change}>{name}</h1>

            <p>{name}</p>
            <li>{name}</li>

            <hr />

            <h1 onClick={year}>{y}</h1>
        </div>
    );

}

export default ChangeName;
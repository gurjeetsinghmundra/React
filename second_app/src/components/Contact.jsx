
import React from "react";
import { useParams } from "react-router-dom";
//useParams will return path variable in object form
//jab url se data fetch karna hai

function Contact()
{
    const {id}=useParams()
    return(
        <div>
            <h1>Contact</h1>
            <p>Id fetched from Route {id}</p>
        </div>
    );
}

export default Contact
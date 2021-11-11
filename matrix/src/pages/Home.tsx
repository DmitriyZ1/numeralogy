
import React from "react";

import { Form } from "../components/Form";

interface ig{
    fun(a:string, b:string, c:string ) :void;
}


export  const Home: React.FC<ig> = ({fun}) => {
    
    
    return(
        <>
            <div className="container">

                <Form fun={fun}/>

            </div>

        </>
    )
}  
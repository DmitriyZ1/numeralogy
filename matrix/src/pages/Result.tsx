
import React from "react";
import { Tabl } from "../components/Tabl";
import { Resulttext } from "../components/Resulttext";
import { useNavigate } from "react-router-dom"

interface igr{
    
    n1:string;
    n2:string;
    n3:string;
    n4:string;
    n5:string;
    n6:string;
    n7:string;
    n8:string;
    n9:string;
    restext:any;
}

export const Result:React.FC<igr> = ({n1,n2,n3,n4,n5,n6,n7,n8,n9, restext}) => {
    const nav = useNavigate();
    return(
        <>
            <div className="container">
                <button className="waves-effect waves-light btn " onClick={() => {nav('/')}}>назад</button>
                <Tabl n1={n1} n2={n2} n3={n3} n4={n4} n5={n5} n6={n6} n7={n7} n8={n8} n9={n9} />
                    
                <Resulttext objResult={restext}/>
            </div>
        </>
    )
}



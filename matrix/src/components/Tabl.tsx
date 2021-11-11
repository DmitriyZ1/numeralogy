import React from "react";

interface prTabl {
    n1:string;
    n2:string;
    n3:string;
    n4:string;
    n5:string;
    n6:string;
    n7:string;
    n8:string;
    n9:string;
}


export const Tabl:React.FC<prTabl> = ({n1,n2,n3,n4,n5,n6,n7,n8,n9}) => {
    return (
        <div className="tabl">
            <div className="kl">
                <div className="pod">характер, эго, амбиции</div>
                <div className="kl_cont">
                    <span className="num">{n1}</span>
                </div>
            </div>
            <div className="kl">
                <div className="pod">здоровье, педантичность, сексуальность </div>
                <div className="kl_cont">
                    <span className="num">{n4}</span>
                </div>
            </div>
            <div className="kl">
                <div className="pod">успех</div>
                <div className="kl_cont">
                    <span className="num">{n7}</span>
                </div>
            </div>
            <div className="kl">
                <div className="pod">энергия, лень</div>
                <div className="kl_cont">
                    <span className="num">{n2}</span>
                </div>
            </div>
            <div className="kl">
                <div className="pod">восприятие жизни, интуиция</div>
                <div className="kl_cont">
                    <span className="num">{n5}</span>
                </div>
            </div>
            <div className="kl">
                <div className="pod">надежность, отношение к семье, чувство долга, ответственность</div>
                <div className="kl_cont">
                    <span className="num">{n8}</span>
                </div>
            </div>
            <div className="kl">
                <div className="pod">креативность, способностьк изуению</div>
                <div className="kl_cont">
                    <span className="num">{n3}</span>
                </div>
            </div>
            <div className="kl">
                <div className="pod">умение зарабатывать, способность к манипулированию</div>
                <div className="kl_cont" >
                    <span className="num">{n6}</span>
                </div>
            </div>
            <div className="kl">
                <div className="pod">уровень умственных способностей</div>
                <div className="kl_cont">
                    <span className="num">{n9}</span>
                </div>
            </div>
        </div> 
    )
}
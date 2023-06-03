import React, {useState, useRef} from "react";
import { useNavigate } from 'react-router-dom'

interface prForm {
    fun(a:string, b:string, c:string ) :void;
}

export const Form:React.FC<prForm> = ({fun}) => {

    const rNum = useRef<HTMLInputElement>(null);
    const rMon = useRef<HTMLInputElement>(null);
    const rYear = useRef<HTMLInputElement>(null);

    const navi = useNavigate();

    const [errorWindow, setErrorWindow] = useState<boolean>(false);

    const clickB = ():void => {
        let vNum:boolean = /^[0-9]{1,2}$/.test(rNum.current!.value) && (Number(rNum.current!.value) <=31); 
        let vMon:boolean = /^[0-9]{1,2}$/.test(rMon.current!.value) && (Number(rMon.current!.value) <= 12); 
        let vYear:boolean = /^[0-9]{4}$/.test(rYear.current!.value) && (Number(rYear.current!.value) >= 1900 && Number(rYear.current!.value) <= 2020) ; 
        if(vNum && vMon && vYear){
            fun(rNum.current!.value,rMon.current!.value, rYear.current!.value);
            navi('/result')
        } else {
            console.log('не коректно')
            setErrorWindow(true)
            rNum.current!.value = '';
            rMon.current!.value = '';
            rYear.current!.value = '';
        }

        rNum.current!.value = '';
        rMon.current!.value = '';
        rYear.current!.value = '';
    }

    return(
        <>
 
            <div className="myform">
                <div className="row"> 
                    <div className="input-field col s6">
                        <input type="text" id="ch" ref={rNum} />
                        <label className="active">Число</label>
                    </div>
                    <div className="input-field col s6">
                        <input type="text" id="m" ref={rMon} />
                        <label className="active">Месяц</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" id="g" ref={rYear}/>
                        <label className="active">Год</label>
                    </div>
                </div>
                <button className="waves-effect waves-light btn " onClick={() => {clickB()}}>ok</button>
            </div>

            {errorWindow && <div className="error-input"> 
                <div className="error-input_content">
                    <div>
                        <p>Ошибка ввода</p>
                        <button className="waves-effect waves-light btn " onClick={() => {setErrorWindow(false)}}>ok</button>
                    </div>
                </div>
            </div>}
        </>
    )
}
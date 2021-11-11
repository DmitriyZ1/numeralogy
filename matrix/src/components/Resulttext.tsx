
import React, {useEffect, useState} from "react";


import data from '../text.json';

interface prres {
    objResult: any;
}

export const Resulttext:React.FC<prres> = ({objResult}) => {
    const [fileDownl, setFileDownl] = useState<boolean>(false);

    async function requestFile(arr:string[]) {
        let st = await fetch('/b',{
            method: 'POST',
            body: JSON.stringify(arr),
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        });
        let stparse = await st.json();
        setFileDownl(stparse);
    }
    

    

    useEffect(() => {
        let newArr:any[] = []; 
        for(let key in objResult){
            let txt:any;
            switch (key) {
                case "n1":
                    txt = data.filter(item => item.num === 1).find(el => el.count === objResult[key]);
                    if(txt) {newArr = [...newArr, txt.url]};
                    break;
                case "n2":
                    txt = data.filter(item => item.num === 2).find(el => el.count === objResult[key]);
                    if(txt) {newArr = [...newArr, txt.url]};
                    break;
                case "n3":
                    txt = data.filter(item => item.num === 3).find(el => el.count === objResult[key]);
                    if(txt) {newArr = [...newArr, txt.url]};
                    break;
                case "n4":
                    txt = data.filter(item => item.num === 4).find(el => el.count === objResult[key]);
                    if(txt) {newArr = [...newArr, txt.url]};
                    break;
                case "n5":
                    txt = data.filter(item => item.num === 5).find(el => el.count === objResult[key]);
                    if(txt) {newArr = [...newArr, txt.url]};
                    break;
                case "n6":
                    txt = data.filter(item => item.num === 6).find(el => el.count === objResult[key]);
                    if(txt) {newArr = [...newArr, txt.url]};
                    break;
                case "n7":
                    txt = data.filter(item => item.num === 7).find(el => el.count === objResult[key]);
                    if(txt) {newArr = [...newArr, txt.url]};
                    break;
                case "n8":
                    txt = data.filter(item => item.num === 8).find(el => el.count === objResult[key]);
                    if(txt) {newArr = [...newArr, txt.url]};
                    break;
                case "n9":
                    txt = data.filter(item => item.num === 6).find(el => el.count === objResult[key]);
                    if(txt) {newArr = [...newArr, txt.url]};
                    break;
                default:
                    break;
            }
        }

        if(newArr.length > 0) {
            requestFile(newArr)
        } else {
            setFileDownl(false);
        };
       
    
    }, [objResult]);

    
    return(
        <div className="result"> 
            
           {fileDownl && <a href="./files/result.docx"> Скачать файл docx </a> } 
            
            
        </div>
    )
        
}
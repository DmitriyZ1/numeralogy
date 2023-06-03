import React, {useState} from 'react';

import { Home } from './pages/Home';
import { Result } from './pages/Result';
import { Error } from './pages/Error';

import {Routes, Route} from 'react-router-dom';
import 'materialize-css';
import './app.css'


const App :React.FC = () => {  
    
    const [restext, setRestext] = useState<object>({})
    
    const [n1, setN1] = useState<string>('');
    const [n2, setN2] = useState<string>('');
    const [n3, setN3] = useState<string>('');
    const [n4, setN4] = useState<string>('');
    const [n5, setN5] = useState<string>('');
    const [n6, setN6] = useState<string>('');
    const [n7, setN7] = useState<string>('');
    const [n8, setN8] = useState<string>('');
    const [n9, setN9] = useState<string>('');
   
    const clickBut = (a:string,b:string,c:string):void => {
        let ch:string = a;
        let m:string = b;
        let g:string = c;

        let arrNumberDate:string[] = (ch + m + g).split('');
        let oneCount:number = arrNumberDate.reduce((acum, item) => acum + Number(item), 0);

        let arrOneCount:string[] = String(oneCount).split('');
        let twoCount:number = arrOneCount.reduce((acum, item) => acum + Number(item), 0)

        let n:number = 0;
        
        if (ch.length > 1 && Number(ch[0]) !== 0){
            n = Number(ch[0])
        } else if (ch.length > 1 && Number(ch[0]) === 0){ 
            n = Number(ch[1])
        } else {
            n = Number(ch)
        }

        let threeCount:number = oneCount - (n * 2);
    
        let nn = String(threeCount)
        let fourCount = Number(nn[0]) +  Number(nn[1]);
       
        const matrixTable:any = {
            n1: 0,
            n2: 0,
            n3: 0,
            n4: 0,
            n5: 0,
            n6: 0,
            n7: 0,
            n8: 0,
            n9: 0,
        } 

        let strResult:string = String(ch) + String(m) + String(g) + String(oneCount) + String(twoCount) + String(threeCount) + String(fourCount);
        let arrResult:string[] = strResult.split('');
        for(let i = 0; i < arrResult.length; i++) {
            switch(arrResult[i]){
                case "1" :
                    matrixTable.n1++;
                    break
                case "2" :
                    matrixTable.n2++;
                    break
                case "3" :
                    matrixTable.n3++;
                    break
                case "4" :
                    matrixTable.n4++;
                    break
                case "5" :
                    matrixTable.n5++;
                    break  
                case "6" :
                    matrixTable.n6++;
                    break 
                case "7" :
                    matrixTable.n7++;
                    break  
                case "8" :
                    matrixTable.n8++;
                    break  
                case "9" :
                    matrixTable.n9++;
                    break  
            }
        }

        setRestext(matrixTable);
         
        for(let key in matrixTable){
            if(key === 'n1'){
                let str:string = '';
                for(let i = 0; i < matrixTable.n1; i++){
                    str += '1';
                }
                setN1(str ? str : '-');
            }
            if(key === 'n2'){
                let str:string = '';
                for(let i = 0; i < matrixTable.n2; i++){
                    str += '2';
                }
                setN2(str ? str : '-');
            }
            if(key === 'n3'){
                let str:string = '';
                for(let i = 0; i < matrixTable.n3; i++){
                    str += '3';
                }
                setN3(str ? str : '-');
            }
            if(key === 'n4'){
                let str:string = '';
                for(let i = 0; i < matrixTable.n4; i++){
                    str += '4';
                }
                setN4(str ? str : '-');
            }
            if(key === 'n5'){
                let str:string = '';
                for(let i = 0; i < matrixTable.n5; i++){
                    str += '5';
                }
                setN5(str ? str : '-');
            }
            if(key === 'n6'){
                let str:string = '';
                for(let i = 0; i < matrixTable.n6; i++){
                    str += '6';
                }
                setN6(str ? str : '-');
            }
            if(key === 'n7'){
                let str:string = '';
                for(let i = 0; i < matrixTable.n7; i++){
                    str += '7';
                }
                setN7(str ? str : '-');
            }
            if(key === 'n8'){
                let str:string = '';
                for(let i = 0; i < matrixTable.n8; i++){
                    str += '8';
                }
                setN8(str ? str : '-');
            }
            if(key === 'n9'){
                let str:string = '';
                for(let i = 0; i < matrixTable.n9; i++){
                    str += '9';
                }
                setN9(str ? str : '-');
            }
        }
    }


  return (
    <div className="ap">
      <Routes>
        <Route  path="/" element={<Home fun={clickBut} />} /> 
        <Route  path="/result" element={<Result n1={n1} n2={n2} n3={n3} n4={n4} n5={n5} n6={n6} n7={n7} n8={n8} n9={n9} restext={restext} />} /> 
        <Route  path="*" element={<Error />} /> 
      </Routes>
    </div>
  ); 
}

export default App;

const express = require('express'); 
const app = express();   

const DocxMerger = require('docx-merger');
const fs = require('fs');
const path = require('path');

app.use(express.json());  

app.listen(3500, function() {      
    console.log('3500')
});


app.get('/a', function(req,res) {
 console.log('ok')
});

app.post('/b', function (req, res) {
    console.log('zpros')
    let arr = req.body;
    let newArr = [];
        
    fs.unlink(path.resolve('../matrix/public/files',"result.docx"), err => {
        if(err) throw err; 
        console.log('Очишен');
        for(let i of arr){
            newArr.push(fs.readFileSync(path.resolve('./filestext',i), 'binary'))
        }
    
        let docx = new DocxMerger({},newArr);
    
        docx.save('nodebuffer',function (data) {
            fs.writeFile(path.resolve('../matrix/public/files',"result.docx"), data, function(err){if(err) console.log(err)});
            console.log('файл создан')
        });
    
    
    });
    
    
    
    
    res.json(true);
      
});



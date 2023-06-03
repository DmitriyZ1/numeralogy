const express = require('express'); 
const app = express();   

const PORT = 3500;

const DocxMerger = require('docx-merger');
const fs = require('fs');
const path = require('path');

app.use(express.json());  

//app.use(express.static(path.join(__dirname, '../', 'matrix/', 'build')));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../', 'matrix/', 'build', 'index.html'));
// });

app.listen(PORT, function() {      
    console.log(PORT)
});

app.post('/b', function (req, res) {
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



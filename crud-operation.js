const { isUtf8 } = require('buffer');
const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud');
console.log("dirPath", dirPath)
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}
const filePath = `${dirPath}/fruit.txt`;
console.log("filePath", filePath)
//create file

// fs.writeFileSync(filePath,'This is a simple text file');

//read file

fs.readFile(filePath,'utf8', (err, item) => {
    console.log('readFileSync', item);
});

//update file

// fs.appendFile(filePath,' and file name is fruit.js file',(err)=>{
//     if(!err) console.log('File updated successfully');    
// });

//file rename

// fs.rename(filePath,`${dirPath}/apple.txt`,(err)=>{
//     if(!err)console.log('File rename is successfully',)
// })

// fs.unlinkSync(`${dirPath}/apple.txt`)
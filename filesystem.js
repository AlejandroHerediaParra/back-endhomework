/*const fs = require('fs')

fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err;
  console.log(data);
});


console.log('line2');
console.log('line3');
*/

//callback hell

const fs = require('fs')

console.log('first example');

class FileUtility{
    constructor(){
        this.paths=[];
        this.typeFiles=[];
        this.printContent=false;
        this.exportTo = "";
    }

    list (path,parameters){
    	
    	let paths;
    	fs.readdir(path,function (err,files){
                if (err){
                    console.err (`Not exist ${path}`);
                };
                path = files;
                });
            })
        if (parameters==undefined){
            
        }
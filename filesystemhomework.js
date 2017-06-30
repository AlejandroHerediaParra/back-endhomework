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
        if (parameters==undefined){
            fs.readdir(path,function (err,files){
                if (err){
                    console.err (`Not exist ${path}`);
                };
                files.forEach(function(filepath){
                        console.log(`${filepath}`);
                });
            })
        }
        else {
            var paths = parameters.extension.split(',');
            var print = parameters.printContent;
            var exportTo = parameters.exportTo;
            fs.readdir(path,function (err,files){
                if (err){
                    console.err (`Not exist ${path}`);
                };
                files.forEach(function(filepath){
                    paths.forEach(function(extention){
                        if (filepath.endsWith(extention)){
                            if (print){
                                fs.readFile(filepath, function (err,file){
                                    if (err){
                                        console.error('File notfound');
                                    }
                                    if (exportTo!=""){
                                    fs.open(exportTo,'a+',function(err,fd){
                                        if (err){
                                            console.err("error")
                                        }
                                        {
                                            fs.appendFile(exportTo,`\n######\n######\n######\n######\n######\n######\n######\n######\n######Archivo: ${filepath}#######\n######\n######\n######\n######\n######\n######\n######\n######\n######\n${file}`,function(err){
                                                if (err){
                                                    console.errorreturn(err);
                                                }
                                               
                                                    
                                            })
                                        }
                                    })
                                }
                                else{
                                     fs.readFile(filepath,function (err,newfile){
                                                    if (err){
                                                        console.error('File notfound');
                                                    }
                                                    console.log(`###########\nArchivo: ${exportTo}\n############\n ${newfile.toString()}`);
                                                })
                                }

                                    
                                });
                            }
                            else{
                                console.log(`${filepath}`);
                            }
                            
                        }
                    })
                    
                });
            })

        }
        console.log('###################################');
    }

}


var newFileUtility = new FileUtility();
//newFileUtility.list('./')
/*newFileUtility.list('./',{
    extension: 'js,html,css',
    printContent: true,
    exportTo: './new.txt'
});*/

newFileUtility.list('./',{
    extension: '.doc',
    printContent: false,
    exportTo: ''
});



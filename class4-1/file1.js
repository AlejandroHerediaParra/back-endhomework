var thing = require('./file2.js')

console.log(thing.person);
console.log(thing.car);

engine que permite ejecutar aplicaciones en el servidor


revisar filesystem de nodejs


aplicacion donde le das un path del sistema y que busque todos los archivos de una determinada extencion

exaple

fileUtility.list('/home')
fileUtility
    .list('/home',{
        extension: 'js,html,css',
        printContent: true,
        exporTO:'/home/results.txt'
    })

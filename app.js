


let express = require('express');
let app = express();



//vistas
let components = require('./component/index.js');

//console.log(components.default);

let caja_01 = components.default.caja_01;  
let caja_02 = components.default.caja_02;  
let caja_03 = components.default.caja_03;
let caja_04 = components.default.caja_04;  
let caja_05 = components.default.caja_05;  





app.get('/', function(req, res){
    res.send(caja_01);
   
});

app.get('/sistemas', function( req, res ){
    res.send(caja_02)
});

app.get('/nosotros', function( re, res ){
    res.send(caja_03)
});

app.get('/contacto', function(req, res){
    res.send(caja_04);
});
app.get('/otro_contacto', function(req, res){
    res.send(caja_05);
});





//escuchador de peticiones
app.listen('3000', function (){
console.log('-------------------------------------------------------------------------------------------- ---');
console.log('Servidor corriendo el puerto :3000');
console.log('-------------------------------------------------------------------');  
    
});
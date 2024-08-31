var http=require('http');
var fs=require('fs')
var path=require('path')

// crear carpeta

if (fs.existsSync('./KOK')){
    
    console.log("el directorio ya ha sido creado");
}
else
{
    fs.mkdirSync('KOK')
}

// crear archivo

var archivo='texto.txt'

var uno='Hola\n';
var dos='holaa';

if (fs.existsSync('./KOK')){
    console.log('archivo existente');
}

// escribir en el archivo

if(fs.existsSync('./KOK')){
    
    fs.writeFileSync(archivo,uno)
    fs.appendFileSync(archivo,dos)
    console.log('archivo creado')   
}
 else{
    fs.writeFileSync(archivo,uno)
    fs.appendFileSync(archivo,dos) 
} 

//mover archivo a capeta

if (fs.existsSync('./KOK')){
    console.log('archivo existente');
    fs.renameSync('./texto.txt','./KOK/texto.txt')
}

//leer texto que hay en el archivo

var file=fs.readdirSync('./')
var archivo=fs.readFileSync('./KOK/texto.txt','utf-8')
console.log(archivo)

//borrar carpeta y archivo

if(fs.existsSync('./KOK')){
    fs.unlinkSync('./KOK/texto.txt')
    console.log('Archivo borrado')
}
else{
console.log()
}
fs.rmdirSync('./KOK', { recursive: true });
console.log('Carpeta removida');


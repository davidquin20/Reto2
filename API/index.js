
//llamamos el modulo Express para la creacion de la API y se le asigna la constante app
const express =require('express');
const app = express();
const morgan=require('morgan');
const fs = require('fs');
const bodyParser= require('body-parser');
const { send } = require('process');

//Configuracion de puerto 
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

//Endpoint Post insertar productos en la pagina web
app.post('/admin/producto', (req, res) => { 
    consolo.log(req.body)
    res.status(200).send({message:'Se a ingresado el producto a la base de datos'});
    
})

//Endpoint Get lista de productos en la pagina web
app.get('/admin/producto', (req, res) => { 
    res.send(200,{productos:[]});
})

//Endpoint Get consulta de productos sku en la pagina web
app.get('/admin/producto/:sku', (req, res) => { 
    res.status(404).send({message:'El producto no se encuentra'})
    res.status(200).send({message:'El producto se encuentra'})
})

//Listening del puerto
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});

//llamamos el modulo Express para la creacion de la API y se le asigna la constante app
const express =require('express');
const app = express();
const morgan=require('morgan');

//Configuracion de puerto 
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Endpoint Get lista de productos en la pagina web
app.get('/admin/producto/:sku', (req, res) => { 
    res.status(404).send({message:'El producto no se encuentra'})
    res.status(200).send({message:'El producto se encuentra'})
})

//Listening del puerto
app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});
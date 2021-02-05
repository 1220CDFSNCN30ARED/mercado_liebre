const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.post('/',(req,res)=>{

    // validar usuario y contraseña
    
    // si esta mal, volver a login y mostrar errores

    // si esta bien , loguear y redireccionar al home

    res.send(req.body);
});


app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/rama-dani', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/register',(req,res)=>{
    res.send(req.body);
});
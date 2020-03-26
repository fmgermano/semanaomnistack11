const express = require('express');
// chama a dependencia express
const cors = require('cors');
const routes = require('./routes');


const app = express();
// instancia a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);
//aplicação ouve a porta 3333(acessando localhost:3333) 
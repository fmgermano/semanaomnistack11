const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');




const routes = express.Router(); 

routes.post('/sessions', SessionController.create); 

//listagem de ongs
routes.get('/ongs' ,OngController.index);
//cadastro de ongs
routes.post('/ongs' , OngController.create);


routes.get('/profile', ProfileController.index); 


//lista incidents
routes.get('/incidents', IncidentController.index);

routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//exporta a variavel dentro do arquivo
module.exports = routes;

const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request,response)  {
        const ongs = await connection ('ongs').select('*');
        return response.json(ongs);
       
       },

    async create(request, response) {
        const { name, email, whatsapp, city, uf} = request.body;

        //gera 4 bytes hexadecimais e gera um id 
       const id = crypto.randomBytes(4).toString('HEX');
      
         //conexao com Bd
       await connection('ongs').insert({
           id,
           name,
           email,
           whatsapp,
           city,
           uf,
       })
     
       //cria a rota get / faz uma função pra retornar uma resposta no cliente
       return response.json({ id });
    }

};
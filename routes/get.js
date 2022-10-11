const express = require('express');
const Router = express.Router();
const queries = require('../controllers/get')


Router.get('/', async (req, response) => {
    queries.getpokemon().then((pokemon)=>{
        return response.status(200).json(pokemon)
    }).catch((error)=>{
        return response.status(400).json(error)
    });
})

module.exports = Router;
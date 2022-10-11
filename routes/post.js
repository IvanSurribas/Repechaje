const express = require('express');
const Router = express.Router();
const queries = require('../controllers/post')


Router.post('/', async (req, response) => {
    const body = req.body;
    await queries.createpokemon(body).then((newpokemon)=>{
        return response.status(200).json(newpokemon)
    }).catch((error)=>{
        return response.status(400).json(error)
    });
})

module.exports = Router;
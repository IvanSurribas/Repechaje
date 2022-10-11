const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const createpokemon = (body) => {
    return knex ('pokemon')
    .insert(body)
}

module.exports = {
    createpokemon
}
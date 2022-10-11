const configDB = require('../knexfile');
const knex = require('knex')(configDB.development);

const getpokemon = () => {
    return knex
    .column('id', 'name', 'description', 'image')
    .select()
    .from('pokemon')
}

module.exports = {
    getpokemon
}
require('dotenv').config();
const knex = require('knex');

const knexFile = require('./db/knexfile');

const db = knex(knexFile.development);

const start = async () => {

    // console.log(await db('person').where({id:1}).first());
    console.log(
        await db('person')
            .select('email', 'last_name')
            // .from('person')
            .first()
    );
}

start()
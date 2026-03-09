const { get } = require('../routes/movieRoute')
const { pool } = require('./pool')

async function getMovies() {
    const { rows } = await pool.query('SELECT * FROM movies')
    return rows
}

async function getCategories() {
    const { rows } = await pool.query('SELECT * FROM categories')
    return rows
}

async function getDirectors() {
    const { rows } = await pool.query('SELECT * FROM directors')
    return rows
}



module.exports = [
    getMovies,
    getCategories,
    getDirectors
]
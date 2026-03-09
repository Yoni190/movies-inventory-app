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

async function createCategory (name) {
    await pool.query('INSERT INTO categories (name) VALUES ($1)', [name])
}



module.exports = [
    getMovies,
    getCategories,
    getDirectors,
    createCategory
]
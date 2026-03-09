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

async function createDirector (f_name, l_name) {
    await pool.query('INSERT INTO directors (f_name, l_name) VALUES ($1, $2)', [f_name, l_name])
}



module.exports = [
    getMovies,
    getCategories,
    getDirectors,
    createCategory,
    createDirector
]
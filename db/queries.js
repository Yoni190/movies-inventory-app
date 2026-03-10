const pool = require('./pool')

async function getMovies() {
    const { rows } = await pool.query('SELECT * FROM movies')
    return rows
}

async function getMovieDirectors(id) {
    const { rows } = await pool.query('SELECT * FROM directors JOIN movie_director ON directors.id = movie_director.director_id WHERE movie_director.movie_id=$1', [id])
    return rows
}

async function getDirector(id) {
    const { rows } = await pool.query('SELECT * FROM directors WHERE id=$1', [id])
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

async function createMovie (title, description, rating, category_id, directors_id) {
    const { rows } = await pool.query('INSERT INTO movies (title, description, rating) VALUES ($1, $2, $3) RETURNING id', [title, description, rating])
    const movie_id = rows[0].id

    createMovieCategory(movie_id, category_id)

    directors_id.map((director_id) => {
        createMovieDirector(movie_id, director_id)
    })
}

async function createMovieCategory (movie_id, category_id) {
    await pool.query('INSERT INTO movie_category (movie_id, category_id) VALUES ($1, $2)', [movie_id, category_id])
}

async function createMovieDirector (movie_id, director_id) {
    await pool.query('INSERT INTO movie_director (movie_id, director_id) VALUES($1, $2)', [movie_id, director_id])
}




module.exports = {
    getMovies,
    getCategories,
    getDirectors,
    createCategory,
    createDirector,
    createMovie,
    getMovieDirectors,
    getDirector
}
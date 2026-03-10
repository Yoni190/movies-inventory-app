const pool = require('./pool')

async function getMovies() {
    const { rows } = await pool.query('SELECT * FROM movies')
    return rows
}

async function getMovieDirectors(id) {
    const { rows } = await pool.query('SELECT * FROM directors JOIN movie_director ON directors.id = movie_director.director_id WHERE movie_director.movie_id=$1', [id])
    return rows
}

async function getMovieCategories(id) {
    const { rows } = await pool.query('SELECT * FROM categories JOIN movie_category ON categories.id = movie_category.category_id WHERE movie_category.movie_id=$1', [id])
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

async function createMovie (title, description, rating, categories_id, directors_id) {
    const { rows } = await pool.query('INSERT INTO movies (title, description, rating) VALUES ($1, $2, $3) RETURNING id', [title, description, rating])
    const movie_id = rows[0].id

    categories_id.map((category_id) => {
        createMovieCategory(movie_id, category_id)
    })

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

async function getDirector(id) {
    const { rows } = await pool.query('SELECT * FROM directors WHERE id=$1', [id])
    return rows
}

async function getCategory(id) {
    const { rows } = await pool.query('SELECT * FROM categories WHERE id=$1', [id])
    return rows
}

async function editDirector(f_name, l_name, id) {
    await pool.query('UPDATE directors SET f_name=$1, l_name=$2 WHERE id=$3', [f_name, l_name, id])
}

async function editCategory(name, id) {
    await pool.query('UPDATE categories SET name=$1 WHERE id=$2', [name, id])
}

async function getMovie(id) {
    const { rows } = await pool.query('SELECT * FROM movies WHERE id=$1', [id])
    return rows
}

async function editMovie(id, title, description, rating, categories_id, directors_id) {
    await pool.query('UPDATE movies SET title=$1, description=$2, rating=$3 WHERE id=$4', [title, description, rating])
}

module.exports = {
    getMovies,
    getCategories,
    getDirectors,
    createCategory,
    createDirector,
    createMovie,
    getMovieDirectors,
    getMovieCategories,
    getDirector,
    editDirector,
    getCategory,
    editCategory,
    getMovie,
    editMovie
}
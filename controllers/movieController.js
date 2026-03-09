const db = require('../db/queries')

async function getMovies (req, res) {
    const movies = await db.getMovies()
    res.render('movies', {
        title: 'Movies',
        movies: movies
    })
}

async function create (req, res) {
    const { title, desc, rating, category, director } = req.body

    await db.createMovie(title, desc, rating)

    res.redirect('/')
}

module.exports = {
    create,
    getMovies
}
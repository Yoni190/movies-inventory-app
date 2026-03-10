const db = require('../db/queries')

async function getMovies (req, res) {
    const movies = await db.getMovies()
    

    const directors = await Promise.all(
        movies.map((movie) => db.getMovieDirectors(movie.id))
    )

    console.log(directors)

    res.render('movies', {
        title: 'Movies',
        movies: movies,
        directors: directors
    })
}

async function create (req, res) {
    const { title, desc, rating, category, directors } = req.body

    await db.createMovie(title, desc, rating, category, directors)

    res.redirect('/')
}

async function getCreateForm(req, res) {
    const categories = await db.getCategories()
    const directors = await db.getDirectors()

    res.render('createMovie', {
        title: 'Movies',
        categories,
        directors
    })
}

module.exports = {
    create,
    getMovies,
    getCreateForm
}
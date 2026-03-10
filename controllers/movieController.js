const db = require('../db/queries')

async function getMovies (req, res) {
    const movies = await db.getMovies()
    

    const directors = await Promise.all(
        movies.map((movie) => db.getMovieDirectors(movie.id))
    )

    const categories = await Promise.all(
        movies.map((movie) => db.getMovieCategories(movie.id))
    )


    movies.map((movie) => {
        movie.directors = directors.flat().filter(director => director.movie_id === movie.id)
    })

    movies.map((movie) => {
        movie.categories = categories.flat().filter(category => category.movie_id === movie.id)
    })


    res.render('movies', {
        title: 'Movies',
        movies: movies,
    })
}

async function create (req, res) {
    const { title, desc, rating, categories, directors } = req.body

    await db.createMovie(title, desc, rating, categories, directors)

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

async function getEditForm(req, res) {
    const { movie_id } = req.params

    const movie = await db.getMovie(movie_id)

    const categories = await db.getCategories()
    const directors = await db.getDirectors()

    const selectedDirectors = await db.getMovieDirectors(movie_id)
    console.log(selectedDirectors)

    res.render('editMovie', {
        title: 'Movie',
        movie: movie[0],
        categories,
        directors,
        selectedDirectors
    })
}

module.exports = {
    create,
    getMovies,
    getCreateForm,
    getEditForm
}
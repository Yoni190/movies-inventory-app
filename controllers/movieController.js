const db = require('../db/queries')

async function create (req, res) {
    const { title, desc, rating, category, director } = req.body

    await db.createMovie(title, desc, rating)

    res.redirect('/')
}

module.exports = [
    create
]
const db = require('../db/queries')

async function getDirectors (req, res) {
    const directors = await db.getDirectors()
    res.render('directors', {
        title: 'Directors',
        directors: directors
    })
}

async function create (req, res) {
    const { f_name, l_name } = req.body

    await db.createDirector(f_name, l_name)
    res.redirect('/directors')
}

module.exports = [
    create,
    getDirectors
]
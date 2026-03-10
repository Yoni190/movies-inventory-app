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

function getCreateForm(req, res) {
    res.render('createDirector', {
        title: 'Director'
    })
}

async function getEditForm(req, res) {
    const { director_id } = req.params

    const director = await db.getDirector(director_id)
    
    res.render('editDirector', {
        title: 'Director',
        director: director[0]
    })

}

async function edit(req, res) {
    const { director_id } = req.params
    const { f_name, l_name } = req.body

    await db.editDirector(f_name, l_name, director_id)
    res.redirect('/directors')
}

module.exports = {
    create,
    getDirectors,
    getCreateForm,
    getEditForm,
    edit
}
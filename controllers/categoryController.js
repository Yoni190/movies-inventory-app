const db = require('../db/queries')

async function create (req, res) {
    const { category_name } = req.body

    await db.createCategory(category_name)
    res.redirect('/categories')
}

module.exports = [
    create
]
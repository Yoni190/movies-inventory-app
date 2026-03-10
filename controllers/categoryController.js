const db = require('../db/queries')

async function getCategories (req, res) {
    const categories = await db.getCategories()
    res.render('categories', {
        title: 'Categories',
        categories: categories
    })
}

async function create (req, res) {
    const { category_name } = req.body

    await db.createCategory(category_name)
    res.redirect('/categories')
}

function getCreateForm(req, res) {
    res.render('createCategory', {
        title: 'Category'
    })
}

async function getEditForm(req, res) {
    const { category_id } = req.params

    const category = await db.getCategory(category_id)

    res.render('editCategory', {
        title: 'Category',
        category: category[0]
    })
    
}

module.exports = {
    create,
    getCategories,
    getCreateForm,
    getEditForm
}
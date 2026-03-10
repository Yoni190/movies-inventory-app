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

async function edit(req, res) {
    const { category_id } = req.params
    const { name } = req.body

    await db.editCategory(name, category_id)

    res.redirect('/categories')
}

async function deleteCategory (req, res) {
    const { category_id } = req.params

    await db.deleteCategory(category_id)

    res.redirect('/categories')
}

module.exports = {
    create,
    getCategories,
    getCreateForm,
    getEditForm,
    edit,
    deleteCategory
}
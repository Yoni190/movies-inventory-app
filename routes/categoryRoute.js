const { Router } = require('express')
const categoryController = require('../controllers/categoryController')

const router = Router()

router.get('/', categoryController.getCategories)
router.post('/create', categoryController.create)
router.get('/create', categoryController.getCreateForm)
router.get('/:category_id/edit', categoryController.getEditForm)
router.post('/:category_id/edit', categoryController.edit)
router.post('/:category_id/delete', categoryController.deleteCategory)

module.exports = router
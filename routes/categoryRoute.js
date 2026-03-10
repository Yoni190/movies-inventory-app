const { Router } = require('express')
const categoryController = require('../controllers/categoryController')

const router = Router()

router.get('/', categoryController.getCategories)
router.post('/create', categoryController.create)
router.get('/create', categoryController.getCreateForm)
router.get('/:category_id/edit', categoryController.getEditForm)

module.exports = router
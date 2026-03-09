const { Router } = require('express')
const categoryController = require('../controllers/categoryController')

const router = Router()

router.get('/', categoryController.getCategories)
router.post('/create', categoryController.create)

module.exports = router
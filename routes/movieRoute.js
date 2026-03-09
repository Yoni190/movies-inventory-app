const { Router } = require('express')
const movieController = require('../controllers/movieController')

const router = Router()

router.post('/create', movieController.create())

module.exports = router
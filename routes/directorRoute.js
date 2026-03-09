const { Router } = require('express')
const directorController = require('../controllers/directorController')

const router = Router()

router.post('/create', directorController.create())

module.exports = router
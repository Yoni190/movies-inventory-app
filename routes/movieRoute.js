const { Router } = require('express')
const movieController = require('../controllers/movieController')

const router = Router()

router.get('/', movieController.getMovies)
router.post('/create', movieController.create)
router.get('/create', movieController.getCreateForm)
router.get('/:movie_id/edit', movieController.getEditForm)

module.exports = router
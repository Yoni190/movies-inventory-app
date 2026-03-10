const { Router } = require('express')
const directorController = require('../controllers/directorController')

const router = Router()

router.get('/', directorController.getDirectors)
router.post('/create', directorController.create)
router.get('/create', directorController.getCreateForm)
router.get('/:director_id/edit', directorController.getEditForm)
router.post('/:director_id/edit', directorController.edit)
router.post('/:director_id/delete', directorController.deleteDirector)

module.exports = router
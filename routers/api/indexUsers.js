import { Router } from 'express'

import UsersController from '../../controllers/users.js'
import Utils from '../../utils/index.js'

const router = Router()

router
  .get('/', Utils.authMiddleware(['admin']), UsersController.get)
  .post('/', Utils.authMiddleware(['admin']),  UsersController.create)
  .get('/:id', Utils.authMiddleware(['admin', 'usuario']), UsersController.getById)
  .put('/:id', Utils.authMiddleware(['admin', 'usuario']), UsersController.updateById)
  .delete('/:id', Utils.authMiddleware(['admin']), UsersController.deleteById)

export default router
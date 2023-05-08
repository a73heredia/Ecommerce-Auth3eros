import { Router } from 'express'

import usersRouter from './indexUsers.js'
import cartsRouter from './indexCarts.js'
import productsRouter from './indexProducts.js'
import authRouter from './auth.js'

const router = Router()

router.use('/auth', authRouter)
router.use('/users', usersRouter)
router.use('/carts', cartsRouter)
router.use('/products', productsRouter)

export default router
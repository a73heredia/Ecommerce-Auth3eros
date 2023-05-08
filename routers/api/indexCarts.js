import { Router } from 'express';
import CartsController from '../../controllers/carts.js';
import Utils from '../../utils/index.js'

const routerCarts = Router();

routerCarts
    .post('/',Utils.authMiddleware(['usuario']), CartsController.createCarts)
    .get('/',Utils.authMiddleware(['usuario']), CartsController.getCarts)
    .get('/:cid',Utils.authMiddleware(['admin']), CartsController.getCartById)
    .post('/:cid',Utils.authMiddleware(['admin']), CartsController.addProductToCart)
    .put('/:cid',Utils.authMiddleware(['admin']), CartsController.removeProductFromCart)
    .delete('/:cid',Utils.authMiddleware(['admin']), CartsController.deleteCart)



export default routerCarts;
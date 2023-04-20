import { Router } from 'express';
import CartsController from '../../controllers/carts.js';

const routerCarts = Router();

routerCarts
    .post('/', CartsController.createCarts)
    .get('/', CartsController.getCarts)
    .get('/:cid', CartsController.getCartById)
    .post('/:cid', CartsController.addProductToCart)
    .put('/:cid', CartsController.removeProductFromCart)
    .delete('/:cid', CartsController.deleteCart)



export default routerCarts;
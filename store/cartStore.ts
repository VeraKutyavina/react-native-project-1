import { makeAutoObservable } from 'mobx'
import { TProduct } from '../types';
const dress1 = require('../assets/dress1.jpeg');

class CartStore {
  cart: TProduct[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addToCart(product: TProduct) {
    this.cart.push({ ...product, inCart: product.inCart + 1 })
  }

  deleteFromCart(id: string) {
    this.cart = this.cart.filter(product => product.id !== id)
  }
}

export default new CartStore()
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

  addCartCount(id: string) {
    this.cart = this.cart.map(product => (product.id === id ? { ...product, inCart: product.inCart + 1 } : product))
  }

  removeCartCount(id: string) {
    this.cart = this.cart.map(product => (product.id === id ? { ...product, inCart: product.inCart - 1 } : product))
  }
}

export default new CartStore()
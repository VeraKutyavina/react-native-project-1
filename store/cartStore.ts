import { makeAutoObservable } from 'mobx'
import { TProduct } from '../types';

class CartStore {
  cart: TProduct[] = []

  constructor() {
    makeAutoObservable(this)
  }

  createTodo(product: TProduct) {
    this.cart.push(product)
  }

  deleteTodo(id: string) {
    this.cart = this.cart.filter(product => product.id !== id)
  }
}

export default new CartStore()
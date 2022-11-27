import { makeAutoObservable } from 'mobx'
import { TProduct } from '../types';

class FavoriteStore {
  favorites: TProduct[] = []

  constructor() {
    makeAutoObservable(this)
  }

  createTodo(product: TProduct) {
    this.favorites.push(product)
  }

  deleteTodo(id: string) {
    this.favorites = this.favorites.filter(product => product.id !== id)
  }
}

export default new FavoriteStore()
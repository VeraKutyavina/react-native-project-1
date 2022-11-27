import { makeAutoObservable } from 'mobx'

export type TodoTask = {
  id: string;
  title: string;
  completed: boolean;
}

class Todo {
  todos: TodoTask[] = []

  constructor() {
    makeAutoObservable(this)
  }

  createTodo(todo: TodoTask) {
    this.todos.push(todo)
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completeTodo(id: string) {
    this.todos = this.todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

}

export default new Todo()
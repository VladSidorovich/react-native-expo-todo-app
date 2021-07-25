import { createContext } from 'react'
import { ITodo } from '../../MainLayout'

export interface ITodoState {
  todos: ITodo[]
}

export const TodoContext: any = createContext({
})
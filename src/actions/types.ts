import { FetchTodosAction, DeleteTodoAction } from './';

export enum ActionTypes {
  fetchTodos = 'FETCH_TODOS',
  deleteTodo = 'DELETE_TODO'
}

export type Action = FetchTodosAction | DeleteTodoAction;
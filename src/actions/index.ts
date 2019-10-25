import axios from 'axios';
import { Dispatch } from 'redux';
import {ActionTypes} from './types';

export interface Todo {
  id: number;
  title: string;
  compoleted: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[]
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch<FetchTodosAction>) => {
    const response = await axios.get<Todo[]>(url);

    dispatch({
      type: ActionTypes.fetchTodos, 
      payload: response.data
    });
  };
};
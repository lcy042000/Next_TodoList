import { TodoType } from "../types/todo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { create } from "domain";

export const INIT_TODO_LIST = "todo/INIT_TODO_LIST";
export const SET_TODO_LIST = "todo/SET_TODO_LIST";

export const setTodo = (payload: TodoType[]) => {
  return {
    type: SET_TODO_LIST,
    payload,
  };
};

interface TodoReduxState {
  todos: TodoType[];
}

const initialState: TodoReduxState = {
  todos: [],
};

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo(state, action: PayloadAction<TodoType[]>) {
      state.todos = action.payload;
    },
  },
});

export const todoActions = { ...todo.actions };

export default todo;

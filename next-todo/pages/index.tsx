import { NextPage } from "next";
import React from "react";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";
import { getTodosAPI } from "../lib/api/todo";
import { wrapper } from "../store";
import { todoActions } from "../store/todo";

interface IProps {
  todos: TodoType[];
}

const app: NextPage = () => {
  return <TodoList todos={[]} />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    try {
      const { data } = await getTodosAPI();
      store.dispatch(todoActions.setTodo(data));

      return { props: {} };
    } catch (e) {
      console.log(e);
      return { props: {} };
    }
  }
);

export default app;

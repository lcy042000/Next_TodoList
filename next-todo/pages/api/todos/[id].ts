import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PATCH") {
    try {
      const todoId = Number(req.query.id);
      const todo = Data.todo.exist({ id: todoId });
      const todos = await Data.todo.getList();

      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      const changeTodos = todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, checked: !todo.checked };
        }

        return todo;
      });

      Data.todo.write(changeTodos);

      res.statusCode = 200;
      return res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  if (req.method === "DELETE") {
    try {
      const todoId = Number(req.query.id);
      const todo = Data.todo.exist({ id: todoId });

      if (!todo) {
        res.statusCode = 404;
        res.end();
      }

      const todos = Data.todo.getList();
      const filterdTodos = todos.filter((todo) => todo.id !== todoId);
      Data.todo.write(filterdTodos);
      res.statusCode = 200;
      res.end();
    } catch (e) {
      console.log(e);
      res.statusCode = 500;
      res.send(e);
    }
  }

  res.statusCode = 405;
  return res.end();
};

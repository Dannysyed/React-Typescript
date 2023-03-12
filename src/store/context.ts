import { createContext } from "react";
import TodoList from "../models/todo";

const TodoContext = createContext<{
    items: TodoList[],
    addTodo: (data: string) => void,
    removeTodo: (id: number) => void
}>(
    {
        items: [],
        addTodo: () => { },
        removeTodo: (id: number) => { }
    }
)
export default TodoContext
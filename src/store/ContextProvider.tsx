import React, { PropsWithChildren, useState } from 'react'
import TodoList from '../models/todo'
import TodoContext from './context'

const ContextProvider: React.FC<PropsWithChildren> = (props) => {
    const [todos, setTodos] = useState<TodoList[]>([])
    // console.log(Todos)
    let formdata = (data: string) => {
        console.log(data)
        const newTodo = new TodoList(data)
        console.log(newTodo)
        setTodos(prev => prev.concat(newTodo))

    }
    let onDelete = (id: number) => {
        let filterItem = todos.filter(val => val.id !== id)
        setTodos(filterItem)
        console.log(id, '..........', filterItem)
    }



    const contextValue: {
        items: TodoList[],
        addTodo: (data: string) => void,
        removeTodo: (id: number) => void
    } = {
        items: todos,
        addTodo: formdata,
        removeTodo: onDelete
    }
    return (
        <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
    )
}

export default ContextProvider
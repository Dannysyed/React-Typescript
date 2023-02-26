import React from 'react'
import TodoList from '../models/todo'
import Todoitem from './todoitem'

const Todo: React.FC<{ items: TodoList[] }> = (props) => {
    return (
        <div>
            <ul>
                {props.items.map(val => <Todoitem title={val.text} id={val.id} />)}

            </ul>
        </div>
    )
}

export default Todo
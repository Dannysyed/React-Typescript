import React from 'react'
import TodoList from '../models/todo'
import Todoitem from './todoitem'
import styles from './todoitem.module.css'
const Todo: React.FC<{ items: TodoList[], delete: (data: number) => void }> = (props) => {
    return (
        <div>
            <ul className={styles.todos} >
                {props.items.map(val => <Todoitem title={val.text} id={val.id} todo={props.items} delete={props.delete} />)}

            </ul>
        </div>
    )
}

export default Todo
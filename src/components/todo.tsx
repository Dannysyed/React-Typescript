import React, { useContext } from 'react'
import TodoList from '../models/todo'
import TodoContext from '../store/context'
import Todoitem from './todoitem'
import styles from './todoitem.module.css'
const Todo: React.FC<{ items: TodoList[], delete: (data: number) => void }> = (props) => {
    const storeData = useContext(TodoContext)

    return (
        <div>
            <ul className={styles.todos} >
                {storeData.items.map(val => <Todoitem title={val.text} id={val.id} todo={props.items} delete={props.delete} />)}

            </ul>
        </div>
    )
}

export default Todo
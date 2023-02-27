import React from 'react'
import TodoList from '../models/todo'
import styles from './todoitem.module.css'
const Todoitem: React.FC<{ title: string, id: number, todo: TodoList[] }> = (props) => {
    let deleteHandle = () => {
        console.log(props.todo)
        console.log(props.id)
        let filterItem = props.todo.filter(val => val.id !== props.id)
        console.log(filterItem)
    }
    return (
        <div className={styles.item} onClick={deleteHandle}>
            <span >{props.id} </span>
            <span>{props.title}</span>
        </div>
    )
}

export default Todoitem
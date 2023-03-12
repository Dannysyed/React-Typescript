import React, { useContext, useRef } from 'react'
import TodoContext from '../store/context'
import styles from './todoitem.module.css'
const Newtodo: React.FC<{ OnAddData: (data: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    let storeData = useContext(TodoContext)
    let submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = todoTextInputRef.current!.value
        storeData.addTodo(enteredText)
    }
    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <label>Todo text</label>
            <input type={'text'} id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default Newtodo
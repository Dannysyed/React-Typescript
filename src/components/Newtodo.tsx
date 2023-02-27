import React, { useRef } from 'react'
import styles from './todoitem.module.css'
const Newtodo: React.FC<{ OnAddData: (data: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    let submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = todoTextInputRef.current!.value
        props.OnAddData(enteredText)
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
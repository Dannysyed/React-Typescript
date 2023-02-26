import React, { useRef } from 'react'

const Newtodo: React.FC<{ OnAddData: (data: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    let submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        const enteredText = todoTextInputRef.current!.value
        props.OnAddData(enteredText)
    }
    return (
        <form onSubmit={submitHandler}>
            <label>Todo text</label>
            <input type={'text'} id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default Newtodo
import React from 'react'

const Todo: React.FC<{ items: string[] }> = (props) => {
    return (
        <div>
            <ul>
                {props.items.map(val => <li>{val}</li>)}

            </ul>
        </div>
    )
}

export default Todo
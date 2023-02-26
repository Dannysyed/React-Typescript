import React from 'react'
import styles from './todoitem.module.css'
const Todoitem: React.FC<{ title: string, id: string }> = (props) => {
    return (
        <div className={styles.first}>
            <span >{props.id.slice(0, 1)} </span>
            <span>{props.title}</span>
        </div>
    )
}

export default Todoitem
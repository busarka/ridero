import styles from './BooksContainerTitle.module.css'
import React from 'react'

export default function BooksContainerTitle() {
    return (
        <span className={styles.title}>
            Ваши добавленные книги:
        </span>
    )
}

import styles from './BookCreator.module.css'
import React from 'react'

export default function SubmitButton({onClick, isEdit}) {
    return (
        <button className={styles.button} type="submit" onClick={onClick}>
        {isEdit ? "Сохранить изменения" : 'Добавить книгу'}
        </button>
    )
}

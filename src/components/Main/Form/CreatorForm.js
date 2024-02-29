import styles from './BookCreator.module.css'
import React from 'react'
import SubmitButton from './SubmitButton';

export default function CreatorForm({
    book,
    isEdit,
    onAddFormSubmit,
    onAddWriterInputChange,
    onAddTitleInputChange,
}) {

    return (
        <form className={styles.form} onSubmit={onAddFormSubmit}>
            <label>
                <input type='text' placeholder='Автор' className={styles.input} value={book.writer} onChange={onAddWriterInputChange}/>
            </label>
            <label>
                <input type='text' placeholder='Название книги' className={styles.input} value={book.title} onChange ={onAddTitleInputChange}/>
            </label>
            <SubmitButton isEdit={isEdit} onClick={onAddFormSubmit}></SubmitButton>
        </form>
    )
}
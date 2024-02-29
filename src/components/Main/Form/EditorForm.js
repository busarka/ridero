import styles from './BookCreator.module.css'
import React from 'react'
import SubmitButton from './SubmitButton';

export default function EditorForm({
    isEdit, 
    currentBook,
    onEditFormSubmit,
    onEditTitleInputChange,
    onEditWriterInputChange,
}) {
    return (
        <form className={styles.form}>
            <label>
                <input type='text' placeholder='Автор' className={styles.input} value={currentBook.writer} onChange ={onEditWriterInputChange}/>
            </label>
            <label >
                <input type='text' placeholder='Название книги' className={styles.input} value={currentBook.title} onChange ={onEditTitleInputChange}/>
            </label>
            <SubmitButton isEdit={isEdit} onClick={onEditFormSubmit}></SubmitButton>
        </form>
    )
}

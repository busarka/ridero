import React, { useContext } from 'react'
import Edit from './Icons/Edit';
import Delete from './Icons/Delete';
import styles from './IconsMenu.module.css'
import { BooksContext } from '../../Main';

export default function IconsMenu({book, id, setIsEdit, setCurrentBook}) {
    const [books, setBooks] = useContext(BooksContext);

    const handleDeleteClick = (id) => {
        const newBooks = books.filter(item => item.id !== id)
        setBooks(newBooks)
        localStorage.setItem("booksStorage", JSON.stringify(newBooks))
    }

    function handleEditClick(book) {
        setIsEdit(true);
        setCurrentBook({ ...book });
    }

    return (
        <div className={styles.iconMenu}>
            <button className={styles.button} onClick={() => handleEditClick(book)}>
                <Edit></Edit>
            </button>
            <button className={styles.button} onClick={() => handleDeleteClick(id)}>
                <Delete></Delete>
            </button>
        </div>
    )
}

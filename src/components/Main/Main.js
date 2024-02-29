import React, { createContext, useState } from 'react'
import BooksContainer from './BooksContainer/BooksContainer'
import Form from './Form/Form'
import styles from './Main.module.css'
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const BooksContext = createContext('books');

export default function Main() {
    const [books, setBooks] = useLocalStorage('booksStorage', '')
    const [currentBook, setCurrentBook] = useState({});
    const [isEdit, setIsEdit] = useState(false)

    return (
        <main className={styles.main}>  
            <BooksContext.Provider value={[books, setBooks]}>
                <Form 
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    currentBook={currentBook}
                    setCurrentBook={setCurrentBook}
                ></Form>
                <BooksContainer 
                    setIsEdit={setIsEdit}
                    setCurrentBook={setCurrentBook}
                ></BooksContainer>
            </BooksContext.Provider>
        </main>
    )
}
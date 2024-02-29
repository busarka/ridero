import React, { useContext } from 'react'
import Book from '../Book/Book'
import styles from './BooksContainer.module.css'
import NoBooks from './NoBooks/NoBooks'
import BooksContainerTitle from './BooksContainerTitle/BooksContainerTitle'
import { BooksContext } from '../Main'

export default function BooksContainer ({
    setIsEdit, 
    setCurrentBook 
}) {
    const [books, setBooks] = useContext(BooksContext);
    return (
        <div>
            <BooksContainerTitle/>
            <div className={styles.wrapper}>
                {(books.length > 0) ? books.map((book, index) => {
                    return <Book 
                                book={book} 
                                setBooks={setBooks}
                                key={index}
                                setIsEdit={setIsEdit}
                                setCurrentBook={setCurrentBook}
                            ></Book>
                    })
                :
                <NoBooks/>
                }
            </div>
        </div>
    )
}



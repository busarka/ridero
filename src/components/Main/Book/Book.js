import styles from './Book.module.css'
import React from 'react'
import IconsMenu from './Icons/IconsMenu';
import {useHover} from '../../../hooks/useHover';

const Book = ( {book, setIsEdit, setCurrentBook}) => {
    const [isHovering, handleMouseOut, handleMouseOver] = useHover()

    return (
        <div className={styles.book} onMouseOver={handleMouseOut} onMouseOut={handleMouseOver}>
            {isHovering && 
                <div className={styles.iconMenu}>
                <IconsMenu 
                    book={book}
                    id={book.id} 
                    setIsEdit={setIsEdit}
                    setCurrentBook={setCurrentBook}></IconsMenu>
                </div>
            }
            <div className={styles.title}>{book.title}</div>
            <br></br>
            <div className={styles.writer}>{book.writer}</div>

        </div>
    )
}

export default Book
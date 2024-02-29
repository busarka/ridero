import styles from './BookCreator.module.css'
import React, { useContext, useState } from 'react'
import CreatorForm from './CreatorForm'
import EditorForm from './EditorForm';
import { BooksContext } from '../Main';

export default function BookCreator({
    isEdit, 
    setIsEdit,  
    currentBook,
    setCurrentBook
}) {
    const [books, setBooks] = useContext(BooksContext)
    const [book, setBook] = useState({writer: '', title: ''});

    function handleAddWriterInputChange(e) {
        setBook({...book, writer: e.target.value})
    }

    function handleAddTitleInputChange(e) {
        setBook({...book, title: e.target.value})
    }
    
    function handleEditInputTitle(e) {
        if (e.target.value !== ""){
            setCurrentBook({ ...currentBook, title: e.target.value });
        }
        else {
            alert('Заполните название книги')
        }
    }

    function handleEditInputWriter(e) {
        if (e.target.value !== ""){
        setCurrentBook({ ...currentBook, writer: e.target.value });
        }
        else {
            alert('Заполните автора книги')
        }
    }

    function handleAddFormSubmit(e) {
        e.preventDefault();
        if (book !== "" && book.writer !== "" && book.title !== "") {
            setBooks([...books, {id: books.length + 1, writer: book.writer?.trim(), title: book.title?.trim()}]);
            setBook({writer: '', title: ''});
            }
        else {
            alert('Все поля обязательны')
        }
    }

    function handleEditFormSubmit(e) {
        e.preventDefault();
        handleUpdateBook(currentBook.id, currentBook);
    }

    function handleUpdateBook(id, updatedBook) {
        const updatedItem = books.map((book) => {
        return book.id === id ? updatedBook : book;
        });
        setIsEdit(false);
        setBooks(updatedItem);
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                {isEdit ? 
                'Вы в режиме редактирования'
                :
                'Заполните поля:'
                }
                </h1>

                {isEdit ? (
                    <EditorForm 
                    isEdit={isEdit}
                    currentBook={currentBook}
                    onEditFormSubmit={handleEditFormSubmit}
                    onEditTitleInputChange={handleEditInputTitle}
                    onEditWriterInputChange={handleEditInputWriter}
                    />
                ) : (
                    <CreatorForm
                    book={book}
                    isEdit={isEdit}
                    onAddFormSubmit={handleAddFormSubmit}
                    onAddWriterInputChange={handleAddWriterInputChange}
                    onAddTitleInputChange={handleAddTitleInputChange}
                    />
                )
                }
        </div>
    )
}

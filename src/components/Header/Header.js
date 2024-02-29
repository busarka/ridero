import styles from './Header.module.css'
import React from 'react'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_title}>
                Ridero
            </div>
        </header>
    )
}

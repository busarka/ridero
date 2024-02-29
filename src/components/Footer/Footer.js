import styles from './Footer.module.css'
import React from 'react'

const URL = 'https://ridero.ru/'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_title}>
                Февраль 2024 для <a href={URL}>Ridero</a>
            </div>
        </footer>
    )
}

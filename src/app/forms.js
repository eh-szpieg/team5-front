'use client';
import styles from './page.module.css'
import React, { useState } from 'react';
import Form from './Form';
import Odpowiedz from './Odpowiedz';

export function AnalyzeForm(props) {

    const [document, setDocument] = useState('');

    const handleSubmit = async (event) => {
        props.updateOdpowiedz("Analuzuję dokument: " + document);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <label className={styles.description}>Wybierz dokument do analizy</label>
            <select className={styles.description} onChange={(event) => setDocument(event.target.value)} value={document}>
                <option value="OS_ZS009_1010.pdf">OS_ZS009_1010.pdf</option>
                <option value="OS_ZS009_1011.pdf">OS_ZS009_1011.pdf</option>
                <option value="OS_ZS009_1012.pdf">OS_ZS009_1012.pdf</option>
                <option value="OS_ZS009_1013.pdf">OS_ZS009_1013.pdf</option>
            </select>
            <button type="submit" className={styles.description}>Wyślij</button>
        </Form>
    );
}

export function ChatForm(props) {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (event) => {
        props.updateOdpowiedz(prompt);
    }

    return (
        <Form onSubmit={handleSubmit}>
            <label className={styles.description}>Zadaj pytanie do dokumentu</label>
            <textarea className={styles.description} onChange={(event) => setPrompt(event.target.value)} value={prompt}></textarea>
            <button type="submit" className={styles.description}>Wyślij</button>
        </Form>
    );
}

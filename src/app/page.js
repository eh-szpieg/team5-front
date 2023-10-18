'use client';
import Image from 'next/image'
import styles from './page.module.css'
import React, { useState } from 'react';
import { AnalyzeForm, ChatForm } from './forms'
import Odpowiedz from './Odpowiedz';
import Form from './Form';
import { useRef } from 'react';


export default function Home() {
  const [odpowiedz, setOdpowiedz] = useState('');

  const updateOdpowiedz = (value) => {
    console.log('Aktualizacja odpowiedzi:', value);
    setOdpowiedz(value);
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          Squad 5 - NNW Project
        </h1>
        <h2>
          Hackaton OpenAi 2023
        </h2>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
        <AnalyzeForm updateOdpowiedz={updateOdpowiedz}/>
        </div>
        <div className={styles.card}>
        <ChatForm updateOdpowiedz={updateOdpowiedz}/>
        </div>
        <div className={styles.card}>
            <h2>Odpowiedź</h2>
          <Odpowiedz value={odpowiedz} />
        </div>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Dane poszkodowanego</h3>
          <h4>Imię i nazwisko</h4>
          <p>Jan Kowalski</p>
          <h4>Adres zamieszainia</h4>
          <p>ul. Floriana Szarego 5</p>
          <p>22-400 Zamość</p>
          <h4>PESEL</h4>
          <p>558745595958</p>
          <h4>Numer Telefonu</h4>
          <p>555-555-555</p>
          <h4>Numer polisy</h4>
          <p>454544800000656</p>
        </div>
        <div className={styles.card}>
          <h3>Opis okoliczności zdarzenia</h3>
          <p>Podczas próby otwarcia słoika z ogórkami, nagle pokrywa odskoczyła i ogórki wystrzeliły na wszystkie strony. Poszkodowany, zaskoczony i przestraszony, próbował uciec, ale poślizgnął się na jednym z ogórków i wylądował na podłodze, z ogórkami przyklejonymi do twarzy. Mimo że to było zabawne dla obserwujących, poszkodowany musiał zgłosić szkodę, gdyż złamał sobie palec u nogi podczas upadku. </p>
        </div>
        <div className={styles.card}>
            <p>Poszkodowany był pod wpływem alkoholu: </p>
            <span>NIE</span>
            <p>Poszkodowany był pod wpływem narkotyków: </p>
            <span>TAK</span>
            <p>Liczba promili: </p>
            <span>0.0</span>
            <p>Czy poszkodowany liubi placki?: </p>
            <span>NIE - bezbożnik jeden</span>
        </div>
        <div className={styles.card}>
          <h3>Podsumowanie zdarzenia</h3>
          <p>Podczas próby otwarcia słoika z ogórkami, nagle pokrywa odskoczyła i ogórki wystrzeliły na wszystkie strony. Poszkodowany, zaskoczony i przestraszony, próbował uciec, ale poślizgnął się na jednym z ogórków i wylądował na podłodze, z ogórkami przyklejonymi do twarzy. Mimo że to było zabawne dla obserwujących, poszkodowany musiał zgłosić szkodę, gdyż złamał sobie palec u nogi podczas upadku. </p>
        </div>
      </div>
      <div className={styles.center}>
      <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> 
      </div>
    </main>
  )
}

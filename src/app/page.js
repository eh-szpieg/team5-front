import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>
          OpenAi Squad 5 - NNW Project
        </h1>
        <h2>
          Hackaton OpenAi 2023
        </h2>
      </div>

      <div className={styles.grid}>
        <form className={styles.description}>
        <label htmlFor="document">Wybież dokumetn do analizy:</label>
          <select name="document" id="document">
            <option value="OS_ZS009_1010.pdf">OS_ZS009_1010.pdf</option>
            <option value="OS_ZS009_1011.pdf">OS_ZS009_1011.pdf</option>
            <option value="OS_ZS009_1012.pdf">OS_ZS009_1012.pdf</option>
            <option value="OS_ZS009_1013.pdf">OS_ZS009_1013.pdf</option>
          </select>
        </form>
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

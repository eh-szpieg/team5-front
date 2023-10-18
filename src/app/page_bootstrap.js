import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
        <div className="container py-4">
    <header className="pb-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center text-light text-decoration-none">
        <span className="fs-4">Squad 5 - Hackaton OpenAi 2023</span>
      </a>
    </header>

    <div className="row align-items-md-stretch mb-4">
      <div className="col-md-6">
        <div className="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Analiza</h2>
          <label for="country" className="form-label">Wybierz dokument do analizy</label>
            <select className="form-select" id="country" required>
              <option value="OS_ZS009_1010.pdf">OS_ZS009_1010.pdf</option>
              <option value="OS_ZS009_1011.pdf">OS_ZS009_1011.pdf</option>
              <option value="OS_ZS009_1012.pdf">OS_ZS009_1012.pdf</option>
              <option value="OS_ZS009_1013.pdf">OS_ZS009_1013.pdf</option>
            </select>
          <button className="btn btn-outline-light mt-2 mb-5" type="button">Analiza</button><br></br>

        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-dark  rounded-3">
          <h2>Dane Polisy</h2>

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
      </div>
    </div>

    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-white bg-dark rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button className="btn btn-outline-light" type="button">Example button</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-dark  rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button className="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
    </div>

    <footer className="pt-3 mt-4 text-light border-top">
      &copy; 2023
    </footer>
  </div>
    </main>
  )
}

import linkSymbol from "../../images/link_symbol.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <nav>
        <ul className="portfolio__links">
          <li className="portfolio__link">
            <p className="portfolio__link-text">Статичный сайт</p>
            <a href="https://staskudinow.github.io/how-to-learn/" target="blank">
              <img  className="portfolio__link-symbol" src={linkSymbol} alt="Ссылка" />
            </a>
          </li>
          <li className="portfolio__link">
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <a href="https://staskudinow.github.io/russian-travel/" target="blank">
              <img className="portfolio__link-symbol" src={linkSymbol} alt="Ссылка" />
            </a>
          </li>
          <li className="portfolio__link">
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <a href="https://staskudinow.mesto.nomoredomains.club/" target="blank">
              <img className="portfolio__link-symbol" src={linkSymbol} alt="Ссылка" />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Portfolio;

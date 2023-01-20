// import linkSymbol from "../../images/link_symbol.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <nav>
        <ul className="portfolio__links">
          <li className="portfolio__link-container">
            <a className="portfolio__link" href="https://staskudinow.github.io/how-to-learn/" target="blank">
              <p className="portfolio__link-text">Статичный сайт</p>
              <div className="portfolio__link-symbol" />
            </a>
          </li>
          <li className="portfolio__link-container">
            <a className="portfolio__link" href="https://staskudinow.github.io/russian-travel/" target="blank">
              <p className="portfolio__link-text">Адаптивный сайт</p>
              <div className="portfolio__link-symbol" />
            </a>
          </li>
          <li className="portfolio__link-container">
            <a className="portfolio__link" href="https://staskudinow.mesto.nomoredomains.club/" target="blank">
              <p className="portfolio__link-text">Одностраничное приложение</p>
              <div className="portfolio__link-symbol" />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;

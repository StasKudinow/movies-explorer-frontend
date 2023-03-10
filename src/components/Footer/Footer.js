function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__copyright">&copy; 2023 Стас Кудинов</p>
        <nav>
          <ul className="footer__links">
            <li>
              <a className="footer__link" href="https://practicum.yandex.ru/" target="blank">Яндекс.Практикум</a>
            </li>
            <li>
              <a className="footer__link" href="https://github.com/StasKudinow" target="blank">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

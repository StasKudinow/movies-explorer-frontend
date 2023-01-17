import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="page404">
      <h1 className="page404__title">404</h1>
      <p className="page404__text">Страница не найдена</p>
      <Link to="/" className="page404__link">Назад</Link>
    </div>
  );
}

export default PageNotFound;

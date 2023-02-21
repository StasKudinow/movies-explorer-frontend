import { Link, useHistory } from "react-router-dom";

function PageNotFound() {

  const history = useHistory();

  function handleClickBack() {
    history.goBack();
  };
  
  return (
    <div className="page404">
      <h1 className="page404__title">404</h1>
      <p className="page404__text">Страница не найдена</p>
      <Link className="page404__link" onClick={handleClickBack}>Назад</Link>
    </div>
  );
}

export default PageNotFound;

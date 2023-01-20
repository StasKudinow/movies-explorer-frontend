import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
      <Link to="/"><button className="header__logo" type="button" /></Link>
    </>
  );
}

export default Logo;

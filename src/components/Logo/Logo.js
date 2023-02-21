import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
      <Link to="/"><button className="logo" type="button" /></Link>
    </>
  );
}

export default Logo;

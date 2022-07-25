import './Header.css';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header_container">
      <Link to="/">
        <img src={logo} alt="logo" />{' '}
      </Link>
    </div>
  );
}

export default Header;

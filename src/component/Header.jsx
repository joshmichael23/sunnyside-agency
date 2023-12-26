import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'

function Header() {
  return (
    <header>
        <img src={logo}></img>
        <button>
            <img src={menu}></img>
        </button>
    </header>
  );
}

export default Header;

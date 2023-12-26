import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import instagram from '../images/icon-instagram.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'

function Footer() {
  return (
    <footer>
        <img className='logoBottom' src={logo}></img>
        <div className='links'>
            <a>About</a>
            <a>Services</a>
            <a>Projects</a>
        </div>
        <div className='social-media'>
            <button><img src={facebook}></img></button>
            <button><img src={instagram}></img></button>
            <button><img src={twitter}></img></button>
            <button><img src={pinterest}></img></button>
        </div>
    </footer>
  );
}

export default Footer;

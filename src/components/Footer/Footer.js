import './Footer.css';
import instagramImg from '../../assets/instagram-img.png';
import facebookImg from '../../assets/facebook-img.png';
import youtubeImg from '../../assets/youtube-img.png';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-div-img">
        <a className="footer-link" href="https://www.instagram.com">
            <img className="footer-img" src={instagramImg} alt="Instagram"/>
        </a>
        <a className="footer-link" href="https://www.facebook.com">
            <img className="footer-img" src={facebookImg} alt="Facebook"/>
        </a>
        <a className="footer-link" href="https://www.youtube.com">
            <img className="footer-img" src={youtubeImg} alt="Youtube"/>
        </a>

      </div>
      <p className="footer-p"> &copy; Copyright 2022. Todos los derechos reservados | Paula Airaudo </p>
    </div>
  );
}

export default Footer;
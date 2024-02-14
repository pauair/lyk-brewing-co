import facebookImg from '../assets/facebook-img.webp';
import instagramImg from '../assets/instagram-img.webp';
import youtubeImg from '../assets/youtube-img.webp';

function Footer() {
  return (
    <div className='bg-black flex flex-col gap-4 p-4 text-lg text-center content-center max-w-full'>
      <div className='self-center flex'>
        <a className="footer-link" href="https://www.instagram.com" target='__blank'>
          <img className='m-2 size-8 rounded-md hover:shadow-custom' src={instagramImg} alt="Instagram" />
        </a>
        <a className="footer-link" href="https://www.facebook.com" target='__blank'>
          <img className='m-2 size-8 rounded-md hover:shadow-custom' src={facebookImg} alt="Facebook" />
        </a>
        <a className="footer-link" href="https://www.youtube.com" target='__blank'>
          <img className='m-2 size-8 rounded-md hover:shadow-custom' src={youtubeImg} alt="Youtube" />
        </a>

      </div>
      <p className='text-xs'> &copy; Copyright 2022. All rights reserved | Paula Airaudo </p>
    </div>
  );
}

export default Footer;
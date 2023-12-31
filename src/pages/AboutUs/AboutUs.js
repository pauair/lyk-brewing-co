import './AboutUs.css'
import Footer from '../../components/Footer/Footer';
import lykfriends from '../../assets/brindis.jpg';
import lykcompany from '../../assets/company.jpg';

function AboutUs() {
    return (
      <div className='aboutus-body'>
        <div className='aboutus-container'>
          <div className='aboutus-container-text'>
            <p className='aboutus-p'>LYK originates in the city of Montevideo, at the heart of a group of beer enthusiasts and friends whose sole purpose was to have fun in the process. Later, a commitment to the environment joined that goal, brewing beer sustainably using eco-friendly raw materials.</p>
          </div>
          <div className='aboutus-container-img'> 
            <img className="aboutus-img" src={lykcompany} alt="company-img"/> 
          </div>
          <div className='aboutus-container-text'>
            <p className='aboutus-p'>Beer crafting began in our garages. However, with effort and dedication, we managed to establish our own brewery. In 2021, we turned our dream into a reality.</p>
          </div>
          
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default AboutUs;
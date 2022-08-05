import './AboutUs.css'
import Footer from '../../components/Footer/Footer';
import lykfriends from '../../assets/brindis.jpg';
import lykcompany from '../../assets/company.jpg'

function AboutUs() {
    return (
      <div className='aboutus-body'>
        <div className='aboutus-container'>
          <div>
            <h3 className='aboutus-subtitle'>...</h3>
            <p className='aboutus-p'>LYK nace en la ciudad de Montevideo, en el corazón de un grupo de amigos amantes de la cerveza, cuya única finalidad era la de divertirse en el proceso. Más tarde se sumaría a ese objetivo un compromiso ambiental, elaborar cerveza de manera sustentable utilizando materias primas ecológicas.</p>
          </div>
          <img className="aboutus-img" src={lykfriends} alt="friends-img"/>
          <img className="aboutus-img" src={lykcompany} alt="company-img"/>
          <div>
            <h3 className='aboutus-subtitle'>...</h3>
            <p className='aboutus-p'>La elaboración de cerveza comenzó en nuestros garages. Sin embargo, con esfuerzo y dedicación, logramos fundar nuestra propia fábrica. En el año 2021, convertimos nuestro sueño en una realidad.</p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default AboutUs;
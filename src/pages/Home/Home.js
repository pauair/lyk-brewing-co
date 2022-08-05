import './Home.css'
import home from '../../assets/home-img.gif'
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className="home-container">
      <h2 className='home-title'>LYK BREWING COMPANY</h2>
      <img src={home} alt="home" className="home-img" />
      <Footer/>
    </div>
  );
}

export default Home;
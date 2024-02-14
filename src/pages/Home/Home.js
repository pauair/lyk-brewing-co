import 'animate.css';
import home from '../../assets/home-img.webp'
import Footer from '../../components/Footer';

function Home() {
  return (
    <>
      <div className='bg-black text-white text-center relative h-75 w-full overflow-hidden lg:min-w-screen-lg lg:h-screen lg:overflow-hidden'>
        <h2 className='animate__animated animate__fadeInLeft uppercase absolute z-2 font-bold text-6xl my-40 mx-0 p-0 lg:text-8xl lg:my-0 lg:mx-40 lg:p-20'>lyk brewing company</h2>
        <img src={home} alt="home" className='opacity-15 object-cover w-full h-full' />
      </div>
      <Footer />
    </>
  );
}

export default Home;
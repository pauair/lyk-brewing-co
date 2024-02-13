import Footer from '../../components/Footer';
import lykcompany from '../../assets/company.jpg';

function AboutUs() {
    return (
      <div className=' text-pretty content-center'>
          <div className=' bg-black grid justify-items-center px-3 py-6 -z-10 w-full lg:grid-cols-2 lg:grid-rows-2'>
              <div className='animate__animated animate__fadeIn bg-black m-4 w-4/5 lg:pt-16  content-center'>
                  <p className='text-white text-base p-5'>LYK originates in the city of Montevideo, at the heart of a group of beer enthusiasts and friends whose sole purpose was to have fun in the process. Later, a commitment to the environment joined that goal, brewing beer sustainably using eco-friendly raw materials.</p>
              </div>
              <div className='animate__animated animate__fadeInRight justify-center w-4/5 p-6 flex lg:py-12 lg:col-start-2 lg:row-start-1 lg:row-end-3'>
                  <img className='m-3 p-0 bg-white rounded-lg lg:max-h-75 ' src={lykcompany} alt="company-img" />
              </div>
              <div className='animate__animated animate__fadeIn bg-black m-4 w-4/5 lg:pb-16 justify-center content-center'>
                  <p className='text-white text-base p-5'>Beer crafting began in our garages. However, with effort and dedication, we managed to establish our own brewery. In 2021, we turned our dream into a reality.</p>
              </div>
          </div>
          <Footer />
      </div>
  );
}

export default AboutUs;
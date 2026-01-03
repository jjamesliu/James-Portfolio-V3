import Navbar from '../components/Navbar';
import About from '../components/About';
import FeaturedProjects from '@/app/components/FeaturedProjects';
import Footer from "@/app/components/Footer"

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='max-w-6xl mt-20 mx-auto p-10 space-y-30'>
      <About/>
      <FeaturedProjects/>
      <Footer />
    </div>
    </>
  );
}

export default Home;
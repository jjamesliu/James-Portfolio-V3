import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='max-w-7xl mt-20 mx-auto p-10 space-y-30'>
      <About/>
      <Projects/>
    </div>
    </>
  );
}

export default Home;
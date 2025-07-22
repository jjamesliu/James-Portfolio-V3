
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className='font-sans max-w-4xl mx-auto'>
      <Header />
      <Profile />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>

  );
}


import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className='font-sans max-w-5xl mx-auto'>
      <Header />
      <Profile />
      <About />
      <Skills />
      {/* <Work /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>

  );
}

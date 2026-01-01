import Header from "../components/v3/Header";
import Profile from "../components/v3/Profile";
import About from "../components/v3/About";
import Contact from "../components/v3/Contact";
import Skills from "../components/v3/Skills";
import Work from "../components/v3/Work";
import Projects from "../components/v3/Projects";
import Footer from "../components/v3/Footer";

export default function JamesPortfolioV3() {
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
    )
}
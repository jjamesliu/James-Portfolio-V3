
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className='font-sans max-w-4xl mx-auto'>
      <Header />
      <Profile />
      <About />
      <Contact />
    </div>

  );
}

import "./App.css";
import "boxicons";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contactus from "./components/Contactus.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main>
      {/** header start */}
      <header>
        <a href="#" className="logo">
          Rahul <span>Yadav..</span>
        </a>

        <box-icon name="menu" id="menu-icon"></box-icon>

        <ul className="navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#proj">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <box-icon name="moon" id="darkmode"></box-icon>
        </ul>
      </header>

      {/** Home section */}
      <section className="home" id="home">
        <div className="social">
          <a href="https://github.com/RahulY29">
            <box-icon class="github"></box-icon>
          </a>
          <a href="https://www.linkedin.com/in/rahul-yadav-461830223/">
            <box-icon class="linkedin"></box-icon>
          </a>
          <a href="#">
            <box-icon class="instagram"></box-icon>
          </a>
        </div>
        <div className="home-img">
          <img src="./src/images/rahulyadav.jpg" alt="main picture" />
        </div>
        <div class="home-text">
          <span>Hello, I'm</span>
          <h1>Rahul Yadav</h1>
          <h4>
            I am Passionate <span>Front-End Developer</span>.
          </h4>
          <p></p>
          <a href="#about" className="btn">
            About me
          </a>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contactus />
      <Footer />
    </main>
  );
}

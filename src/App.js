import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Background from "./components/Background";

import "./App.css";
import "./background.scss";

function App() {
  return (
    <main class="bg-black text-gray-400">
      <Background></Background>
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </main>
  );
}

export default App;

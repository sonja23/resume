import './App.css';
import About from './components/About/about';
import Education from './components/Education/education';
import Experience from './components/Experience/experience';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';

import Skills from './components/Skills/skills';

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Experience />
    </main>
  );
}

export default App;


import './App.css';
import ContactForm from './components/ContactForm';
import ContactLinks from './components/ContactLinks';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';




function App() {
  
  return (
    <div>
      <Header />
      <Home/>
      <ContactLinks />
      <Skills/>
      <Projects />
      <ContactForm/>
    </div>
   
  );
}

export default App;

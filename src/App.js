import Header from './Layouts/Header/Header';
import './App.css';
import Main from './Layouts/MainIntro/Main';
import Footer from './Layouts/Footer/Footer';
import About from './Layouts/About/About';
import Projects from './Layouts/Projects/Projects';
import Contact from './Layouts/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Projects />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;

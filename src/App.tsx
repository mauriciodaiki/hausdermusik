import './App.css';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import Contacto from './Contact';
import Profesores from './Profesores';
import Galeria from './Galeria';

function App() {

  return (
    <div className="App">
    <Header />
    <WelcomeSection />
    <Profesores />
    <Galeria />
    <Contacto />
    </div>
  )
}

export default App;

import './index.css';

function Header() {
    return (
      <header className="header">
        <div className="logo">
        <img src="hausdermusiklogo.jpg" alt="Haus der Musik Logo"></img>
        <span>Haus der Musik</span>
        </div>
        <nav className="nav">
          <ul>                  
            <li><a href="#profesores">Profesores</a></li>
            <li><a href="#precios">Precios</a></li> 
          </ul>
        </nav>
        <button className="contact-button">Contáctenos</button>
      </header>
    );
  }
  
  export default Header;
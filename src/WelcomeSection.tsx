import './index.css';

function WelcomeSection() {
    return (
        <section className="welcome-section">
            <div className="welcome-message">
                <h1>Te damos la bienvenida a Haus der Musik academia de música</h1>
                <p>
                    Con más de 8 años de experiencia, ofrecemos una amplia gama de cursos y talleres de arte, música y canto. Nuestro enfoque se centra en clases personalizadas, adaptadas a tus necesidades y disponibilidad, todo ello a precios altamente competitivos. Únete a nosotros y descubre un mundo de expresión artística y musical de la mano de expertos apasionados.
                </p>
            </div>
            <div className="features">
                <div className="feature">
                    <img src="music1.webp" alt="Person playing piano" width="250"/>
                    <div className="text">
                    <h2>Fomentamos la cultura musical</h2>
                    <p>
                        Descubre la excelencia de Haus der Musik, donde encontrarás instalaciones especializadas y profesores altamente capacitados. Nuestro enfoque pedagógico de vanguardia te permitirá potenciar al máximo tu talento. Te invitamos a conocernos y a experimentar una educación musical de calidad excepcional.
                    </p>
                    </div>
                </div>
                <div className="feature">
                    <img src="music2.webp" alt="" width="250" />
                    <div className="text">
                    <h2>El arte es para todos...</h2>
                    <p>
                        Deseamos ser parte de tu crecimiento artístico, sin importar tu edad. Ofrecemos una variedad de talleres de música y pintura diseñados estratégicamente y adaptados a tus necesidades. ¡Inscríbete hoy mismo y comienza tu viaje hacia la expresión creativa!
                    </p>
                    </div>
                </div>
                <div className="feature">
                    <img src="music3.webp" alt="" width="250" />
                    <div className="text">
                    <h2>Del aprendizaje a la práctica</h2>
                    <p>
                        En Haus der Musik, brindamos a nuestros estudiantes la posibilidad de aplicar las habilidades adquiridas durante su formación musical mediante recitales y presentaciones.
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;

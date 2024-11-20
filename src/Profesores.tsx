import './index.css';

function Profesores() {
    return (
        <section id="profesores" className="professors-section">
            <h2>Nuestros Profesores</h2>
            <div className="professors">
                <div className="professor-card">
                    <img src="guitar1.ico" alt="Guitar" width="200"/>
                    <h3>Juan Pérez</h3>
                    <p>Especialidad: Guitarra Clásica</p>
                    <p>Capacidades: Lectura Musical, Armonía Avanzada</p>
                </div>

                <div className="professor-card">
                    <img src="piano.webp" alt="Piano" width="200"/>
                    <h3>María García</h3>
                    <p>Especialidad: Piano</p>
                    <p>Capacidades: Armonía Básica, Improvisación</p>
                </div>

                <div className="professor-card">
                    <img src="violin.webp" alt="Violín" width="200"/>
                    <h3>Roberto Martínez</h3>
                    <p>Especialidad: Violín</p>
                    <p>Capacidades: Lectura Musical, Técnica Avanzada</p>
                </div>

                <div className="professor-card">
                    <img src="mic.webp" alt="Microfono" width="200"/>
                    <h3>Sofía López</h3>
                    <p>Especialidad: Canto</p>
                    <p>Capacidades: Respiración, Técnica Vocal</p>
                </div>
            </div>
        </section>
    );
}

export default Profesores;

import './index.css';

function Galeria() {
    return (
        <section className="fotosvideos">
            <div className="gallery">
            <h1>Fotos y Videos</h1>
                <div className="fotos">
                    <div className="gallery-item">
                        <img src="haus1.jpg" alt="Foto 1" width="500"/>
                    </div>
                    <div className="gallery-item">
                        <img src="haus2.jpg" alt="Foto 2" width="500"/>
                    </div>
                    <div className="gallery-item">
                        <img src="haus3.jpg" alt="Foto 1" width="500" />
                    </div>
                    <div className="gallery-item">
                        <img src="haus4.jpg" alt="Foto 2" width="500" />
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Galeria;

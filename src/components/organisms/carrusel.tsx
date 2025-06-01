import { useState } from "react";
import Poster from "../atoms/posterCar";
import Boton from "../atoms/button";
import BotonProgreso from "../atoms/botonProgreso";
import Descripcion from "../molecules/descripcion"

const Carrusel = () => {
    const [indice, setIndice] = useState(0);
    const peliculas = [{ src: "../img/carrusel1.webp", titulo: "Película 1", descripcion: "Descripción 1" }, { src: "../img/carrusel2.webp", titulo: "Película 1", descripcion: "Descripción 1" }, { src: "../img/carrusel3.webp", titulo: "Película 1", descripcion: "Descripción 1" }];

    const siguiente = () => {
        if (indice < peliculas.length - 1) {
            setIndice(indice + 1);
        }
    };

    const anterior = () => {
        if (indice > 0) {
            setIndice(indice - 1);
        }
    };

    return (//OTRA VEZ
        <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
            {/*PROGRESOS*/}
            <div className="carousel-indicators">
                {peliculas.map((_, i) => (
                    <BotonProgreso
                        key={i}
                        indice={i}
                        activo={i === indice}
                        dataTarget="#carouselExampleDark"
                        onSelect={setIndice}
                    />
                ))}
            </div>

            {/*CARRUSEL*/}
            <div className="carousel-inner">
                {peliculas.map((pelicula, i) => (
                    <div key={i} className={`carousel-item ${i === indice ? "active" : ""}`}>
                        <Poster src={pelicula.src} alt={pelicula.titulo} />
                        <Descripcion src={"../img/cartitulo1.webp"} descripcion={pelicula.descripcion} />
                    </div>
                ))}
            </div>

            <Boton clase="carousel-control-prev" dataTarget="#carouselExampleDark" dataSlide="prev" />
            <Boton clase="carousel-control-next" dataTarget="#carouselExampleDark" dataSlide="next" />

        </div>
    );
};

export default Carrusel;
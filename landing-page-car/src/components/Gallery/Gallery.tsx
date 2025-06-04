import React from "react";
import Styles from "./style.module.scss"
import img01 from "../../assets/Galeria/01.jpg"
import img02 from "../../assets/Galeria/02.jpg"
import img03 from "../../assets/Galeria/03.jpg"
import img04 from "../../assets/Galeria/04.jpg"
import img05 from "../../assets/Galeria/05.jpg"
import img06 from "../../assets/Galeria/06.jpg"
import img07 from "../../assets/Galeria/07.jpg"


const Gallery: React.FC = () => {
    return (   
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img01} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img02} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img03} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img04} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img05} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img06} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img07} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}

export default Gallery;
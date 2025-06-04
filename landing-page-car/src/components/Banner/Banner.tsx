import React from "react";
import styles from './styles.module.scss'
import banner from '../../assets/IMG_7554.jpg'

const Banner: React.FC = () => {
    return (
        <div className="row">
            <div className="col">
                <img className="col-12" src={banner} alt="Imagem Principal" title="Imagem Principal" />
            </div>
        </div>
    )
}

export default Banner;
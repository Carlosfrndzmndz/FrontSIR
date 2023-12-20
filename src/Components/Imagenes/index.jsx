import React from 'react';
import Slider from 'react-slick';
import './Imagenes.css';

const Imagenes = ({ imagenes }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
    };

    return (
        <Slider {...settings}>
            {imagenes.map((imagen, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                    <img
                        src={imagen.direccion}
                        alt={`Imagen ${index + 1}`}
                        style={{
                            maxWidth: '100%',
                            maxHeight: '1000px',
                            height: 'auto',
                            margin: '0 auto',
                        }}
                    />
                </div>
            ))}
        </Slider>
    );
};

export default Imagenes;
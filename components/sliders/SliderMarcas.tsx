'use client';

import Image from 'next/image';
import styles from './marcas.module.scss';
import Slider from 'react-slick';

const Marcas = [
    {name: 'Eptic', image: '/imagenes/Eptic.svg', alt:'Eptic Logotipo'},
    {name: 'Dombresky', image: '/imagenes/Dombresky.svg', alt:'Dombresky Logotipo'},
    {name: 'Mochakk', image: '/imagenes/Mochakk.svg', alt:'Mochakk Logotipo'},
    {name: 'Marauda', image: '/imagenes/Marauda.svg', alt:'Marauda Logotipo'},
    {name: 'Purple Disco Machine', image: '/imagenes/PurpleDisco.svg', alt:'Purple Disco Machine Logotipo'},
    {name: 'Zedd', image: '/imagenes/Zedd.svg', alt:'Zedd Logotipo'},
    {name: 'Atliens', image: '/imagenes/Atliens.svg', alt:'Atliens Logotipo'},
    {name: 'Clonee', image: '/imagenes/Clonee.svg', alt:'Clonee Logotipo'},
    {name: 'John Summit', image: '/imagenes/JohnSummit.svg', alt:'John Summit Logotipo'},
    {name: 'Malaa', image: '/imagenes/Malaa.svg', alt:'Malaa Logotipo'},
    {name: 'Salvatore Ganacci', image: '/imagenes/SalvatoreGanacci.svg', alt:'Salvatore Ganacci Logotipo'},
    {name: 'Riot Ten', image: '/imagenes/RiotTen.svg', alt:'Riot Ten Logotipo'},
]

const SliderMarcas = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6
    }

    return ( 
        <div className={styles.SliderMarcas}>
            <div className={styles.Slide}>
                <Slider {...settings}>
                    { Marcas.map((marca)=>(
                        <div key={marca.name} className={styles.Container}>
                            <Image 
                                src={marca.image}
                                width={900}
                                height={900}
                                alt={marca.image}
                            />
                        </div>
                    ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default SliderMarcas;
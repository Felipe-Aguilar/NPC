'use client';

import Slider from "react-slick";
import styles from './principal.module.scss';
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const SliderPrincipal = () => {

    const settings = {
        arrows: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        prevArrow: <BsArrowLeftShort />,
        nextArrow: <BsArrowRightShort />
    };

    const animation = {
        initial: {opacity: 0, y: -10},
        transition: {delay: 0.9}
    }

    return ( 
        <Slider {...settings}>
            <div className={`${styles.Principal} ${styles.first}`}>
                <div className={styles.Overlay}>
                    <motion.div {...animation} whileInView={{opacity: 1, y:0}}>
                        <h1>
                            Se un NPC del edm<br/>
                            <span>Playeras Inspiradas en los Mejores DJ's del Mundo</span>
                        </h1>
                        <Link href={'#'}>
                            Compra ahora
                        </Link>
                    </motion.div>
                </div>
            </div>

            <div className={`${styles.Principal} ${styles.second}`}>
                <div className={styles.Overlay}>
                    <motion.div {...animation} whileInView={{opacity: 1, y:0}}>
                        <h1>
                            Baila con Estilo<br/>
                            <span>Descubre Nuestras Playeras Únicas de DJ's</span>
                        </h1>
                        <Link href={'#'}>
                            Ver más
                        </Link>
                    </motion.div>
                </div>
            </div>
        </Slider>
    );
}

export default SliderPrincipal;
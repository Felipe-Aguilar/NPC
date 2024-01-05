'use client';

import Link from "next/link";
import { useRef, useState } from "react";
import styles from './news.module.scss';
import { motion } from "framer-motion";

import { BsBag } from "react-icons/bs";

const News = () => {

    const [isHover, setIsHover] = useState(false);
    const [isHover2, setIsHover2] = useState(false);

    const divVariants = {
        hidden: {opacity: 0, y:20},
        visible: {opacity: 1, y:0}
    }
    

    return ( 
        <div className={`row ${styles.News}`}>
            <motion.div 
                className='col-12 col-lg-6 p-0'
                onHoverStart={()=>setIsHover(true)}
                onHoverEnd={()=>setIsHover(false)}
            >
                <Link href={'/'} className={`${styles.NewContainer} ${styles.New1}`}>
                    <h2>Featured</h2>

                    <div className={styles.Icon}>
                        <BsBag />
                    </div>

                    <motion.div 
                        className={styles.NewsInfoContainer}
                        variants={divVariants}
                        initial="hidden"
                        animate={isHover ? "visible" : "hidden"}
                    >
                        <span>Playeras</span>
                        <h5>Oliver Heldens Collection</h5>
                    </motion.div>
                </Link>
            </motion.div>

            <motion.div 
                className='col-12 col-lg-6 p-0'
                onHoverStart={()=>setIsHover2(true)}
                onHoverEnd={()=>setIsHover2(false)}
            >
                <Link 
                    href={'/'} 
                    className={`${styles.NewContainer} ${styles.New2}`}
                >
                    <h2>Nuevas Colecciones</h2>

                    <div className={styles.Icon}>
                        <BsBag />
                    </div>

                    <motion.div 
                        className={styles.NewsInfoContainer}
                        variants={divVariants}
                        initial="hidden"
                        animate={isHover2 ? "visible" : "hidden"}
                    >
                        <span>Playeras</span>
                        <h5>Owsla Collection</h5>
                    </motion.div>
                </Link>
            </motion.div>
        </div>
    );
}

export default News;
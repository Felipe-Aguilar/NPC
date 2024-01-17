'use client';   

import { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { motion } from 'framer-motion';
import styles from './newCollections.module.scss';

const NewCollections = () => {

    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);

    const Variants = {
        hidden: {y:0},
        visible: {y: -72}
    }

    return ( 
        <div className={styles.NewCollections}>
            <div className={styles.TitleNews}>
                <span>Explora más novedades</span>
                <h2>Nuestras colecciones</h2>
            </div>

            <div className={styles.Collections}>
                <motion.div 
                    className={styles.Collection}
                    onHoverStart={()=>setHover(true)}
                    onHoverEnd={()=>setHover(false)}
                    variants={Variants}
                    initial={"hidden"}
                    animate={hover ? 'visible' : 'hidden'}
                    transition={{type: 'spring', damping: 17}}
                >
                    <div className={`${styles.Image} ${styles.First}`}>          
                        <div className={styles.Text}>
                            <span>Colección</span>
                            <h4>Eric Prydz</h4>
                        </div>
                    </div>
                    <div className={styles.Explore}>
                        <span>Explorar colección</span>
                        <BsArrowRightShort />
                    </div>
                </motion.div>

                <motion.div 
                    className={styles.Collection}
                    onHoverStart={()=>setHover2(true)}
                    onHoverEnd={()=>setHover2(false)}
                    variants={Variants}
                    initial={"hidden"}
                    animate={hover2 ? 'visible' : 'hidden'}
                    transition={{type: 'spring', damping: 17}}
                >
                    <div className={`${styles.Image} ${styles.Second}`}>          
                        <div className={styles.Text}>
                            <span>Colección</span>
                            <h4>EDC México 2024</h4>
                        </div>
                    </div>
                    <div className={styles.Explore}>
                        <span>Explorar colección</span>
                        <BsArrowRightShort />
                    </div>
                </motion.div>

                <motion.div 
                    className={styles.Collection}
                    onHoverStart={()=>setHover3(true)}
                    onHoverEnd={()=>setHover3(false)}
                    variants={Variants}
                    initial={"hidden"}
                    animate={hover3 ? 'visible' : 'hidden'}
                    transition={{type: 'spring', damping: 17}}
                >
                    <div className={`${styles.Image} ${styles.Third}`}>          
                        <div className={styles.Text}>
                            <span>Colección</span>
                            <h4>Knife Party</h4>
                        </div>
                    </div>
                    <div className={styles.Explore}>
                        <span>Explorar colección</span>
                        <BsArrowRightShort />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default NewCollections;
'use client';

import styles from './header.module.scss';
import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import Link from 'next/link';

const MenuMobile = () => {

    const [open, setOpen] = useState(false);

    const Animation = {
        initial: {x:0},
        animate: {x:1},
        exit: {x:0}
    }

    return ( 
        <div>
            <button className={styles.Menu} onClick={()=>setOpen(!open)}>
                { !open 
                    ? (<FaBars />)
                    
                    : (<BsXLg />)
                }
            </button>

            <AnimatePresence>
                { open && (
                    <motion.div {...Animation} className={styles.ContainerMenu}>
                        <Link href={'/'}>
                            Tienda
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default MenuMobile;
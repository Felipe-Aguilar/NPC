'use client';

import styles from './header.module.scss';
import { FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import Link from 'next/link';

const MenuMobile = () => {

    const [open, setOpen] = useState(false);

    useEffect(()=>{
        if (open) {
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
    },[open]);

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
                    <motion.div 
                        className={styles.ContainerMenu}
                        initial={{height: 0}}
                        animate={{height: '100vh'}}
                        exit={{height: 0}}
                    >
                        <Link href={'/'}>
                            Home
                        </Link>
                        <Link href={'/'}>
                            Tienda
                        </Link>
                        <Link href={'/blog'}>
                            Blog
                        </Link>
                        <Link href={'/'}>
                            Contacto
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default MenuMobile;
import Image from "next/image";
import Link from "next/link";
import styles from './header.module.scss';
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import MenuMobile from "./MenuMobile";

const HeaderSticky = () => {
    return ( 
        <header className={styles.HeaderSticky}>
            <Link href={'/'}>
                <Image 
                    width={80}
                    height={80}
                    src={'/imagenes/Logotipo NPC blanco.svg'}
                    alt="NPC Logotipo oficial - Playeras de música electrónica y Dj's"
                />
            </Link>

            <nav>
                <Link href={'#'}>
                    Tienda
                </Link>
                <Link href={'/contacto'}>
                    Contacto
                </Link>
                <Link href={'/blog'}>
                    Blog
                </Link>
            </nav>

            <div className={styles.Other}>
                <span>
                    cart (0)
                </span>
            </div>

            <div className={styles.MobileMenu}>
                <Link href={'/'}>
                    <BsSearch />
                </Link>

                
                <MenuMobile />
            </div>
        </header>
    );
}

export default HeaderSticky;
import Image from "next/image";
import Link from "next/link";
import styles from './header.module.scss';
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Header = () => {

    return ( 
        <header className={`${styles.HeaderSticky} ${styles.Header} `}>
            <Link href={'/'}>
                <Image 
                    width={80}
                    height={80}
                    src={'imagenes/Logotipo NPC.svg'}
                    alt="NPC Logotipo oficial - Playeras de música electrónica y Dj's"
                />
            </Link>

            <nav>
                <Link href={'#'}>
                    Tienda
                </Link>
                <Link href={'#'}>
                    Contacto
                </Link>
                <Link href={'#'}>
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

                <button className={styles.Menu}>
                    <FaBars />
                </button>
            </div>
        </header>
    );
}

export default Header;
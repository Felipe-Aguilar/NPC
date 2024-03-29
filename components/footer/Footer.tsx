import Link from 'next/link';
import styles from './footer.module.scss';
import Image from 'next/image';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

const Footer = () => {

    const AboutLinks = [
        {id: 1, name: 'contacto', link: '/contacto'},
        {id: 2, name: 'blog', link: '/blog'},
        {id: 3, name: 'política de privacidad', link: '/politica-privacidad'},
        {id: 4, name: 'términos y condiciones', link: '/terminos-y-condiciones'},
    ]

    return ( 
        <footer className={styles.Footer}>
            <div className={styles.Container}>

                <div className={styles.Icons}>
                    <Link href={'/'}>
                        <Image 
                            src={'/imagenes/Logotipo NPC.svg'}
                            alt='Logotipo NPC'
                            width={500}
                            height={500}
                        />
                    </Link>

                    <span>© 2024 NPC 619, TODOS LOS DERECHOS RESERVADOS</span>
                </div>
                
                <div className={styles.Information}>
                    <div>
                        <h5>Nosotros</h5>
                        <ul>
                            { AboutLinks.map((link)=>(
                                <li key={link.id}>
                                    <Link href={`${link.link}`}>{link.name}</Link>
                                </li>
                            ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h5>Tienda</h5>
                        <ul>
                            { AboutLinks.map((link)=>(
                                <li key={link.id}>
                                    <Link href={`${link.link}`}>{link.name}</Link>
                                </li>
                            ))
                            }
                        </ul>
                    </div>

                    <div>
                        <h5>Contacto</h5>
                        <ul>
                            { AboutLinks.map((link)=>(
                                <li key={link.id}>
                                    <Link href={`${link.link}`}>{link.name}</Link>
                                </li>
                            ))
                            }
                        </ul>
                    </div>

                    <div className={styles.social}>
                        <h5>Nuestras redes sociales</h5>
                        <div className={styles.icons}>
                            <a href="https://www.facebook.com/profile.php?id=61550846452286" target='_blank'>
                                <BsFacebook />
                            </a>
                            <a href="https://www.instagram.com/npc.619/" target='_blank'>
                                <BsInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.socialMobile}>
                    <a href="https://www.facebook.com/profile.php?id=61550846452286" target='_blank'>
                        <BsFacebook />
                    </a>
                    <a href="https://www.instagram.com/npc.619/" target='_blank'>
                        <BsInstagram />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
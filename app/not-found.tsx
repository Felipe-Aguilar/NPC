import Header from '@/components/header/Header';
import sytles from './page.module.scss';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
    return ( 

        <>
            <Header />

            <div className={sytles.NotFound}>
                <Image 
                    src={'/imagenes/404.svg'}
                    alt='Error 404, lo sentimos, la página que busca no se encuentra'
                    width={500}
                    height={500}
                />
                <h1>¡Vaya! La página que buscas no existe.</h1>

                <Link href={'/'}>
                    Regresar al inicio
                </Link>
            </div>
        </>

    );
}

export default NotFoundPage;
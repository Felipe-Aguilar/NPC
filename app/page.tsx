import Image from 'next/image'
import styles from './page.module.scss'
import HeaderSticky from '@/components/header/HeaderSticky';
import Header from '../components/header/Header';
import SliderPrincipal from '@/components/sliders/SliderPrincipal';
import Link from 'next/link';
import News from '@/components/news/News';
import NewProducts from '@/components/newProducts/NewProducts';
import NewCollections from '@/components/newCollections/NewCollections';
import SliderMarcas from '@/components/sliders/SliderMarcas';



export default function Home() {
  return (
    <main className={styles.Main}>
      <HeaderSticky />

      <SliderPrincipal />

      <Header />

      <News />

      <NewProducts />

      <div className={styles.Ocasion}>
        <div className={styles.Img}>
          
        </div>

        <div className={styles.Text}>
          <h3>Para la ocasión</h3>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores rerum quae sequi accusamus modi aspernatur officia ab iure ad perferendis.</p>
          <Link href={'/'}>
            Leer más
          </Link>
        </div>
      </div>

      <NewCollections />

      <SliderMarcas />

    </main>
  )
}

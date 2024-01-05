import Image from 'next/image'
import styles from './page.module.scss'
import HeaderSticky from '@/components/header/HeaderSticky';
import Header from '../components/header/Header';
import SliderPrincipal from '@/components/sliders/SliderPrincipal';
import Link from 'next/link';
import News from '@/components/news/News';
import NewProducts from '@/components/newProducts/NewProducts';

export default function Home() {
  return (
    <main className={styles.Main}>
      <HeaderSticky />

      <SliderPrincipal />

      <Header />

      <News />

      <NewProducts />

    </main>
  )
}

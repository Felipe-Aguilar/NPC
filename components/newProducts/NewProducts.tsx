import Image from 'next/image';
import styles from './newProducts.module.scss';
import Link from 'next/link';

import { BsBag, BsHeart } from "react-icons/bs";

const NewProducts = () => {

    const Products = [
        {id: 1, name: 'Playera 1', category: 'Owsla', price: '45', image: ''},
        {id: 2, name: 'Playera 2', category: 'Malaa', price: '45', image: ''},
        {id: 3, name: 'Playera 3', category: 'Malaa', price: '45', image: ''},
        {id: 4, name: 'Playera 4', category: 'Malaa', price: '45', image: ''},
        {id: 5, name: 'Playera 5', category: 'Malaa', price: '45', image: ''},
        {id: 6, name: 'Playera 5', category: 'Malaa', price: '45', image: ''},
        {id: 7, name: 'Playera 5', category: 'Malaa', price: '45', image: ''},
        {id: 8, name: 'Playera 5', category: 'Malaa', price: '45', image: ''},
    ]

    return ( 
        <div className={styles.newProducts}>
            <div className={styles.TitleNews}>
                <span>Colección</span>
                <h2>Productos Destacados</h2>
            </div>

            <div className={styles.Navigation}>
                <button>Todos</button>
                <button>Owsla</button>
                <button>Zomboy</button>
            </div>

            <div className={styles.ProductsGrid}>
                { Products.map((product)=>(

                    <div key={product.id} className={styles.Border}>
                        
                        <div className={styles.ContainerProduct}>

                            <div className={styles.Head}>

                                <div className={styles.ButtonContainer}>
                                    <button><BsHeart /></button>
                                </div>
                            </div>
                            
                            <Link href={'/'}>
                                <Image 
                                    src={'/imagenes/PlayeraDemo.png'}
                                    alt='Playera de EDM'
                                    width={1080}
                                    height={1080}
                                />
                            </Link>

                            <div className={styles.Info}>
                                <Link href={'/'}>
                                    <span>{product.category}</span>                
                                </Link>

                                <Link href={'/'}>
                                    {product.name}
                                </Link>

                                <span>{`$ ${product.price}`}</span>
                            </div>

                            <div className={styles.Bag}>
                                <button>
                                    <BsBag />
                                </button>
                            </div>

                        </div>
                    </div>

                ))
                }
            </div>
        </div>
    );
}

export default NewProducts;
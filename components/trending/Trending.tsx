import { BsBag, BsHeart } from 'react-icons/bs';
import styles from './trending.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const Products = [
    {id: 1, name: 'Playera 1', category: 'Owsla', price: '45', image: ''},
    {id: 2, name: 'Playera 2', category: 'Malaa', price: '45', image: ''},
    {id: 3, name: 'Playera 3', category: 'Malaa', price: '45', image: ''},
    {id: 4, name: 'Playera 4', category: 'Malaa', price: '45', image: ''},
    {id: 5, name: 'Playera 5', category: 'Malaa', price: '45', image: ''},
    {id: 6, name: 'Playera 5', category: 'Malaa', price: '45', image: ''},
]

const Trending = () => {
    return ( 
        <div className={styles.Trending}> 
            <div className={styles.Title}>
                <span>Encuentra nuestras</span>
                <h2>Tendencias ahora</h2>
            </div>

            <div className={`ProductsGrid ${styles.ProductsGrid}`}>
                { Products.map((product)=>(
                    product.id <= 3 && (
                        <div key={product.id} className={`Border ${(product.id % 3) == 0 ? styles.ImageTrend50 : ''}`}>
                            <div className={`ContainerProduct ${styles.ContainerProduct}`}>
                                <div className="Head">
                                    <div className="ButtonContainer">
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
                                <div className={`Info`}>
                                    <Link href={'/'}>
                                        <span>{product.category}</span>                
                                    </Link>

                                    <Link href={'/'}>
                                        {product.name}
                                    </Link>

                                    <span>{`$ ${product.price}`}</span>
                                </div>

                                <div className={`Bag`}>
                                    <button>
                                        <BsBag />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                ))
                }
            </div>
            
            <div className={`ProductsGrid ${styles.ProductsGrid} ${styles.ProductsGridReverse}`}>
                { Products.map((product)=>(
                    product.id > 3 && (
                        <div key={product.id} className={`Border ${(product.id % 4) == 0 ? styles.ImageTrend50 : ''}`}>
                            <div className={`ContainerProduct ${styles.ContainerProduct}`}>
                                <div className="Head">
                                    <div className="ButtonContainer">
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
                                <div className={`Info`}>
                                    <Link href={'/'}>
                                        <span>{product.category}</span>                
                                    </Link>

                                    <Link href={'/'}>
                                        {product.name}
                                    </Link>

                                    <span>{`$ ${product.price}`}</span>
                                </div>

                                <div className={`Bag`}>
                                    <button>
                                        <BsBag />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                ))
                }
            </div>
        </div>
    );
}

export default Trending;
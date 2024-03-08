import styles from './sidebar.module.scss';
import Link from "next/link";
import Image from "next/image";

const RightSidebar = () => {

    const relatedPost = [
        {id:4, title: 'Skrillex en EDC México 2024', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore dolorum facere voluptate debitis maxime cum, deserunt obcaecati expedita nulla?', image: '/imagenes/skrillex-edc-mexico-2024.webp', link: '', date: 'febrero 12, 2024'},
        {id:4, title: 'Skrillex en EDC México 2024', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore dolorum facere voluptate debitis maxime cum, deserunt obcaecati expedita nulla?', image: '/imagenes/skrillex-edc-mexico-2024.webp', link: '', date: 'febrero 12, 2024'},
        {id:4, title: 'Skrillex en EDC México 2024', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore dolorum facere voluptate debitis maxime cum, deserunt obcaecati expedita nulla?', image: '/imagenes/skrillex-edc-mexico-2024.webp', link: '', date: 'febrero 12, 2024'},
    ]

    return ( 
        <div className={styles.Sidebar}>
            <h2>Artículos relacionados</h2>

            <div className={styles.ContainerPosts}>
                { relatedPost.map((post)=>(
                    <div key={post.id} className={styles.Post}>
                        <Link href={post.link}>
                            <Image 
                                src={post.image}
                                width={200}
                                height={200}
                                alt={post.title}
                            />
                        </Link>

                        <div>
                            <span>{post.date}</span>
                            <Link href={post.link}>
                                {post.title}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RightSidebar;
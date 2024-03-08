import styles from './blog.module.scss';
import Image from "next/image";
import Link from "next/link";

const Blog = () => {

    const blogs = [
        {id:1, title: 'Skrillex en EDC México 2024', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore dolorum facere voluptate debitis maxime cum, deserunt obcaecati expedita nulla?', image: '/imagenes/skrillex-edc-mexico-2024.webp', link: 'blog/skrillex-edc-mexico-2024', date: 'febrero 12, 2024'},
        {id:2, title: 'Skrillex en EDC México 2024', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore dolorum facere voluptate debitis maxime cum, deserunt obcaecati expedita nulla?', image: '/imagenes/skrillex-edc-mexico-2024.webp', link: 'blog/skrillex-edc-mexico-2024', date: 'febrero 12, 2024'},
        {id:3, title: 'Skrillex en EDC México 2024', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore dolorum facere voluptate debitis maxime cum, deserunt obcaecati expedita nulla?', image: '/imagenes/skrillex-edc-mexico-2024.webp', link: 'blog/skrillex-edc-mexico-2024', date: 'febrero 12, 2024'},
        {id:4, title: 'Skrillex en EDC México 2024', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore dolorum facere voluptate debitis maxime cum, deserunt obcaecati expedita nulla?', image: '/imagenes/skrillex-edc-mexico-2024.webp', link: 'blog/skrillex-edc-mexico-2024', date: 'febrero 12, 2024'},
    ]

    return ( 

        <div className={styles.Blogs}>
            { blogs.map((blog)=>(
                <div key={blog.id} className={styles.Container}>
                    <Link href={blog.link}>
                        <Image 
                            src={blog.image}
                            width={1000}
                            height={1000}
                            alt={blog.title}
                        />
                    </Link>
                    <div className={styles.Information}>
                        <span>{blog.date}</span>
                        <Link href={blog.link}>
                            {blog.title}
                        </Link>
                        <p>{blog.description}</p>

                        <Link href={blog.link} className={styles.Button}>
                            Leer más
                        </Link>
                    </div>
                </div>
            ))
            }
        </div>
    
    );
}

export default Blog;
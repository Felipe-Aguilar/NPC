import Image from 'next/image';
import styles from '../post.module.scss';

const Post = () => {

    const Post = {
        id:1, 
        title: 'Skrillex en EDC México 2024', 
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam inventore dolorum facere voluptate debitis maxime cum, deserunt obcaecati expedita nulla?', 
        image: '/imagenes/skrillex-edc-mexico-2024.webp',
        date: 'febrero 12, 2024'
    }

    return ( 
        <div className={styles.Post}>
            <Image 
                src={Post.image}
                width={900}
                height={900}
                alt={Post.title}
            />

            <div className={styles.Content}>
                <span>{Post.date}</span>
                <h1>{Post.title}</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum soluta doloribus, corporis ducimus deserunt fugit dignissimos ipsum sed a assumenda ipsa qui fuga voluptatem, ipsam harum architecto unde quis, necessitatibus itaque rem. Aperiam odit aliquam, quas voluptates delectus aspernatur, a animi quidem consequuntur vel ratione culpa officiis dolor blanditiis exercitationem sint voluptatibus harum quam saepe maxime nulla illo consequatur adipisci. Minus exercitationem ea sapiente officia distinctio ducimus quae ratione sed?</p>

                <h2>Title article 2</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus adipisci ullam aliquam ducimus, quae perspiciatis deserunt qui expedita optio. Blanditiis, similique iusto repudiandae ducimus amet libero modi rem neque optio deserunt sequi, id minus ab ex quos voluptas laboriosam nostrum voluptates! Deserunt quod praesentium voluptatem minima maxime totam veritatis expedita libero. Aspernatur corrupti consequatur id odio excepturi minus maiores eos, omnis autem exercitationem tempora ipsam delectus dolore quaerat, quasi blanditiis a magnam dicta sequi eum adipisci quis, debitis explicabo placeat. Obcaecati sapiente quasi animi suscipit asperiores aliquam sint quae cumque, architecto maxime! Deserunt rerum natus ipsa dolor deleniti reprehenderit eos unde ab, nemo illo nisi dicta vitae excepturi inventore maiores sequi ex! Nihil, ut sed autem suscipit inventore at!</p>

                <Image 
                    src={Post.image}
                    width={900}
                    height={900}
                    alt={Post.title}
                />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus adipisci ullam aliquam ducimus, quae perspiciatis deserunt qui expedita optio. Blanditiis, similique iusto repudiandae ducimus amet libero modi rem neque optio deserunt sequi, id minus ab ex quos voluptas laboriosam nostrum voluptates! Deserunt quod praesentium voluptatem minima maxime totam veritatis expedita libero. Aspernatur corrupti consequatur id odio excepturi minus maiores eos, omnis autem exercitationem tempora ipsam delectus dolore quaerat, quasi blanditiis a magnam dicta sequi eum adipisci quis, debitis explicabo placeat. Obcaecati sapiente quasi animi suscipit asperiores aliquam sint quae cumque, architecto maxime! Deserunt rerum natus ipsa dolor deleniti reprehenderit eos unde ab, nemo illo nisi dicta vitae excepturi inventore maiores sequi ex! Nihil, ut sed autem suscipit inventore at!</p>
            </div>
        </div>
    );
}

export default Post;
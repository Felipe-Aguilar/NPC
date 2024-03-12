import styles from './contact.module.scss';
import { BsEnvelope, BsWhatsapp } from 'react-icons/bs';



export const metadata = {
    title: 'Contacto - NPC',
    description: 'Contacto - NPC',
};

const ContactPage = () => {

    const contactType = [
        {id: 1, description: 'email@contact.com', icon: <BsEnvelope />, link: 'mailto:email@contact.com'},
        {id: 2, description: '55-555-555', icon: <BsWhatsapp />, link: 'tel:55-555-555'},
    ]

    return ( 
        <div className={styles.ContactPage}>

            <div className={styles.Title}>
                <h1>Contáctanos</h1>
                <div className={styles.Filter}>
                </div>
            </div>

            <div className={styles.Body}>
                <div className={styles.Form}>

                    <div className={styles.Info}>
                        <h2>Get in touch with us</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum magni rerum est sunt adipisci culpa?
                        </p>

                        <div className={styles.Media}>
                            { contactType.map((contact)=>(
                                <div key={contact.id}>
                                    {contact.icon}
                                    <a href={contact.link}>
                                        {contact.description}
                                    </a>
                                </div>
                            ))
                            }
                        </div>
                    </div>

                    <div className={styles.ContactForm}>
                        <form>
                            <div>
                                <input type="text" placeholder='Nombre' maxLength={40}/>
                                <input type="email" placeholder='email'/>
                            </div>

                            <textarea placeholder='Mensaje'></textarea>

                            <button type='submit'>
                                Enviar mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ContactPage;
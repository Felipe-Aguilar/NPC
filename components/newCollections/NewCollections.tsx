import styles from './newCollections.module.scss';

const NewCollections = () => {
    return ( 
        <div className={styles.NewCollections}>
            <div className={styles.TitleNews}>
                <span>Explora más novedades</span>
                <h2>Nuestras colecciones</h2>
            </div>

            <div className={styles.Collections}>
                <div className={styles.Collection}>
                    <div className={`${styles.Image} ${styles.First}`}>          
                        <div className={styles.Text}>
                            <span>Colección</span>
                            <h4>Eric Prydz</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.Collection}>
                    <div className={styles.Overlay}>
                        <div className={`${styles.Image} ${styles.Second}`}>          
                            <div className={styles.Text}>
                                <span>Colección</span>
                                <h4>EDC México 2024</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Collection}>
                    <div className={`${styles.Image} ${styles.Third}`}>          
                        <div className={styles.Text}>
                            <span>Colección</span>
                            <h4>Knife Party</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewCollections;
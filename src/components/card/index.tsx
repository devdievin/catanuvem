import styles from './Card.module.css';

interface CardProps {
    titleHeader: string
    location: string | null
    carrousel: boolean
    children: JSX.Element
}

const Card = ({ titleHeader, location, carrousel, children }: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h5 className={styles.titleHeader}>{titleHeader} <span>{location}</span></h5>
            </div>

            <div className={styles.cardBody}>
                {children}
            </div>
            {carrousel && <div className={styles.helpLabel}>
                <p>&larr; Arrasta &rarr;</p>
            </div>
            }
        </div>
    );
}

interface CardComponentProps {
    id: string
    children: JSX.Element
}

const CardComponent = ({ id, children }: CardComponentProps) => {
    return (
        <div className={styles.card} id={id}>
            <div className={styles.cardContainer}>
                {children}
            </div>
        </div>
    );
}

export { Card, CardComponent };
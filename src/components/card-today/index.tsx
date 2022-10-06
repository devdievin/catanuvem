import styles from './Card.module.css';

const CardToday = ({ children, data }: any) => {
    return (
        <div className={styles.test}>
            {data.forEach((element: any) => {
                // console.log("ELEMENT2:", element.period);
                <div>
                    <span>{element.period}</span>
                </div>
            })}
            {children}
        </div>
    );
}

export default CardToday;
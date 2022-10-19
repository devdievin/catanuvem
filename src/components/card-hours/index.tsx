import styles from './CardHours.module.css';

const CardHours = ({ data }: any) => {
    return (
        <div className={styles.mainCards}>
            {data.map((element: any, index: number) => (
                <div className={styles.card} key={index}>
                    <div className={styles.cardContent}>
                        <p>{element.hour}</p>
                        <p>{element.temperature}</p>
                        <img className={'cardIconWeather'} src={element.icon.src} alt={element.icon.name} width={64} height={64} />
                        <p>
                            <span>
                                <img className='me-1' src="/icons/icon-cloud-rain.svg" alt="ícone previsão de chuva" width={16} height={16} />
                            </span>
                            {element.precipitation}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardHours;
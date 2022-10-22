import { Card } from '../card';

import styles from './CardToday.module.css';

const CardToday = ({ location, data }: any) => {
    return (
        <Card titleHeader={'O tempo para hoje em'} location={location} carrousel={true}>
            <div className={styles.cardContainer}>
                {data.map((element: any, index: number) => (
                    <div className={styles.cardContent} key={index}>
                        <p>{element.period}</p>
                        <p>{element.temperature}</p>
                        <img className={`cardIconWeather`} src={element.icon.src} alt={element.icon.name} title={element.icon.name} width={64} height={64} />
                        <p>
                            <span>
                                <img className='me-1' src="/icons/icon-cloud-rain.svg" alt="ícone previsão de chuva" width={16} height={16} />
                            </span>
                            {element.precipitation}
                        </p>
                    </div>
                ))}
            </div>
        </Card>
    );
}

export default CardToday;
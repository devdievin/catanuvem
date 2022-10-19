import { Card } from '../card';

import styles from './CardDays.module.css';

const CardDays = ({ location, data }: any) => {
    return (
        <Card titleHeader={'A previsão dos próximos 5 dias em'} location={location} carrousel={true}>
            <div className={styles.cardContainer}>
                {data.map((element: any, index: number) => (
                    <div className={styles.cardContent} key={index}>
                        <p>{element.day}</p>
                        <p>{element.max}</p>
                        <p>{element.min}</p>
                        <img className={'cardIconWeather'} src={element.icon.src} alt={element.icon.name} width={64} height={64} />
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

export default CardDays;
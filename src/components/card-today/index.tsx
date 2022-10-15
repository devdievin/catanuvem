import React from 'react';
import { Card } from 'react-bootstrap';

import styles from './CardToday.module.css';

const CardToday = ({ location, data }: any) => {
    return (
        <Card>
            <div className={'card-header-custom'}>
                <h5 className={'titleCard'}>O tempo para hoje em <span>{location}</span></h5>
            </div>
            <Card.Body className={'card-body-custom'} id={styles.cardToday}>
                <div className={styles.cardContainer}>
                    {data.map((element: any, index: number) => (
                        <div className={styles.cardContent} key={index}>
                            <p>{element.period}</p>
                            <p>{element.temperature}</p>
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
            </Card.Body>
        </Card>
    );
}

export default CardToday;
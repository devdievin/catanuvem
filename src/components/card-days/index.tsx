import React from 'react';
import { Card } from 'react-bootstrap';

import styles from './CardDays.module.css';

const CardDays = ({ location, data }: any) => {
    return (
        <Card id={styles.cardDays}>
            <div className='card-header-custom'>
                <h5 className={'titleCard'}>A previsão dos próximos 5 dias em <span>{location}</span></h5>
            </div>
            <Card.Body className='card-body-custom' id={styles.cardDays}>
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
            </Card.Body>
        </Card>
    );
}

export default CardDays;
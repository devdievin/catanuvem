import { Col, Row } from 'react-bootstrap';

import styles from './CardInfo.module.css';

const CardInfo = ({ data }: any) => {
    return (
        <div className={styles.cardInfo}>
            <Row>
                <Col className={styles.colItem}>
                    <div className='text-center'>
                        <div className={styles.iconMobile}>
                            <img src="/icons/icon-rain-cloud-weather.svg" alt="" width={35} height={35} />
                        </div>
                        <p className={styles.infoLabel}>Probabilidade de chuva</p>
                        <p>{data.precipitation}</p>
                    </div>
                </Col>

                <Col className={styles.colItem}>
                    <div className='text-center'>
                        <div className={styles.iconMobile}>
                            <img src="/icons/icon-wind.svg" alt="" width={35} height={35} />
                        </div>
                        <p className={styles.infoLabel}>Vento</p>
                        <p>{data.wind}</p>
                    </div>
                </Col>

                <Col className={styles.colItem}>
                    <div className='text-center'>
                        <div className={styles.iconMobile}>
                            <img src="/icons/icon-humidity.svg" alt="" width={35} height={35} />
                        </div>
                        <p className={styles.infoLabel}>Umidade</p>
                        <p>{data.humidity}</p>
                    </div>
                </Col>

                <Col className={styles.colItem}>
                    <div className='text-center'>
                        <div className={styles.iconMobile}>
                            <img src="/icons/icon-temperature-feels-like.svg" alt="" width={35} height={35} />
                        </div>
                        <p className={styles.infoLabel}>Sensação térmica</p>
                        <p>{data.thermalSensation}</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default CardInfo;
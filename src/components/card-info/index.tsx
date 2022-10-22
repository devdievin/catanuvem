import { Col, Row } from 'react-bootstrap';

import styles from './CardInfo.module.css';

const CardInfo = ({ data }: any) => {
    return (
        <div className={styles.cardInfo}>
            <Row>
                <Col className={styles.colItem}>
                    <div className='text-center'>
                        <div className={styles.iconMobile}>
                            <img src="/icons/icon-rain-cloud-weather.svg" alt="ícone chuva" title={'Probabilidade de chuva'} width={35} height={35} />
                        </div>
                        <p className={styles.infoLabel}>Probabilidade de chuva</p>
                        <p>{data.precipitation}</p>
                    </div>
                </Col>

                <Col className={styles.colItem}>
                    <div className='text-center'>
                        <div className={styles.iconMobile}>
                            <img src="/icons/icon-wind.svg" alt="ícone vento" title={'Vento'} width={35} height={35} />
                        </div>
                        <p className={styles.infoLabel}>Vento</p>
                        <p>{data.wind}</p>
                    </div>
                </Col>

                <Col className={styles.colItem}>
                    <div className='text-center'>
                        <div className={styles.iconMobile}>
                            <img src="/icons/icon-humidity.svg" alt="Umidade" title={'Umidade do ar'} width={35} height={35} />
                        </div>
                        <p className={styles.infoLabel}>Umidade</p>
                        <p>{data.humidity}</p>
                    </div>
                </Col>

                <Col className={styles.colItem}>
                    <div className='text-center'>
                        <div className={styles.iconMobile}>
                            <img src="/icons/icon-temperature-feels-like.svg" alt="ícone sensação térmica" title={'Sensação térmica'} width={35} height={35} />
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
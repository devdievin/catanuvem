import { Card, Col, Row } from 'react-bootstrap';
import styles from './CardDetails.module.css';

const CardDetails = ({ data }: any) => {
    return (
        <Card>
            <Card.Body id={styles.cardDetails}>
                <div className={styles.titleWrapper}>
                    <h5 className={'titleCard'}>Detalhes do clima hoje em <span>{data.location}</span></h5>
                    <h1>{data.temperature}</h1>
                </div>

                <Row className={styles.rowDetails}>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span >Condição:</span>
                            <span>{data.condition}</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span >Umidade:</span>
                            <span>{data.humidity}</span>
                        </div>
                    </Col>
                </Row>

                <Row className={styles.rowDetails}>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span >Probabilidade de chuva:</span>
                            <span>{data.precipitation}</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span>Visibilidade:</span>
                            <span>{data.visibility}</span>
                        </div>
                    </Col>
                </Row>

                <Row className={styles.rowDetails}>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span >Máx./Mín:</span>
                            {data.climateVariation && <span>{data.climateVariation.max}/{data.climateVariation.min}</span>}
                        </div>
                    </Col>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span>Fase da lua:</span>
                            <span>{data.moon}</span>
                        </div>
                    </Col>
                </Row>

                <Row className={styles.rowDetails}>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span >Sensação térmica:</span>
                            <span>{data.thermalSensation}</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span>Ponto de Orvalho:</span>
                            <span>{data.dewPoint}</span>
                        </div>
                    </Col>
                </Row>

                <Row className={styles.rowDetails}>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span >Vento:</span>
                            <span>{data.wind}</span>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span>Qualidade do ar:</span>
                            {data.airQuality && <span>{data.airQuality.quality}</span>}
                        </div>
                    </Col>
                </Row>

                <Row className={styles.rowDetails}>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span>Nascer do sol:</span>
                            {data.sun && <span>{data.sun.sunrise}</span>}
                        </div>
                    </Col>
                    <Col xs={12} md={6} className={`${styles.cardItemCol}`}>
                        <div className={styles.itemWrapper}>
                            <span>Pôr do sol:</span>
                            {data.sun && <span>{data.sun.sunset}</span>}
                        </div>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    );
}

export default CardDetails;
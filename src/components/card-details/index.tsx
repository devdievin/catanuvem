import { Card, Col, Row } from 'react-bootstrap';
import styles from './CardDetails.module.css';

const CardDetails = ({ data }: any) => {
    return (
        <Card>
            <Card.Body id={styles.cardDetails}>
                <h5 className={'titleCard'}>Detalhes do clima hoje em <span>{data.location}</span></h5>
                <h1>{data.temperature}</h1>

                <Row className={styles.rowDetails}>
                    <Col className={`${styles.cardItemCol} me-2`}>
                        <span >Condição:</span>
                        <span>{data.condition}</span>
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                        <span>Ponto de Orvalho:</span>
                        <span>{data.dewPoint}</span>
                    </Col>
                </Row>

                <Row className={styles.rowDetails}>
                    <Col className={`${styles.cardItemCol} me-2`}>
                        <span >Probabilidade de chuva:</span>
                        <span>{data.rainProbability}</span>
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                        <span>Visibilidade:</span>
                        <span>{data.visibility}</span>
                    </Col>
                </Row>

                <Row className={styles.rowDetails}>
                    <Col className={`${styles.cardItemCol} me-2`}>
                        <span >Máx./Mín:</span>
                        {data.climateVariation && <span>{data.climateVariation.max}/{data.climateVariation.min}</span>}
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                        <span>Fase da lua:</span>
                        <span>{data.moon}</span>
                    </Col>
                </Row>

                <Row className={styles.rowDetails}>
                    <Col className={`${styles.cardItemCol} me-2`}>
                        <span >Sensação térmica:</span>
                        <span>{data.thermalSensation}</span>
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                        <span>Qualidade do ar:</span>
                        {data.airQuality && <span>{data.airQuality.quality}</span>}
                    </Col>
                </Row>

                <Row className={styles.rowDetails}>
                    <Col className={`${styles.cardItemCol} me-2`}>
                        <span >Vento:</span>
                        <span>{data.wind}</span>
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                        <span>Nascer do sol:</span>
                        {data.sun && <span>{data.sun.sunrise}</span>}
                    </Col>
                </Row>

                <Row className={styles.rowDetails}>
                    <Col className={`${styles.cardItemCol} me-2`}>
                        <span >Umidade:</span>
                        <span>{data.humidity}</span>
                    </Col>
                    <Col className={`${styles.cardItemCol} ms-2`}>
                        <span>Pôr do sol:</span>
                        {data.sun && <span>{data.sun.sunset}</span>}
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    );
}

export default CardDetails;
import { useEffect } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import SectionMain from '../../components/section-main';

import styles from './Help.module.css';

const Help = (props: any) => {

    useEffect(() => {

    }, []);

    return (
        <div>
            <Header />
            <SectionMain>
                <div className={styles.containerImg}>
                    <img src={'/icons/icon-rain-cloud-weather.svg'} alt={'test'} title={'probabilidade de chuva'} className={styles.iconWeather} />
                </div>
            </SectionMain>
            <Footer />
        </div>
    );
}

export default Help;
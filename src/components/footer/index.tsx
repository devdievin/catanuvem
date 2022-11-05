import { globals } from '../../utils/global_variables';
import styles from './Footer.module.css';

type FooterProps = {
    background: string
}

const Footer = ({ background }: FooterProps) => {
    let bgColor = background === 'transparent' ? styles.footerTransparent : styles.footerColorful;

    const returnCurrentYear = () => {
        const currentDate = new Date();
        return currentDate.getFullYear() ? currentDate.getFullYear() : '2022';
    }

    return (
        <div className={`${styles.footer} ${bgColor}`}>
            <div className={styles.footer_text}>
                <p>© Catanuvem <span>{returnCurrentYear()}</span></p>
                <p className={styles.madeby}>Feito por <a href={globals.URL_PORTFOLIO}>Dievin</a></p>
            </div>
        </div>
    );
}

export default Footer;
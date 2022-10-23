import { globals } from '../../utils/global_variables';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_text}>
                <p>© Catanuvem 2022</p>
                <p className={styles.madeby}>Feito por <a href={globals.URL_PORTFOLIO}>Dievin</a></p>
            </div>
        </div>
    );
}

export default Footer;
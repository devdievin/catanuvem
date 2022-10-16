import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_text}>
                <p>© Catanuvem 2022</p>
                <p>Feito por Dievin</p>
            </div>
        </div>
    );
}

export default Footer;
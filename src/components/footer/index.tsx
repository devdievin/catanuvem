import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className='mx-auto w-100'>
                <p>© Catanuvem 2022</p>
                <p>Feito por Dievin</p>
            </div>
        </div>
    );
}

export default Footer;
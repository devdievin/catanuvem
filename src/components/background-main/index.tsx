import styles from './Background.module.css';

const SectionBackgroundMain = ({ children }: any) => {
    return (
        <div className={styles.bgMain}>
            {children}
        </div>
    );
}

export default SectionBackgroundMain;
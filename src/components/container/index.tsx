import styles from './Container.module.css';

interface ContainerProps {
    children: JSX.Element
}

const ContainerCustom = ({ children }: ContainerProps) => (
    <div className={styles.backgroundContainer}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
);

export default ContainerCustom;
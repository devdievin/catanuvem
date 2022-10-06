import React from 'react';

import styles from './Container.module.css';

const ContainerCustom = ({ children }: any) => (
    <div className={styles.container}>
        {children}
    </div>
);

export default ContainerCustom;
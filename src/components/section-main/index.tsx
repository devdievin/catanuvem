import React from 'react';

import styles from './SectionMain.module.css';

const SectionMain = ({ children }: any) => {
    return (
        <section className={styles.sectionMain}>
            <div className={styles.contentMain}>
                {children}
            </div>
        </section>
    );
}

export default SectionMain;
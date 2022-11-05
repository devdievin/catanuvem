import React from 'react';

import styles from './SectionMain.module.css';

type SectionMainProps = {
    screenType: string
    children: any
}

const SectionMain = ({ screenType, children }: SectionMainProps) => {
    let screenContent = (screenType === 'fullscreen') ? styles.contentFullscreen : styles.contentFilledScreen;
    return (
        <div className={screenContent}>
            {children}
        </div>
    );
}

export default SectionMain;
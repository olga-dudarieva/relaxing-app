import React from 'react';
import styles from './index.module.scss'
import { ReactComponent as Logo } from './logo.svg'

const Brand = () => {
    return (
        <div className={styles.brand}>
            <Logo/>
            <div className={styles.brandName}>CineMuse</div>
        </div>
    );
};

export default Brand;
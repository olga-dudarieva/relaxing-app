import React from 'react';
import {ReactComponent as Logo} from './logo.svg'
import styles from './index.module.scss'

const Brand = () => {
    return (
        <div className={styles.brand}>
            <Logo/>
            <div className={styles.brandName}>CineMuse</div>
        </div>
    );
};

export default Brand;
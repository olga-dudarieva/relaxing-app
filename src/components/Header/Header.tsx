import React from 'react';
import { useTranslation } from 'react-i18next';
import LangMenu from "../LangMenu";
import styles from './index.module.scss'
import Brand from "../Brand";

const Header = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.header}>
            <Brand/>
            <LangMenu/>
        </div>
    );
};

export default Header;
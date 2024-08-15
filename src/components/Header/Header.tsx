import React from 'react';
import '../../i18n/config';
import LangMenu from "../LangMenu";
import Brand from "../Brand";
import TopMenu from '../TopMenu';
import style from './index.module.scss';

const Header = () => {

    return (
        <div className={style.header}>
            <Brand/>
            <nav className={style.nav}>
                <TopMenu/>
                <LangMenu/>
            </nav>
        </div>
    );
};

export default Header;
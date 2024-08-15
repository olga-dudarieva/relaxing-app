import React from 'react';
import { NavLink } from "react-router-dom";
import style from './index.module.scss'

const TopMenu = () => {
    return (
        <ul className={style.topMenu}>
            <li>
                <NavLink
                    to="/movie"
                    className={({ isActive, isPending }) =>
                        isActive ? "active" : ""
                    }
                >
                    Movie</NavLink></li>
            <li>
                <NavLink
                    to='/music'
                    className={({ isActive, isPending }) =>
                        isActive ? "active" : ""
                    }>
                    Music</NavLink></li>
        </ul>
    );
};

export default TopMenu;
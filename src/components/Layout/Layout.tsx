import React from 'react';
import styles from './index.module.scss';
import Home from "../../pages/Home/Home";
import {Outlet} from "react-router-dom";

function Layout() {
  return (
    <div className={styles.Container}>
        <div className="App-header">Layout</div>
        <Outlet />
    </div>
  );
}

export default Layout;

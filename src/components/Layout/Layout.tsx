import React from 'react';
import styles from './index.module.scss';
import {Outlet} from "react-router-dom";
import Header from "../Header";

function Layout() {
  return (
    <div className={styles.Container}>
        <div className="App-header">Layout</div>
        <Header/>
        jhgbjhghjbkjhkj

        <Outlet />
    </div>
  );
}

export default Layout;

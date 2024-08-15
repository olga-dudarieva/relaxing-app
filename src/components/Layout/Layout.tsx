import React from 'react';
import styles from './index.module.scss';
import {Outlet} from "react-router-dom";
import Header from "../Header";
import {Trans, useTranslation} from "react-i18next";

function Layout() {
    const { t } = useTranslation();
    const count = 3;

  return (
      <div className={styles.container}>
          <Header/>
          <p>{t('title', {name: 'John'})}</p>
          <p>{t('description.part1')}</p>
          <p>{t('description.part2')}</p>
          <Trans i18nKey="userMessagesUnread" count={count}>
              You have {{count}} unread message.
          </Trans>

          <Outlet/>
      </div>
  );
}

export default Layout;

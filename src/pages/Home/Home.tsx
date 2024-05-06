import React from 'react';
import {Trans} from "react-i18next";
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    const count = 3;

    return (
        <div>
            Home
            <p>{t('title', {name: 'John'})}</p>
            <p>{t('description.part1')}</p>
            <p>{t('description.part2')}</p>
            <Trans i18nKey="userMessagesUnread" count={count}>
                You have {{count}} unread message.
            </Trans>

        </div>
    );
};

export default Home;
import React from 'react';
import '../../i18n/config';
import { useTranslation, Trans } from 'react-i18next';
import i18next from "i18next";
import {LOCALS} from "../../i18n/constans";
const Header = () => {
    const { t } = useTranslation();
    const count = 3;

    return (
        <div>
            <p>{t('title', {name: 'John'})}</p>
            <p>{t('description.part1')}</p>
            <p>{t('description.part2')}</p>
            <Trans i18nKey="userMessagesUnread" count={count}>
                You have {{count}} unread message.
            </Trans>
            <button disabled={i18next.language === LOCALS.EN} onClick={() => i18next.changeLanguage(LOCALS.EN)}>En</button>
            <button disabled={i18next.language === LOCALS.UA} onClick={() => i18next.changeLanguage(LOCALS.UA)}>Ua</button>
        </div>
    );
};

export default Header;
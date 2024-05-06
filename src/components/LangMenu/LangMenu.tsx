import React from 'react';
import i18next from "i18next";
import {LOCALS} from "../../i18n/constans";

const LangMenu = () => {
    return (
        <div>
            <button disabled={i18next.language === LOCALS.EN} onClick={() => i18next.changeLanguage(LOCALS.EN)}>En
            </button>
            <button disabled={i18next.language === LOCALS.UA} onClick={() => i18next.changeLanguage(LOCALS.UA)}>Ua
            </button>

        </div>
    );
};

export default LangMenu;
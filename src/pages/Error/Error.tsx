import { useRouteError } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function ErrorPage() {
    const { t } = useTranslation();

    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>{t('oops')}</h1>
            <p>{t('errorPageMessage')}</p>
        </div>
    );
}

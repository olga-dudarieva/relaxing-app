import { useRouteError } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import style from './index.module.scss'

type RouteError = {
    statusText?: string,
    message?: string,
}
export default function ErrorPage() {
    const { t } = useTranslation('layout');

    const error = useRouteError() as RouteError | null

    return (
        <div id="error-page" className={style.ErrorPage}>
            <h1>{t('oops')}</h1>
            <p>{t('errorPageMessage')}</p>
            <i>{error?.statusText || error?.message}</i>
        </div>
    );
}

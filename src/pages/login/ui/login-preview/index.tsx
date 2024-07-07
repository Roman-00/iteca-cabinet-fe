import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useLoginStore } from '@/pages/login/model/useLoginStore.ts';
import { Button } from '@/shared/ui/button';
import ILogo from '@/shared/assets/images/img-logo.png';

import s from './login-preview.module.scss';

export const LoginPreview: FC = () => {
    const { t } = useTranslation();

    const showLoginForm = useLoginStore((state) => state.showLoginForm);

    return (
        <div className={s.loginPreview}>
            <div className={s.loginPreviewLogo}>
                <img
                    src={ILogo}
                    alt=""
                />
            </div>

            <p className={s.loginPreviewText}>
                { t('login_page.preview.text') }
            </p>

            <Button
                type={'button'}
                onClick={showLoginForm}
            >
                { t('ui.continue') }
            </Button>
        </div>
    );
};

import React, { FC, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';

import s from './login-form.module.scss';

export const LoginForm: FC = () => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    const { t } = useTranslation();

    /**
     * Обработчик события на форме.
     *
     * @param {FormEvent<HTMLFormElement>} e
     */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <form
            className={s.loginForm}
            onChange={handleSubmit}
        >
            <h2 className={s.loginFormTitle}>
                { t('login_page.form.title') }
            </h2>

            <Input
                type={'text'}
                name={'login-form-email'}
                value={email}
                className={s.loginFormEmail}
                placeholder={t('login_page.form.email.placeholder')}
                onChange={setEmail}
            />

            <Input
                type={'password'}
                name={'login-form-password'}
                value={password}
                className={s.loginFormPassword}
                placeholder={t('login_page.form.password.placeholder')}
                onChange={setPassword}
            />

            <Button
                type={'submit'}
            >
                { t('ui.login') }
            </Button>
        </form>
    );
};

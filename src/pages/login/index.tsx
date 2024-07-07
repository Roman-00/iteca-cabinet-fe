import { FC } from 'react';
import { useLoginStore } from '@/pages/login/model/useLoginStore.ts';
import { LoginPreview } from '@/pages/login/ui/login-preview';
import { LoginForm } from '@/pages/login/ui/login-form';

import s from './login.module.scss';

const LoginPage: FC = () => {
    const isLoginFormVisible = useLoginStore((state) => state.isLoginFormVisible);

    return (
        <div className={s.loginPage}>
            {isLoginFormVisible
                ? <LoginForm />
                : <LoginPreview />
            }
        </div>
    );
};

export default LoginPage;

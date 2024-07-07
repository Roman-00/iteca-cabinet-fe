import { FC } from 'react';

import s from './layouts-default.module.scss';

const LayoutDefault: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className={s.layoutsDefault}>
            <main className={s.layoutsDefaultContent}>
                { children }
            </main>
        </div>
    );
};

export default LayoutDefault;

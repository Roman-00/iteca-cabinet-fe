import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/app/i18n';
import App from '@/app/App.tsx';

import '@/app/styles/common.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

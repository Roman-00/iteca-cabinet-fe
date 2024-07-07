import { Navigate } from 'react-router-dom';
import { authCheck } from '@/app/helpers/auth.ts';

/**
 * Хэлпер для установки приватных роутов.
 */
export function PrivateRoute({ children }: { children: React.ReactNode }) {
    if (!authCheck()) {
        return <Navigate to="/login" />;
    }

    return children;
}

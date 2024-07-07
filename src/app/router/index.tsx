import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from '@/app/router/routes.tsx';
import { PrivateRoute } from '@/app/helpers/router.tsx';

const AppRouter: FC = () => {
    return (
        <Routes>
            {routes.map((route, index) => {
                if (!route.isProtected) {
                    return  <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />;
                }

                return <Route
                    key={index}
                    path={route.path}
                    element={<PrivateRoute>{ route.element }</PrivateRoute>}
                />;
            })}
        </Routes>
    );
};

export default AppRouter;

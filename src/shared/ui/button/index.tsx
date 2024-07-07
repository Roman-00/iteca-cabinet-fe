import { FC } from 'react';
import cn from 'classnames';

import s from './button.module.scss';

interface ButtonPropsType {
    type: 'button' | 'submit' | 'reset';
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button: FC<ButtonPropsType> = ({ type, className, children, onClick}) => {
    return (
        <button
            type={type}
            className={cn(s.button, className)}
            onClick={onClick}
        >
            { children }
        </button>
    );
};

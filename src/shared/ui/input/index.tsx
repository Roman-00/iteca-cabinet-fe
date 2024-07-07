import React, { ChangeEvent, FC } from 'react';
import cn from 'classnames';
import { Icons } from '@/shared/ui/icons';

import s from './input.module.scss';

interface InputPropsType {
    type: 'text' | 'email' | 'password';
    name: string;
    value: string;
    className?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}

export const Input: FC<InputPropsType> = ({ type, name, value, className, placeholder, onChange}) => {
    const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false);

    /**
     * Показать/Скрыть пароль.
     */
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    /**
     * Обновить значения.
     *
     * @param {string} value
     */
    const updateValue = (value: string) => {
        if (!onChange) return;

        onChange(value);
    };

    /**
     * Обработка ввода.
     *
     * @param {ChangeEvent<HTMLInputElement>} e
     */
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement | null;

        if (target === null || target.value === value) {
            return;
        }

        updateValue(target.value);
    };

    return (
        <div className={cn(s.input, className)}>
            <label
                htmlFor={name}
                className={s.inputWrap}
            >
                <input
                    id={name}
                    type={isShowPassword ? 'text' : type }
                    value={value}
                    placeholder={placeholder}
                    className={s.inputField}
                    onChange={handleInput}
                />

                {type === 'password' && (
                    <span
                        className={s.inputActionBox}
                        onClick={toggleShowPassword}
                    >
                        {isShowPassword
                            ? <Icons name={'icon-eye-off'} />
                            : <Icons name={'icon-eye'} />
                        }
                    </span>
                )}
            </label>
        </div>
    );
};

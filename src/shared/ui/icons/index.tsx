import { FC } from 'react';
import IEye from '@/shared/assets/icons/icon-eye.svg?react';
import IEyeOff from '@/shared/assets/icons/icon-eye-off.svg?react';

interface IconsPropsType {
    name: string;
}

export const Icons: FC<IconsPropsType> = ({ name}) => {
    switch (name) {
        case 'icon-eye':
            return <IEye />;
        case 'icon-eye-off':
            return <IEyeOff />;
    }
};

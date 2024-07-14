import Cookies from 'js-cookie';
import { TOKEN_KEY } from '@/config.ts';

/**
 * Проверка авторизации.
 *
 * @returns {boolean}
 */
export const authCheck = () => !!Cookies.get(TOKEN_KEY);

/**
 * Получить токен авторизации.
 *
 * @returns {string}
 */
export const getToken = () => {
    return Cookies.get(TOKEN_KEY);
};

/**
 * Установить логин авторизации.
 *
 * @param {string} token - токен, полученный от сервера
 */
export const login = (token: string) => {
    Cookies.set(TOKEN_KEY, token);
};

/**
 * Выйти и удалить токен авторизации.
 */
export const logout = () => Cookies.remove(TOKEN_KEY);

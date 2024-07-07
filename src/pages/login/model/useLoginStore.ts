import { create } from 'zustand';

interface UseLoginStoreState {
    isLoginFormVisible: boolean;
    showLoginForm: () => void;
}

/**
 * Store для страницы Login.
 */
export const useLoginStore = create<UseLoginStoreState>((set) => ({
    isLoginFormVisible: false,

    /**
     * Перейти к форме логина.
     */
    showLoginForm: () => set({ isLoginFormVisible: true }),
}));

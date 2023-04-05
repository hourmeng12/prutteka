import create from 'zustand';
import { combine } from 'zustand/middleware';
import { auth } from 'firebase-config';

export const useTokenStore = create(
  combine(
    {
      token: '',
    },
    (set) => ({
      setToken: (token: string) => {
        set({ token });
      },
      clearToken: () => {
        set({ token: '' });
      },
    })
  )
);

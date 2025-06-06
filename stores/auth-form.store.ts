import { create } from "zustand";

interface IAuthFormStore {
    withCredentials: boolean;
    setWithCredentials: (state: boolean) => void;
    open: boolean;
    setOpen: (state: boolean) => void;
}

export const useAuthFormStore = create<IAuthFormStore>((set, get) => {
    return {
        withCredentials: false,
        open: false,

        setWithCredentials: (withCredentials) => set({ withCredentials }),
        setOpen: (open) => set({ open })
    }
})
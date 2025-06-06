import AuthProviders from "@/constants/auth-providers.enum";
import { AuthServices } from "@/services/auth";
import { useAuthFormStore } from "@/stores/auth-form.store";
import { FormEvent } from "react";

export const useAuthForm = () => {
    const { loginWithProviders } = AuthServices;
    const { withCredentials, setWithCredentials, open, setOpen } = useAuthFormStore();

    const handleClose = (e?: MouseEvent | React.MouseEvent) => {
        console.log("event", e?.target)
        e?.stopPropagation();
        setOpen(false);
        setWithCredentials(false);
    }

    const handleLoginWithGithub = async (e: FormEvent, provider?: AuthProviders) => {
        e.preventDefault();
        await loginWithProviders(provider);
    }


    return {
        handleClose,
        open,
        setOpen,
        withCredentials,
        setWithCredentials,
        handleLoginWithGithub
    }
}
"use client";

import { cn } from "@/lib/utils";

interface IProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

function AuthFormCredentials({ open, setOpen }: IProps) {
    return (
        <div className={cn(
                "transition-all ease-in-out duration-300 bg-red-400 h-full",
                open ? "translate-x-0" : "translate-x-[700px]"
            )}
        >
            <label htmlFor=""></label>
            <input
                type="email"
                className="form_auth-btn"
            />
        </div>
    )
}

export default AuthFormCredentials;
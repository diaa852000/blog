"use client";

import { useSession } from "next-auth/react"
import UserMenu from "./user-menu";
import AuthForm from "./auth-form";
import { useEffect } from "react";

function AuthButton() {
    const { data: session } = useSession();

    useEffect(() => {
        console.log("this is sesss", session);
    },[session]);


    return (
        session?.user?.name ? <UserMenu /> : <AuthForm />
    )
}

export default AuthButton
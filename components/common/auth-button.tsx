"use client";

import { signIn, useSession } from "next-auth/react"
import { Button } from "../ui/button";
import AuthMenu from "./auth-menu";

function AuthButton() {
    const { data: session } = useSession();

    return (
        session?.user?.name ? (
            <AuthMenu />
        ) : (
            <Button
                variant={"ghost"}
                onClick={() => signIn()}
            >
                Sign In
            </Button>
        )
    )
}

export default AuthButton
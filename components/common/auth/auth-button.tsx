"use client";

import { signIn, useSession } from "next-auth/react"
import { Button } from "../../ui/button";
import UserMenu from "./user-menu";
import AuthForm from "./auth-form";


function AuthButton() {
    const { data: session } = useSession();

    const handleSignIn = () => signIn();

    return (
        session?.user?.name ? (
            <UserMenu />
        ) : (
            <>
                {/* <Button
                    variant={"ghost"}
                    onClick={handleSignIn}
                    className="font-normal text-gray-500 cursor-pointer hover:bg-transparent hover:text-gray-600 transition-colors"

                >
                    Sign In
                </Button> */}
                <AuthForm/>
            </>
        )
    )
}

export default AuthButton
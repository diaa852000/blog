"use client";

import Modal from "@/components/layout/modal";
import { Button } from "@/components/ui/button";
import useOutSideClick from "@/hooks/useOutSideClick";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import React, { FormEvent, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoogleIcon } from "../common/icons";
import AuthProviders from "@/constants/auth-providers.enum";
import Seperator from "./seperator";
import { useAuthForm } from "@/hooks/useForm.hook";
import AuthFormCredentials from "./auth-form-credentials";

export default function AuthForm() {
    const ref = useOutSideClick<HTMLDivElement>((e) => handleClose(e));
    const {
        open,
        withCredentials,
        handleClose,
        setOpen,
        setWithCredentials,
        handleLoginWithGithub
    } = useAuthForm();

    return (
        <>
            <Button
                variant={"ghost"}
                onClick={() => setOpen(true)}
                className="font-normal text-gray-500 cursor-pointer hover:bg-transparent hover:text-gray-600 transition-colors"
            >
                Sign In
            </Button>

            <Modal
                ref={ref}
                className={cn(
                    open
                        ? "opacity-100 pointer-events-auto scale-100"
                        : "opacity-0 pointer-events-none scale-0",
                    "transition-all ease-in-out duration-150 bg-blue-200"
                )}
            >
                <div className="bg-background w-[90vw] sm:w-[500px]  shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded p-2 overflow-hidden h-[455px] mx-auto">
                    <div className={cn("transition-all ease-in-out duration-300", withCredentials ? "translate-x-[-700px] hidden" : "translate-x-0")}>
                        <header className="w-fit ms-auto">
                            <Button
                                onClick={(e) => handleClose(e)}
                                className="bg-transparent hover:bg-transparent cursor-pointer shadow-none hover:text-gray-700 w-full h-full"
                            >
                                <XIcon className="text-gray-500/90" size={30} />
                            </Button>
                        </header>
                        <h3 className="text-2xl capitalize text-center mt-6 mb-12">
                            join medium.
                        </h3>
                        <div className="mb-6 flex flex-col items-center justify-center gap-3">
                            <Button
                                type="button"
                                variant={"ghost"}
                                className="form_auth-btn"
                                onClick={(e) => handleLoginWithGithub(e, AuthProviders.GOOGLE)}
                            >
                                <div className="me-4">
                                    <GoogleIcon />
                                </div>
                                <span className="text-base font-normal">Continue with Google</span>
                            </Button>
                            <Button
                                className="form_auth-btn"
                                variant={"ghost"}
                                type="button"
                                onClick={(e) => handleLoginWithGithub(e, AuthProviders.GITHUB)}
                            >
                                <FaGithub className="me-4" />
                                <span className="text-base font-normal">Continue with GitHub</span>
                            </Button>
                            <Seperator />
                            <Button
                                className="form_auth-btn"
                                variant={"ghost"}
                                type="button"
                                onClick={() => setWithCredentials(true)}
                            >
                                <span className="text-base font-normal">Continue with email</span>
                            </Button>
                        </div>
                    </div>
                    {/* create seperated component */}
                    <AuthFormCredentials
                        open={withCredentials}
                        setOpen={setWithCredentials}
                    />
                </div>
            </Modal>

        </>
    )
}


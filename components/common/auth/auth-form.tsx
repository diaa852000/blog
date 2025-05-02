"use client";

import Modal from "@/components/layout/modal";
import { Button } from "@/components/ui/button";
import useOutSideClick from "@/hooks/useOutSideClick";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import React, { useState } from "react";

export default function AuthForm() {
    const [open, setOpen] = useState(false);

    const handleClose = (e?: MouseEvent | React.MouseEvent) => {
        e?.stopPropagation();
        setOpen(false);
    }

    const ref = useOutSideClick<HTMLDivElement>((e) => handleClose(e));

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
                className={cn(
                    open ? "opacity-100 pointer-events-auto scale-100" : "opacity-0 pointer-events-none scale-0",
                    "transition-all ease-in-out duration-300"
                )}
                ref={ref}
            >
                <form className="bg-white max-w-2xl w-full md:mx-auto shadow-[0_3px_8px_rgba(0,0,0,0.24)] rounded p-2">
                    <header className="w-fit ms-auto">
                        <Button
                            onClick={(e) => handleClose(e)}
                            // size={"icon"}
                            className="bg-transparent hover:bg-transparent cursor-pointer shadow-none hover:text-gray-700 w-full h-full"
                        >
                            <XIcon className="text-gray-500/90" size={30} />
                        </Button>
                    </header>
                    <div className="my-6 flex items-center justify-center">
                        <h3 className="text-2xl capitalize">
                            join medium.
                        </h3>
                    </div>
                </form>

            </Modal>

        </>
    )
}
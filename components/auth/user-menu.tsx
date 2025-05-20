"use client";

import { signOut, useSession } from "next-auth/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { menuLinks } from "@/constants/links";
import { redirect } from "next/navigation";

export default function UserMenu() {
    const { data: session } = useSession();

    const handleSignOut = () => {
        signOut();
        redirect("/");
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"ghost"}
                    className="w-9 h-9 rounded-full bg-gray-100 relative overflow-hidden cursor-pointer"
                >
                    <Image
                        src={`${session?.user?.image}`}
                        alt="user-img"
                        className="w-full object-cover h-full rounded-full"
                        fill
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="space-y-3 bg-background" style={{ zIndex: 9999 }}>
                {menuLinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.href}
                        className="text-sm text-gray-500 flex items-center justify-start gap-3 p-1"
                    >
                        {link.icon && link.icon}
                        <span className="mt-1 hover:text-gray-500">
                            {link.label}
                        </span>
                    </Link>
                ))}

                <hr className="my-2" />

                <div>
                    <Button
                        variant="ghost"
                        className="p-1 text-gray-500 rounded cursor-pointer text-sm hover:bg-transparent font-normal capitalize w-full justify-start text-left"
                        onClick={handleSignOut}
                    >
                        sign out
                    </Button>

                    <p className="text-sm text-gray-500 p-1">
                        {session?.user?.email}
                    </p>
                </div>


            </PopoverContent>
        </Popover>
    )
}


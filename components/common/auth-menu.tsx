"use client";

import { useSession } from "next-auth/react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { ProfileIcon, StatusIcon } from "./icons";

export default function AuthMenu() {
    const { data: session } = useSession();

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
            <PopoverContent align="end" className="absolute right-0 space-y-3">
                <Link
                    href={""}
                    className="text-sm text-gray-500 flex items-center justify-start gap-3 p-1"
                >
                    <ProfileIcon />
                    <span className="mt-1 hover:text-gray-500">Profile</span>
                </Link>
                <Link
                    href={""}
                    className="text-sm text-gray-500 flex items-center justify-start gap-3 p-1"
                >
                    <StatusIcon />
                    <span className="mt-1 hover:text-gray-500">Status</span>
                </Link>
                <Link
                    href={""}
                    className="text-sm text-gray-500 flex items-center justify-start gap-3 p-1"
                >
                    <ProfileIcon />
                    <span className="mt-1 hover:text-gray-500">Profile</span>
                </Link>
                <Link
                    href={""}
                    className="text-sm text-gray-500 flex items-center justify-start gap-3 p-1"
                >
                    <ProfileIcon />
                    <span className="mt-1 hover:text-gray-500">Profile</span>
                </Link>

                <hr className="my-2" />
                <div>
                    <Button
                        variant="ghost"
                        className="p-1 text-gray-500 rounded cursor-pointer text-sm hover:bg-transparent font-normal capitalize w-full justify-start text-left"
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


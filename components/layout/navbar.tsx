import Link from "next/link"
import { BellIcon, SearchIcon, WriteIcon } from "../common/icons"

export default function Navbar() {
    return (
        <>
            <MobileNavbar />
            <DesktopNavbar />
        </>
    )
}

function DesktopNavbar() {
    return (
        <nav className="hidden md:flex items-center justify-between px-5 py-3 border-b">
            <div className="flex items-center gap-2">
                <Logo />
                <div className="w-[250px] bg-gray-50 rounded-3xl py-2 flex items-center justify-between px-4 gap-4">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-transparent outline-none text-sm placeholder:text-gray-500/90 text-main"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between gap-6">
                <button type="button">
                    <WriteIcon />
                </button>
                <button type="button">
                    <BellIcon />
                </button>
                <button type="button" className="w-9 h-9 rounded-full bg-gray-100">
                    D
                </button>
            </div>


        </nav>
    )
}

function MobileNavbar() {
    return (
        <nav className="px-5 pb-2 pt-3 flex items-center justify-between border-b md:hidden">
            <Logo />

            <div className="flex items-center justify-between gap-6">
                <button type="button">
                    <SearchIcon />
                </button>
                <button type="button">
                    <BellIcon />
                </button>
            </div>
            <button type="button" className="w-9 h-9 rounded-full bg-gray-100">
                D
            </button>
        </nav>
    )
}

function Logo() {
    return (
        <Link
            href={'/'}
            className="text-3xl font-semibold text-main capitalize"
        >
            medium
        </Link>
    )
}
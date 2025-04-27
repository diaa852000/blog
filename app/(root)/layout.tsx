import Navbar from "@/components/layout/navbar"
import { ReactNode } from "react"

function MainLayout({ children }: {children: ReactNode}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default MainLayout
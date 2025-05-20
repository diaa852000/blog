import Navbar from "@/components/layout/navbar"
import WithSession from "@/components/providers/with-session"
import { ReactNode } from "react"

function MainLayout({ children }: { children: ReactNode }) {
    return WithSession(async (session) => {
        return (
            <>
                <Navbar />
                {children}
            </>
        )
    })
}

export default MainLayout
import { getServerSession, Session } from "next-auth";
import { redirect } from "next/navigation";

type HandlerFunction<T> = (session: Session) => Promise<T>;

export default async function WithSession<T>(
    handler: HandlerFunction<T>
): Promise<T> {
    const session = await getServerSession();

    if(!session || !session.user) {
        redirect("/api/auth/signin");
    }

    return handler(session);
}
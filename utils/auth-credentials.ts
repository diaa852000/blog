import { RequestInternal } from "next-auth";

export default async function authWithCredentials
(
    credentials: Record<"email" | "password" | "firstName" | "lastName" , string> | undefined,
    req: Pick<RequestInternal, "body" | "method" | "headers" | "query">
) {
    if (!credentials) return null;

    const { email, password, firstName, lastName } = credentials;
    const res = await fetch("https://example.com/api/auth", {
        method: "POST",
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            password
        }),
        headers: { "Content-Type": "application/json" }
    });

    const user = await res.json();

    if (res.ok && user) {
        return user;
    }
    return null;
}
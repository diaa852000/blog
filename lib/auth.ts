import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import authWithCredentials from "@/utils/auth-credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.AUTH_GITHUB_ID ?? "",
            clientSecret: process.env.AUTH_GITHUB_SECRET ?? ""
        }),
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID ?? "",
            clientSecret: process.env.AUTH_GOOGLE_SECRET ?? ""
        }),
        CredentialsProvider({
            credentials: {
                firstName: {},
                lastName: {},
                email: {},
                password: {}
            },
            authorize: async (credentials, req) => await authWithCredentials(credentials, req),
        })
    ],
    pages: {
        signIn:  "/"
    }
};

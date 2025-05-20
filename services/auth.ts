import AuthProviders from "@/constants/auth-providers.enum";
import { signIn } from "next-auth/react";

export namespace AuthServices {
    export async function loginWithGithub() {
        try {
            await signIn("github");
        } catch (error) {
            console.error("Failed to login/signup with github", error);
            throw error;
        }
    }

    export async function loginWithGoogle() {
        try {
            await signIn("google");
        } catch (error) {
            console.error("Failed to login/signup with Google", error);
            throw error;
        }
    }

    export async function loginWithProviders(provider?: AuthProviders) {
        try {
            await signIn(provider);
        } catch (error) {
            console.error("Failed to login/signup with Google", error);
            throw error;
        }
    }


}
"use server"

import { signIn } from "@/auth/auth";

export async function signInWithCredentials(email: string, password: string) {
    try {
        await signIn("credentials", {
            email,
            password,
            redirect: false
        });
        return;
    } catch (error: any) {
        // Handle CredentialsSignin error
        if (error?.type === 'CredentialsSignin') {
            return { success: false, error: "Invalid email or password" };
        }
        console.error("Authorization error:", error);
        return { success: false, error: "An error occurred during sign in" };
    }
}
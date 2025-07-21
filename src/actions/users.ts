"use server";

import { createClient } from "@/auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/utils/handleError";

export const loginAction = async (email: string, password: string) => {
    try {
        const { auth } = await createClient();

        const { error } = await auth.signInWithPassword({
            email,
            password
        });

        if(error) throw error;

        return { errorMessage: null };

    } catch (error) {
        return handleError(error);
    }
};


export const signUpAction = async (email: string, password: string, name: string) => {
    try {
        const { auth } = await createClient();

        const { data, error } = await auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: name,
                },
            },
        });

        if(error) throw error;

        const userId = data.user?.id;
        if(!userId) throw new Error("Error signing up");

        // add user to database
        await prisma.user.create({
            data: {
                id: userId,
                email,
            },
        });

        return { errorMessage: null };

    } catch (error) {
        return handleError(error);
    }
};

export const signInWithGoogle = async (): Promise<{errorMessage: string | null; redirectUrl: string | null} > => {
    const authCallbackUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`;

    try {
        const { auth } = await createClient();
        
        const { data, error} = await auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: authCallbackUrl,
            },
        });

        if(error) throw error;

        return { 
            errorMessage: null,
            redirectUrl: data?.url, 
        };

    } catch (error) {
        console.error(error);
        return { 
            errorMessage: error instanceof Error ? error.message: "An unknown error occurred",
            redirectUrl: null, 
        };
    }
};


export const logOutAction = async () => {
    try {
        const { auth } = await createClient();

        const {  error } = await auth.signOut();;
        if(error) throw error;

        return { errorMessage: null };
    } catch (error) {
        return handleError(error);
    }
};
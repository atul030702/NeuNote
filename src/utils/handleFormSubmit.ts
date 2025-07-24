import { TransitionStartFunction } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { loginAction, signUpAction, signInWithGoogle } from "@/actions/users";
import { toast } from "sonner";
import { checkValidUserData } from "./validateData";

export const handleSubmit = (
    formData: FormData,
    isLoginForm: boolean,
    router: AppRouterInstance,
    setClientValidationError: React.Dispatch<React.SetStateAction<string | null>>,
    startTransition: TransitionStartFunction
): void => {
    const email = formData?.get("email") as string;
    const password = formData?.get("password") as string;
    const confirmPassword = formData?.get("confirmPassword") as string;
    const name = formData.get("name") as string;

    // client side form validation on sign-up
    if(!isLoginForm) {
        const validationError = checkValidUserData(email, password, name, confirmPassword);

        if(validationError) {
            setClientValidationError(validationError);
            return;
        }
    }
    // clear the previous client error for login page
    setClientValidationError(null);

    startTransition(async () => {
        let errorMessage;
        let title;
        let description;

        if(isLoginForm) {
            errorMessage = (await loginAction(email, password)).errorMessage;
            title = "Logged In";
            description = "You have been successfully logged in";
        }else {
            errorMessage = (await signUpAction(email, password, name)).errorMessage;
            title = "Signed Up";
            description = "Check your email for confirmation link"; 
        }

        if(!errorMessage) {
            toast.success(title, {
                description: description,
            });

            router.replace("/home");
        }else {
            toast.error("Error", {
                description: errorMessage,
            });

            router.replace("/");
        }
    });
};


export const oAuthSubmit = async () => {
    const { errorMessage, redirectUrl } = await signInWithGoogle();

    if (errorMessage) {
        toast.error("Error", {
            description: "Failed to initiate Google Sign-in",
        });

    } else if(redirectUrl) {

        toast.success("Redirecting to Google", {
            description: errorMessage,
        });
        window.location.href = redirectUrl;
    }

};
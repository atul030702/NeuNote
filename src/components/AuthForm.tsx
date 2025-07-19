"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";

import { toast } from "sonner";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { loginAction, signUpAction } from "@/actions/users";
import { checkValidUserData } from "@/utils/validateData";

type Props = {
    type: "login" | "signup",
}

const AuthForm: React.FC<Props> = ({ type }) => {
    const [clientValidationError, setClientValidationError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const isLoginForm = type === "login";

    const handleSubmit = (formData: FormData) => {
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

                router.replace("/");
            }else {
                toast.error("Error", {
                    description: errorMessage,
                });
            }
        });
    };

    return (
        <form 
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                handleSubmit(formData);
            }}
        >
            <CardContent className="w-full grid items-center gap-4">
                {!isLoginForm && (
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            type="name"
                            required
                            disabled={isPending}
                        />
                    </div>
                )}

                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        required
                        disabled={isPending}
                    />
                </div>

                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                        required
                        disabled={isPending}
                    />
                </div>

                {!isLoginForm && (
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Enter your password again"
                            type="password"
                            required
                            disabled={isPending}
                        />
                    </div>
                )}
            </CardContent>

            <CardFooter className="flex flex-col mt-5 gap-6">
                {/** For showing error on sign up page only for client side error */}
                {!isLoginForm && clientValidationError && (
                    <p className="text-red-500 text-sm mb-2">{ clientValidationError }</p>
                )}

                <Button className="w-full cursor-pointer">
                    {isPending ? (
                        <Loader2 className="animate-spin" />
                    ) : (
                        isLoginForm ? "Login" : "Sign Up"
                    )}
                </Button>

                <p className="text-sm">
                    {isLoginForm ? "Don't have an account?": "Already have an account?"}{" "}
                    <Link href={isLoginForm ? "/sign-up" : "/login"}
                        className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}
                    >
                        {isLoginForm ? "Sign Up" : "Login"}
                    </Link>
                </p>
            </CardFooter>
        </form>
    );
};

export default AuthForm;
"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Loader2, Eye, EyeOff } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { FiArrowRight } from "react-icons/fi";

import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { handleSubmit, oAuthSubmit } from "@/utils/handleFormSubmit";

type Props = {
    type: "login" | "signup",
}

const AuthForm: React.FC<Props> = ({ type }) => {
    const [clientValidationError, setClientValidationError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPs, setShowConfirmPs] = useState<boolean>(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const isLoginForm = type === "login";

    return (
        <>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    handleSubmit(
                        formData, 
                        isLoginForm, 
                        router, 
                        setClientValidationError, 
                        startTransition
                    );
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
                        <div className="relative">
                            <Input
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                type={showPassword ? "text" : "password"}
                                required
                                disabled={isPending}
                            />
                            <Button
                                className="absolute top-0 right-0 cursor-pointer"
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <Eye /> : <EyeOff />}
                            </Button>
                        </div>
                    </div>

                    {!isLoginForm && (
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <div className="relative">
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="Enter your password again"
                                    type={showConfirmPs ? "text" : "password"}
                                    required
                                    disabled={isPending}
                                />
                                <Button
                                    className="absolute top-0 right-0 cursor-pointer"
                                    type="button"
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setShowConfirmPs(!showConfirmPs)}
                                >
                                    {showConfirmPs ? <Eye /> : <EyeOff />}
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>

                <CardFooter className="flex flex-col mt-5 gap-6">
                    {/** For showing error on sign up page only for client side error */}
                    {!isLoginForm && clientValidationError && (
                        <p className="text-red-500 text-sm">{ clientValidationError }</p>
                    )}

                    <Button className="w-full cursor-pointer">
                        {isPending ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            <>
                            {isLoginForm ? "Login" : "Sign Up"}
                            <FiArrowRight />
                            </>
                        )}
                        
                    </Button>

                </CardFooter>
            </form>

            <CardFooter className="flex flex-col gap-6">

                <Button className="w-full text-base flex items-center justify-center cursor-pointer"
                    onClick={oAuthSubmit}
                >
                    <span>Continue with Google</span>
                    <SiGoogle />
                </Button>

                <p className="text-sm">
                    {isLoginForm ? "Don't have an account?": "Already have an account?"}{" "}
                    <Link href={isLoginForm ? "/sign-up" : "/login"}
                        className={`text-blue-500 underline font-semibold ${isPending ? "pointer-events-none opacity-50" : ""}`}
                    >
                        {isLoginForm ? "Sign Up" : "Login"}
                    </Link>
                </p>
            </CardFooter>
        </>
    );
};

export default AuthForm;
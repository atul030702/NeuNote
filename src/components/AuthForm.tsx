"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { Loader2, Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";

import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

import { handleSubmit, oAuthSubmit } from "@/utils/handleFormSubmit";

type Props = {
    type: "login" | "signup",
}

const AuthForm: React.FC<Props> = ({ type }) => {
    const [clientValidationError, setClientValidationError] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPs, setShowConfirmPs] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<"login" | "signup" | "">(type);

    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const isLoginForm = type === "login";

    return (
        <>
            <div className="flex border-b border-gray-200 dark:border-gray-700">
                <button onClick={() => setActiveTab("login")}
                    className={`flex-1 py-3 font-medium text-center transition-colors ${activeTab === "login" ? "text-sage border-b-2 border-sage" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"}`}
                >
                    <Link href="/login">Log In</Link>
                </button>

                <button onClick={() => setActiveTab("signup")}
                    className={`flex-1 py-3 font-medium text-center transition-colors ${activeTab === "signup" ? "text-sage border-b-2 border-sage" : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"}`}
                >
                    <Link href="/sign-up">Sign Up</Link>
                </button>
            </div>

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
                    {/** Name */}
                    {!isLoginForm && (
                        <div className="flex flex-col space-y-1">
                            <Label htmlFor="name"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Full Name
                            </Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-1 top-3 pl-1 pointer-events-none">
                                    <User size={18} className="text-gray-400" />
                                </div>
                                <input
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-sage focus:border-transparent"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    type="name"
                                    required
                                    disabled={isPending}
                                /> 
                            </div> 
                        </div>
                    )}

                    {/**Email */}
                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Email
                        </Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-1 top-3 pl-1 pointer-events-none">
                                <Mail size={18} className="text-gray-400" />
                            </div>
                            <input
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-sage focus:border-transparent"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                type="email"
                                required
                                disabled={isPending}
                            />
                        </div>
                    </div>

                    {/** Password */}
                    <div className="flex flex-col space-y-1">
                        <Label htmlFor="password"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Password
                        </Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-1 top-3 pl-1 pointer-events-none">
                                <Lock size={18} className="text-gray-400" />
                            </div>
                            <input
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-sage focus:border-transparent"
                                id="password"
                                name="password"
                                placeholder="Min. 8 characters"
                                type={showPassword ? "text" : "password"}
                                required
                                disabled={isPending}
                            />
                            <Button
                                className="absolute top-1 right-0 cursor-pointer"
                                type="button"
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <Eye /> : <EyeOff />}
                            </Button>
                        </div>
                    </div>

                    {/** Confirm Password */}
                    {!isLoginForm && (
                        <div className="flex flex-col space-y-1">
                            <Label htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Confirm Password
                            </Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-1 top-3 pl-1 pointer-events-none">
                                    <Lock size={18} className="text-gray-400" />
                                </div>
                                <input
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-sage focus:border-transparent"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder=""
                                    type={showConfirmPs ? "text" : "password"}
                                    required
                                    disabled={isPending}
                                />
                                <Button
                                    className="absolute top-1 right-0 cursor-pointer"
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

                    {/** Terms Checkbox */}
                    {!isLoginForm && (
                        <div className="ml-3 text-sm flex items-center">
                            <input 
                                className="h-4 w-4 mr-2 text-color border-gray-300 dark:border-gray-600 rounded"
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                            />
                            <label htmlFor="terms"
                                className="text-gray-700 dark:text-gray-300"
                            >
                                I agree to the{" "}
                                <a href="#" className="text-sage hover:text-sage/80 transition-colors duration-200">
                                    Terms of Service
                                </a>{" "}
                                and{" "}
                                <a href="#" className="text-sage hover:text-sage/80 transition-colors duration-200">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>
                    )}

                    {/**Login/ SignUp button */}
                    <button className="w-full flex items-center justify-center py-2 bg-sage text-white font-semibold cursor-pointer gap-2 rounded-md transition-all duration-300 hover:bg-sage/75 md:hover:gap-3.5">
                        {isPending ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            <>
                            {isLoginForm ? "Sign in" : "Create account"}
                            <FiArrowRight size={18} className="text-white font-semibold" />
                            </>
                        )}
                        
                    </button>

                </CardFooter>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full mx-6 border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="px-2 bg-popover text-sm text-gray-500 dark:text-gray-400">
                        Or continue with
                    </span>
                </div>
            </div>

            <div className="px-5">
                <Button className="w-full text-base flex items-center justify-center cursor-pointer bg-muted hover:bg-muted/70 transition-colors duration-300"
                    onClick={oAuthSubmit}
                >
                    <Image 
                        src="/google-icon.svg"
                        alt="google-icon"
                        height={22}
                        width={22}
                        draggable="false"
                    />
                </Button>
            </div>
        </>
    );
};

export default AuthForm;
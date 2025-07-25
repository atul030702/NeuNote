import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import AuthForm from "@/components/AuthForm";

const LoginPage = () => {
    return (
        <div className="my-10 sm:my-15 mx-2.5 sm:mx-0 flex flex-1 flex-col items-center">
            <Card className="w-full max-w-md">
                <CardHeader className="mb-4">
                    <CardTitle className="text-center text-xl text-gray-600 dark:text-gray-300">Sign in to your account</CardTitle>
                </CardHeader>

                <AuthForm type="login"/>
            </Card>
        </div>
    );
};

export default LoginPage;
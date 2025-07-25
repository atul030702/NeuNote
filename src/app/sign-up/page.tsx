import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import AuthForm from "@/components/AuthForm";

const SignUpPage = () => {
    return (
        <div className="mt-20 flex flex-1 flex-col items-center">
            <Card className="w-full max-w-md">
                <CardHeader className="mb-4">
                    <CardTitle className="text-center text-xl text-gray-600 dark:text-gray-300">Create your account</CardTitle>
                </CardHeader>

                <AuthForm type="signup"/>
            </Card>
        </div>
    );
};

export default SignUpPage;
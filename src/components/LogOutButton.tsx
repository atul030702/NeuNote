"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { logOutAction } from "@/actions/users";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const LogOutButton = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogOut = async () => {
        setLoading(true);

        const { errorMessage } = await logOutAction();

        if(!errorMessage) {
            toast.success("Logged Out", {
                description: "You have been successfully logged out",
            });
            // take user to home page on log out
            router.push("/"); 
        }else {
            toast.error("Error", {
                description: errorMessage,
            })
        }

        setLoading(false);
    };

    return (
        <Button 
            variant="outline" 
            className="w-24 cursor-pointer"
            onClick={handleLogOut}
            disabled={loading}
        >
            {loading ? <Loader2 className="animate-spin"/> : "Log Out"}
        </Button>
    );
};

export default LogOutButton;
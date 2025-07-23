"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { logOutAction } from "@/actions/users";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

type Props = {
    width: number | string;
    yMargin: number
};

const LogOutButton = ({width, yMargin}: Props) => {
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
        <button 
            className={`w-${width} bg-[#7A8A6F] px-4 py-${yMargin} text-white rounded-sm cursor-pointer`}
            onClick={handleLogOut}
            disabled={loading}
        >
            {loading ? <Loader2 className="animate-spin"/> : "Log Out"}
        </button>
    );
};

export default LogOutButton;
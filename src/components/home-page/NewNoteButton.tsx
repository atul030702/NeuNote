"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4} from "uuid";

import { User } from "@supabase/supabase-js";
import { Loader2, Plus } from "lucide-react";
import { toast } from "sonner";

type Props = {
    user: User | null;
}

const NewNoteButton = ({ user }: Props) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleClickNewNoteButton = async () => {
        if(!user) {
            router.replace("/login");
        }else {
            setLoading(true);

            const uuid = uuidv4();
            //await createNoteAction(uuid);
            router.push(`/?noteId=${uuid}`);

            toast("New note created", {
                description: "You have created a new note"
            });
        }
    };

    return (
        <button onClick={handleClickNewNoteButton} disabled={loading}
            className="w-35 flex items-center justify-center py-2 gap-1 bg-sage font-medium rounded-sm whitespace-nowrap cursor-pointer transition-colors duration-300 hover:bg-sage/75"
        >
            {loading ? (
                <Loader2 className="animate-spin" />
            ) : (
                <>
                    <Plus size={20} className="font-semibold" />
                    New Note
                </>
            )}
        </button>
    );
};

export default NewNoteButton;
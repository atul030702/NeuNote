"use server";

import { getUser } from "@/auth/server";
import { prisma } from "@/db/prisma";
import { handleError } from "@/utils/handleError";

export const updateNoteAction = async (noteId: string, text?: string, title?: string) => {
    try {
        const user = await getUser();
        if(!user) throw new Error("You must login to create a note");

        const data: {text?: string; title?: string} = {};
        if(typeof text === "string") {
            if(text.length > 10000) throw new Error("Note text is too long");
            data.text = text; 
        }else if(typeof title === "string") {
            const trimmedTitle = title.trim();
            if(trimmedTitle.length > 200) throw new Error("Note title is too long");

            data.title = title;
        }

        // If there's actually data to update
        if(Object.keys(data).length === 0) throw new Error("No data provided to update");

        // Verifying note ownership before updating
        const existingNote = await prisma.note.findFirst({
            where: {
                id: noteId,
                authorId: user.id,
            },
        });
        if(!existingNote) throw new Error("Note not found");

        // update the note
        await prisma.note.update({
            where: { id: noteId },
            data: {
                ...data,
                updatedAt: new Date(),
            },
        });

    } catch (error) {
        console.error("Error updating note:", error);
        return handleError(error);
    }
};
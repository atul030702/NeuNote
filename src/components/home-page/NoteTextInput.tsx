"use client";

import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useRef } from "react";

import { Textarea } from "../ui/textarea";
import { debounceTimeout } from "@/lib/constants";
import { updateNoteAction } from "@/actions/notes";
import useNote from "@/hooks/useNote";

type Props = {
    noteId: string;
    startingNoteText: string;
    noteTitleText: string;
};

const NoteTextInput = ({ noteId, startingNoteText, noteTitleText }:  Props) => {
    const textUpdateTimeout = useRef<NodeJS.Timeout | null>(null);
    const titleUpdateTimeout = useRef<NodeJS.Timeout | null>(null);
    const noteIdParam = useSearchParams().get("noteId") || "";
    const { noteText, setNoteText, noteTitle, setNoteTitle } = useNote();

    useEffect(() => {
        if(noteIdParam === noteId) {
            setNoteText(startingNoteText);
            setNoteTitle(noteTitleText);
        }

        return () => {
            if (textUpdateTimeout.current) clearTimeout(textUpdateTimeout.current);
            if (titleUpdateTimeout.current) clearTimeout(titleUpdateTimeout.current);
        };

    }, [startingNoteText, noteTitleText, noteIdParam, noteId, setNoteText, setNoteTitle]);

    const handleUpdateNoteText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setNoteText(text);

        if(textUpdateTimeout.current) clearTimeout(textUpdateTimeout.current!);

        textUpdateTimeout.current = setTimeout(() => {
            updateNoteAction(noteId, text);
        }, debounceTimeout);
    };

    const handleNoteTitleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
        const title = event.target.value;
        setNoteTitle(title);

        if(titleUpdateTimeout.current) clearTimeout(titleUpdateTimeout.current);

        titleUpdateTimeout.current = setTimeout(() => {
            updateNoteAction(noteId, undefined, title);
        }, debounceTimeout);
    };

    return (
        <div className="mb-4 h-full w-full flex flex-col items-center">
            <input 
                className="max-w-6xl w-full mb-2 resize-none p-4 text-xl placeholder:text-muted-foreground focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                type="text"
                value={noteTitle}
                placeholder="Untitled Note"
                onChange={handleNoteTitleUpdate}
            />
            <Textarea 
                className="custom-scrollbar mb-4 h-full max-w-6xl resize-none border p-4
                placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                value={noteText}
                placeholder="Start writing your notes here..."
                onChange={handleUpdateNoteText}
            />
        </div>
    );
};

export default NoteTextInput;
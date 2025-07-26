"use client";

type Props = {
    noteId: string;
    startingNoteText: string;
};

const NoteTextInput = ({ noteId, startingNoteText }:  Props) => {
    console.log(noteId, startingNoteText);

    return (
        <div>
            NoteTextInput
        </div>
    );
};

export default NoteTextInput;
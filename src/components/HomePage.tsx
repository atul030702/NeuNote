//import { getUser } from "@/auth/server";

import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import AppSidebar from "./App-sidebar";

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
};

const HomePage = async ({ searchParams }: Props) => {
    //const noteIdParam = (await searchParams).noteId;
    //const user = await getUser();

    return (
        <SidebarProvider>
            <div className="w-full flex min-h-screen">
                <AppSidebar />
                <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
                    <SidebarTrigger />
                    <div className="flex h-full flex-col items-center gap-4">
                        <div className="flex w-full max-w-4xl justify-end gap-2">
                            {/* <AskAIButton user={user} />
                            <NewNoteButton user={user} /> */}
                        </div>

                        {/* <NoteTextInput noteId={noteId} startingNoteText={note?.text || ""} /> */}
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
};

export default HomePage;
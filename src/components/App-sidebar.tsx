import { getUser } from "@/auth/server";
import { Note } from "@prisma/client";
import { prisma } from "@/db/prisma";
import Link from "next/link";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarGroupContent from "./SidebarGroupContent";

const AppSidebar = async () => {
    const user = await getUser();

    let notes: Note[] = [];

    if (user) {
        notes = await prisma.note.findMany({
            where: {
                authorId: user.id,
            },
            orderBy: {
                updatedAt: "desc",
            }
        });
    }

    return (
        <Sidebar>
            <SidebarHeader className="text-center">
                <h1 className="text-3xl sm:text-4xl font-bold py-3">neu<span className="text-sage">note</span></h1>
            </SidebarHeader>
            <SidebarContent className="custom-scrollbar">
                <SidebarGroup>
                    <SidebarGroupLabel className="my-2 mx-auto text-lg">
                        {user ? (
                            "Your Notes"
                        ) : (
                            <p>
                                <Link href={"/login"} className="underline">
                                    Login
                                </Link>{" "}
                                to see your notes
                            </p>
                        )}
                    </SidebarGroupLabel>
                    {user && <SidebarGroupContent notes={notes} />}
                </SidebarGroup>
            </SidebarContent>
            {/*<SidebarFooter />*/}
        </Sidebar>
    );
}

export default AppSidebar;
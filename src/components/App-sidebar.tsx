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
            {/*<SidebarHeader />*/}
            <SidebarContent className="custom-scrollbar mt-25">
                <SidebarGroup>
                    <SidebarGroupLabel className="my-2 text-lg">
                        {user ? (
                            "Your Notes"
                        ) : (
                            <p>
                                <Link href={"/login"}>
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
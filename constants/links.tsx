import { LibraryIcon, ProfileIcon, StatusIcon, StoriesIcon } from "@/components/common/icons";
import { IMenuLinks } from "@/types/links";

export const menuLinks: IMenuLinks[] = [
    {
        id: 0,
        label: "profile",
        href: "",
        icon: <ProfileIcon/>
    },
    {
        id: 1,
        label: "library",
        href: "",
        icon: <LibraryIcon/>
    },
    {
        id: 2,
        label: "stories",
        href: "",
        icon: <StoriesIcon/>
    },
    {
        id: 3,
        label: "status",
        href: "",
        icon: <StatusIcon/>
    },
]
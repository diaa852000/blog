import { JSX, ReactNode } from "react";

export interface IMenuLinks {
    id: number;
    label: string;
    href: string;
    icon?: JSX.Element | ReactNode | null;
}


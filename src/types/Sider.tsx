import { ReactNode } from "react";

export interface IMenuItemProps{
    onChangePath?(path: string): void;
    dataMenu?: IMenuItem[]
}

export interface IMenuItem{
    id: string;
    icon: ReactNode;
    code: string;
    name: string;
    path: string;
    subMenu: IMenuItem[]
}
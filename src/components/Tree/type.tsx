import { ReactNode } from "react";

export interface ITreeItem{
    name: string;
    code: string;
    icon: ReactNode;
    path: string;
    child?: ITreeItem[] 
}

export interface ITreeProps{
    data: ITreeItem[];
    onChangeLink?(path: string): void;
}
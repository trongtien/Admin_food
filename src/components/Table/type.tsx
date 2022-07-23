import { ReactNode } from "react";

export interface IColumnItem{
    field: string;
    name: string;
    width?: number;
}

export interface IRowsItem{
    [field: string]: string | ReactNode | number;
}

export interface ITableBaseProps{
    columns?: IColumnItem[];
    rows?: IRowsItem[];
    checkboxSelection?: boolean;
}
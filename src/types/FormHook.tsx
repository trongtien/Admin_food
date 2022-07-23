import { ReactNode } from 'react';
import { UseFormReturn, SubmitHandler, FieldValues } from 'react-hook-form'


export type TFormHookProps<T extends FieldValues> = {
    onSubmit: SubmitHandler<T>;
    children: (methods: UseFormReturn<T>) => ReactNode;
}
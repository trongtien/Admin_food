import { useForm } from 'react-hook-form';
import { TFormHookProps } from '../../types/FormHook'


const FormHook = <T extends Record<string, any>>({
    onSubmit,
    children
  }: TFormHookProps<T>) => {
    const methods = useForm<T>();

    return (
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
    );
  };

export default FormHook
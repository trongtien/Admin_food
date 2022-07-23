
export interface IFormLoginProps{
  onSubmit?(): void;
}


export type TFormLoginData = {
  email: string;
  password: string;
}
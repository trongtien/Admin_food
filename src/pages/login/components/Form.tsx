import React, { useCallback } from 'react'
import { TFormLoginData } from '../type';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
}).required();


const Form: React.FunctionComponent = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<TFormLoginData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmitLogin: SubmitHandler<TFormLoginData> = useCallback(data => console.log(data), []);

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)}>
      <div className="mb-6">
        <input
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Email address"
          {...register("email")}
        />
        {errors?.email && <p>{errors.email.message}</p>}
      </div>

      <div className="mb-6">
        <input
          type="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Password"
          {...register("password")}
        />
        {errors?.password && <p>{errors.password.message}</p>}
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="exampleCheck3"
            checked={undefined}
            defaultChecked={undefined}
          />
          <label className="form-check-label inline-block text-gray-800" id="exampleCheck2">
            Remember me
          </label>
        </div>
        <a
          href="#!"
          className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
        >
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Sign in
      </button>
    </form>
  )
}

export default React.memo(Form);
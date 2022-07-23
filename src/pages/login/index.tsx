import React, { useCallback, useEffect, useContext } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import { useNavigate } from 'react-router-dom';
import { IContextAppRoot, ISreens } from '../../types/AppRoot';
import useMediaQuery from '../../hooks/useMediaQuery';
import { AppRootContext } from '../../layouts/AppRootProvider';


const Login: React.FC = () => {

  const navigate = useNavigate()

  const onHandleLogin = useCallback(() => {
    navigate("/")
  }, [])

  const { changeScreen } = useContext(AppRootContext) as IContextAppRoot;

  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isMobie = useMediaQuery('(max-width: 480px)');

  useEffect(() => {
    const sreensCurrent: ISreens = {
      isDesktop: isDesktop,
      isTablet: isTablet,
      isMobie: isMobie
    }

    changeScreen(sreensCurrent)
  }, [isDesktop, isTablet, isMobie ])

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <Banner />

          <div className="md:w-8/12 lg:w-5/12 lg:ml-10">
            <div className="text-center">
              <img
                className="mx-auto w-48"
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                alt="logo"
              />
              <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">We are The Lotus Team</h4>
            </div>
            
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
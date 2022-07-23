import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import MainLayout from './MainLayout';
import 'antd/dist/antd.css';
import { AppRootContext } from './AppRootProvider';
import useMediaQuery from '../hooks/useMediaQuery';
import { useEffect, useContext } from 'react';
import { IContextAppRoot, ISreens } from '../types/AppRoot';


function App() {
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
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<MainLayout />} />
    </Routes>
  );
}

export default App;

import React, { PropsWithChildren, useState } from 'react';
import { IContextAppRoot, ISreens } from '../types/AppRoot';

export const AppRootContext = React.createContext<IContextAppRoot>({
  sreens: {
    isDesktop: false,
    isMobie: false,
    isTablet: false
  },
  collapseSider: false,
  changeScreen: (sreen: ISreens) => {},
  changeCollapseSider: (isColapse) => {}
});

const AppRootProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [ sreens , setSreens ] = useState<ISreens>({
    isDesktop: true,
    isMobie: false,
    isTablet: false
  })
  const [ collapseSider, setCollapseSider ] = useState<boolean>(false);

  const changeScreen = (sreen: ISreens) => {
    setSreens(sreen)
  };

  const changeCollapseSider = ( isCollapse: boolean ) => setCollapseSider(isCollapse)
  return (
    <AppRootContext.Provider 
      value={{ 
        sreens, 
        collapseSider,
        changeScreen: changeScreen,
        changeCollapseSider: changeCollapseSider
      }}
    >
      { children }
    </AppRootContext.Provider>
  )
}

export default AppRootProvider;
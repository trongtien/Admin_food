import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';
import React, { useContext } from 'react';
import { IContextAppRoot } from '../../types/AppRoot';
import { AppRootContext } from '../AppRootProvider';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const { Header } = Layout;

const TopBar = (): JSX.Element => {
  
  const { changeCollapseSider } = useContext(AppRootContext) as IContextAppRoot;

  const navigate = useNavigate()

  const handleChangeCollapse = ( isCollapse: boolean ) =>  changeCollapseSider(isCollapse);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login")
  }
  
  return (
    <AppRootContext.Consumer>
      {
        ({ collapseSider }) => {
          return (
            <Header className="px-3 bg-white flex justify-between">
              <div>
                {
                  React.createElement(collapseSider ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: () => handleChangeCollapse(!collapseSider),
                  })
                }
              </div>
              
              <div>
                <Button onClick={handleLogout}>Logout</Button>
              </div>
            </Header>
          )
        }
      }
    </AppRootContext.Consumer>
  )
}

export default TopBar;
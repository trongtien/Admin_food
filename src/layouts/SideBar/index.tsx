import React, { useCallback, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Drawer from 'antd/lib/drawer';
import type { MenuProps } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { AppRootContext } from '../AppRootProvider';
import Layout from 'antd/lib/layout';
import MenuItem from './MenuItem';
import './MenuItem.css'
import { IContextAppRoot } from '../../types/AppRoot';
import { AppstoreOutlined } from '@ant-design/icons';
import { IMenuItem } from '../../types/Sider';
import { CSSTransition } from 'react-transition-group';

const { Sider } = Layout;

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};


const SideBar = (): JSX.Element => {

  const { changeCollapseSider } = useContext(AppRootContext) as IContextAppRoot;
  const navigate = useNavigate();

  const sidebar: IMenuItem[] = React.useMemo(() =>
    [
      { id: "1", name: 'Dashboard', icon: <DesktopOutlined />, path: "/", code: "dashboard", subMenu: [] },
      {
        id: "2", name: 'Products', icon: <FileOutlined />, path: "/products", code: "products", subMenu: [
          { id: "2.1", name: 'Products=Analytics', icon: <UserOutlined />, path: "/products-analytics", code: "products-analytics", subMenu: [] },
          { id: "2.2", name: 'Products=Schedule', icon: <AppstoreOutlined />, path: "/products-schedule", code: "products-schedule", subMenu: [] },
        ]
      },
      { id: "3", name: 'Analytics', icon: <DesktopOutlined />, path: "/analytics", code: "analytics", subMenu: [] },
      { id: "4", name: 'Schedule', icon: <PieChartOutlined />, path: "/schedule", code: "schedule", subMenu: [] },
      { id: "5", name: 'Payout', icon: <TeamOutlined />, path: "/payout", code: "payout", subMenu: [] },
      { id: "6", name: 'Statements', icon: <AppstoreOutlined />, path: "/statements", code: "statements", subMenu: [] },
    ]
    , [])

  const onHandleChangePathDrawer = useCallback((val: string) => {
    val.length > 0 && navigate(val)
    changeCollapseSider(false)
  }, [])

  const onHandleChangePathSlider = useCallback((val: string) => {
    val.length > 0 && navigate(val)
  }, [])

  const handleChangeCollapseSider = (isCollapseSider: boolean) => {
    changeCollapseSider(isCollapseSider)
  }

  const Banner = (): JSX.Element => {
    return (
      <img
        src="https://thuvienlogo.com/data/03/logo-chu-nhat-dep-01.jpg"
        alt=""
        className="w-28 "
      />
    )
  }

  return (
    <AppRootContext.Consumer>
      {
        ({ sreens, collapseSider }) => {
          const widthSider = !sreens.isDesktop ? 0 : 50
          if (!sreens.isDesktop) {
            return (
              <Drawer
                title={<Banner />}
                visible={collapseSider}
                width={230}
                placement='left'
                className="p-0"
                onClose={() => handleChangeCollapseSider(false)}
                style={{
                  transition: `opacity ${2000}ms ease-in-out`,
                  opacity: 1,
                }}
              >
                <MenuItem
                  onChangePath={onHandleChangePathDrawer}
                  dataMenu={sidebar}
                />
              </Drawer>
            )
          }
          else {
            return (
              <Sider
                theme='light'
                collapsible={false}
                collapsed={collapseSider}
                collapsedWidth={widthSider}
                className="border-r-gray-500 border-r-2"
                style={{
                  transition: `opacity ${4000}ms ease-in-out`,
                  opacity: 2
                }}
              >
                <Banner />
                <MenuItem
                  onChangePath={onHandleChangePathSlider}
                  dataMenu={sidebar}
                />
              </Sider>
            )
          }
        }
      }
    </AppRootContext.Consumer>
  )
}

export default SideBar;
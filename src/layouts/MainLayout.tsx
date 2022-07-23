import SideBar from './SideBar';
import TopBar from './TopBar';
import Layout from 'antd/lib/layout';
import { Route, Routes } from 'react-router-dom';
import Product from '../pages/product';
import Dashboard from '../pages/dashboard';

const { Content } = Layout;

const MainLayout = (): JSX.Element => {

  return (
    <Layout className='w-full min-h-screen'>
      <SideBar />
     
      <Layout className="site-layout">
        <TopBar />
        <Content className='p-4'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products-analytics/*" element={<Product />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout;
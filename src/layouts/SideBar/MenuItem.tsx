import { FC, memo, useMemo } from 'react';
import Menu from 'antd/lib/menu';
import type { MenuProps } from 'antd';
import { IMenuItemProps } from '../../types/Sider';

const MenuItem: FC<IMenuItemProps> = (props) => {

  const { onChangePath, dataMenu } = props;

  const onHandleChangePath: MenuProps['onClick'] = event => {
    onChangePath && onChangePath(event.key);
  };

  // Map data Prop menu
  const ItemsData: MenuProps['items'] = useMemo(() => {
    return dataMenu?.map(data => ({
      icon: data.icon,
      label: data.name,
      key: data.path,
      children: data.subMenu.length ? data.subMenu.map( sub => ({
        label: sub.name,
        key: sub.path,
        icon: sub.icon,
      })) : undefined
    }))
  }, [dataMenu])


  return (
    <Menu 
      theme='light'
      mode="inline"
      className='p-0'
      items={ItemsData}
      _internalDisableMenuItemTitleTooltip
      onClick={onHandleChangePath}
    />
  )
}

export default memo(MenuItem);
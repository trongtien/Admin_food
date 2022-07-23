export interface IContextAppRootAction{
  changeScreen: (screnn: ISreens) => void
  changeCollapseSider: (isCollapse: boolean) => void
}

export interface IContextAppRoot extends IContextAppRootAction{
  sreens: ISreens
  collapseSider: boolean;
}

export interface ISreens{
  isMobie?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
}
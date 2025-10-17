export interface commonCustomSwitchPropsType {
  cardWrapperClassName?: string;
  formCheckSizeClassName?: string;
  disabled?: boolean;
  sm?:number
}

interface switchDataInterFace {
  color: string;
  header: string;
}
export interface commonIconsSwitchProps {
  switchData: switchDataInterFace[];
  mediaBodyClassName?: string;
  defaultUnChecked?: boolean;
}

export  interface commonSwitchSizePropsType{
    icons?:boolean
}
export interface commonCardFooterPropsType {
  cardFooterClassName?: string;
  cancelButtonClassName?:string
}

 
 export interface touchSpinsProp {
  item: string;
  arrowIcon?:boolean
  spinClassName?:boolean
}
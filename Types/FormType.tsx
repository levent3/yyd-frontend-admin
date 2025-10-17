export type touchSpinPropsType = {
  spinClassName?: boolean;
  touchSpinClassNames: string[];
  cardBodyClassName?: string;
  arrowIcon?: boolean;
};
export type commonPrefixAndPostFixPropsType = {
  postIcon?: boolean;
  preIcon?: boolean;
  preButton?: boolean;
  PostButton?: boolean;
  differentColor?: boolean;
};

export interface modalOnePropsType {
  toggle: () => void;
  modalOne: boolean;
}
export interface modalTwoPropsType {
  toggleTwo: () => void;
  modalTwo: boolean;
}

export interface businessFormCommonProps {
  activeTab?: number | undefined;
  callbackActive: (val: number | undefined) => void;
  diffrentId?: boolean;
}

export interface customWizardFormPropsType {
  diffrentId?: boolean;
  heading: string;
  horizontalWizardWrapperClassName?: string;
  xs?: number;
  firstXl?: number;
  secondXl?: number;
  colClass?: string;
}

export interface businessFormpropsType {
  horizontalWizardWrapperClassName?: string;
  heading: string;
  firstXl?: number;
  secondXl?: number;
  xs?: number;
}

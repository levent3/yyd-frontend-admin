import { ChangeEvent } from "react";

export type stepperHorizontalPropsType = { level: number };

interface basicInputFormValueInteFace {
  email: string;
  firstName: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  placeHolderName: string;
  cardNumber: string;
  expiration: string;
  cvvNumber: string;
  uploadDocumentation: string;
  informationCheckBox: boolean;
  linkedInLink: string;
  gitHubLink: string;
  giveFeedBack: string;
  state: string;
  agreeConditions: boolean;
}

export type numberingWizardPropsType = {
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  basicInputFormValue: basicInputFormValueInteFace;
  level?: number;
};

export interface commonPropsTypes {
  callbackActive: (val: number | undefined) => void;
}

export interface newAddressModalPropsTypes {
  toggle: () => void;
  showModal: boolean;
}

export interface paymentMethodOptionPropsType {
  paymentMethodName: string;
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface radioBoxValuesInterFace {
  address: string;
  shippingMethod: string;
}
export interface shippingInformationCommonProps {
  handleNextButton?: () => void;
  radioBoxValues: radioBoxValuesInterFace;
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface shippingFormTabContentPropsType {
  activeTab: number | undefined;
  callbackActive: (val: number | undefined) => void;
}

interface studentValidationFormInterFace {
  password:string;
  name:string;
  email:string;
  confirmPassWord:string;
  portfolioURL:string;
  projectDescription:string;
  twitterUrl:string;
  gitHubUrl:string;
}
export interface studentFormPropsType {
  handleImageLabelClick:()=>void;
  imageUrl:string | null;
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  studentValidationForm: studentValidationFormInterFace;
  level:number;
  handleNextButton:()=>void;
  fileInputRef:any
  handleBackButton:()=>void;
}



export interface verticalValidationWizardFormPropsType {
  activeCallBack: (val: number) => void;
  activeTab?: number;
}

export  interface verticalFormPropsType {
  callbackActive: (val: number) => void;
  activeTab:number
}
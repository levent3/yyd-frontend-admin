import { ChangeEvent } from "react";

export interface errorPageCommonProps {
  tittle: number;
  tittleClassName: string;
  BtnClassName: string;
}

interface formValueInterFace {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  age: string;
  passPort: string;
  country:string
  state:string
  city:string
}

export interface registerWizardForm {
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  formValue: formValueInterFace;
}

export interface createUserDataType {
  email: string;
  name: string;
  surname: string;
  mobile: string;
}

export interface userCallbackUser {
  id?: number | undefined;
  name?: string;
  surname?: string;
  age?: string;
  mobile?: string;
  avatar?: string;
}
export interface userUpdateType {
  name: string;
  surname: string;
  email: string;
  mobile: string;
}

export interface contactContextPropsType {
  users: userContact[];
  setUsers: React.Dispatch<React.SetStateAction<userContact[]>>;
  createUser: (data: addNewUser) => void;
  deleteUser: (data: number | undefined) => void;
  handleUpdateUser: (data: userUpdateType, id: number) => void;
}
export interface userContact {
  id: number;
  avatar: string;
  name: string;
  surname: string;
  age: string;
  mobile: string;
}

export interface addNewUser {
  name: string;
  surname: string;
  email: string;
  mobile: string;
}

export interface contactDetailsPropsType {
  selectedUser: userCallbackUser;
  userEditCallback: (edit: boolean, usersData: userCallbackUser) => void;
}

export interface printModalPropsTypes {
  printModal: boolean;
  selectedUser: userCallbackUser;
  toggleCallback: (result: boolean) => void;
}


export interface listNewContactPropsType{
  users:any, userCallback: (user: userCallbackUser) => void
}



export interface contactNavPropsType {
  callbackActive: (val: string) => void;
}

export interface navOrgPropType {
  callback: (tab:string)=>void;
}

export interface personalTabPropsType {
  users: [] | userContact[];
}

export interface contactNavProps {
  activeTab: string;
  users: userContact[] ;
}

export interface updateUserPropsType{
  editData:any, userEditCallback:(edit: boolean, usersData: userCallbackUser)=>void,
}

export interface noDataFoundPropsType {
  title: string;
}

export  interface printPreviewPropsType{
  selectedUser:userCallbackUser
}

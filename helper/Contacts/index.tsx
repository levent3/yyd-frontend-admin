import { contactContextPropsType } from "Types/ContactType";
import { createContext } from "react";

export const ContactContext = createContext<contactContextPropsType>({
  users: [],
  setUsers: () => {},
  createUser: () => {},
  deleteUser: () => {},
  handleUpdateUser: () => {},
});

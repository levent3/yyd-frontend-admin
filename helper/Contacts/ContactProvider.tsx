import { ReactNode, useState } from "react";
import { ContactContext } from ".";
import { addNewUser, userContact, userUpdateType } from "Types/ContactType";
interface contextType {
  children: ReactNode;
}
const ContactProvider = ({ children }: contextType) => {
  const [users, setUsers] = useState<userContact[] | []>([]);

  const min = 18;
  const max = 70;
  const randomAge = Math.floor(Math.random() * (max - min + 1)) + min;

  const createUser = (data: addNewUser) => {
    const tempUser = {
      id: users.length + 1,
      avatar: "user/user.png",
      name: data.name,
      surname: data.surname,
      age: randomAge.toString(),
      mobile: data.mobile,
    };
    setUsers((prevUsers)=>[...prevUsers,tempUser])
  };


const deleteUser = (id:number |undefined)=>{
  const removeUser  = users.filter((data)=>data.id !== id)
  setUsers(removeUser)
}

const handleUpdateUser =(data:userUpdateType,id:number) => {
  const {name ,surname ,email ,mobile}=data
  const updatedUser =users.map((data)=>data.id === id ?{...data,name,surname ,email ,mobile}:data)
  setUsers(updatedUser)

}
  return (
    <ContactContext.Provider value={{deleteUser, users, setUsers, createUser,handleUpdateUser }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;

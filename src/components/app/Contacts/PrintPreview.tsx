import { printPreviewPropsType, userCallbackUser } from "Types/ContactType"
import Image from "next/image";
import { Media } from 'reactstrap';
import { EmailAddress, General, ImgPath } from "utils/Constant";


const PrintPreview = ({selectedUser}:printPreviewPropsType) => {
  return (
    <div className="profile-mail pt-0" id="DivIdToPrint">
    <Media className=" align-items-center"><Image width={100} height={100}  className= 'img-100 img-fluid m-r-20 rounded-circle' id="updateimg" src= {`${ImgPath}/${selectedUser.avatar}`} alt= '' />
      <Media body className="mt-0">
        <h5><span id="printname">{selectedUser.name} </span><span id="printlast">{selectedUser.surname}</span></h5>
        <p id="printmail">{selectedUser.name}{'@gmail.com'}</p>
      </Media >
    </Media>
    <div className="email-general">
      <h6>{General}</h6>
      <p>{EmailAddress}: <span className="font-primary" id="mailadd">{selectedUser.surname}{'@gmail.com'}   </span></p>
    </div>
  </div>
  )
}

export default PrintPreview
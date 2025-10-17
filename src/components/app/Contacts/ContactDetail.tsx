import { Fragment, useCallback, useState, useContext } from 'react';
import SweetAlert from 'sweetalert2';
import { Name, MobileNo, EmailAddress, History, Edit, Delete, Print, General, Href, ImgPath } from 'utils/Constant';
import SearchNotFoundClass from './SearchNotFoundClass';
import PrintModal from './PrintModal';
import { contactDetailsPropsType, userCallbackUser } from 'Types/ContactType';
import Image from 'next/image';
import { Media } from 'reactstrap';
import { ContactContext } from '../../../../helper/Contacts/index';

const ContactDetailsClass = ({ selectedUser, userEditCallback, }:contactDetailsPropsType) => {
  const [printModal, setPrintModal] = useState(false);
  const printModalToggle = () => setPrintModal(!printModal);
  const {deleteUser} =useContext(ContactContext)
  const toggleCallback = useCallback((toggle:boolean) => {
    setPrintModal(toggle);
  }, []);
    
  const history = () => {
    document.querySelector('.history')?.classList.add('show');
  };

  const editUsers = (usersData:userCallbackUser) => {
      userEditCallback(true, usersData);
  };

  const deleteUserHandle = (userId:number | undefined) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {        
        deleteUser(userId)
        SweetAlert.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      } else {
        SweetAlert.fire(
          'Your imaginary file is safe!'
        );
      }
    });
  };

  return (
    <Fragment>
      {selectedUser ?
        <div className="profile-mail">
          <Media>
            <Image width={100} height={100}  className= 'img-100 img-fluid m-r-20 rounded-circle update_img_0' src= {`${ImgPath}/${selectedUser.avatar}`} alt= ''  />
            <Media body className="mt-0">
              <h5><span className="first_name_0">{selectedUser.name}</span> <span className="last_name_0">{selectedUser.surname}</span></h5>
              <p  className= 'email_add_0'  >{selectedUser.name}{'@gmail.com'}</p>
              <ul className= 'simple-list flex-row' >
                <li><a href={Href} onClick={() => editUsers(selectedUser)}>{Edit}</a></li>
                <li><a href={Href} onClick={() => deleteUserHandle(selectedUser.id)}>{Delete}</a></li>
                <li><a href={Href} onClick={history}>{History}</a></li>
                <li><a href={Href} onClick={printModalToggle} data-toggle="modal" data-target="#printModal">{Print}</a></li>
              </ul>
            </Media>
          </Media>
          <div className="email-general">
            <h6 className= 'mb-3'  >{General}</h6>
            <ul  >
              <li>{Name} <span className="font-primary first_name_0">{selectedUser.name}</span></li>
              <li>{MobileNo} <span className="font-primary mobile_num_0">{selectedUser.mobile}</span></li>
              <li>{EmailAddress} <span className="font-primary email_add_0">{`${selectedUser.name}@gmail.com`} </span></li>
            </ul>
          </div>
        </div>
        :
        <SearchNotFoundClass />
      }
      {selectedUser &&
        <PrintModal toggleCallback={toggleCallback} printModal={printModal} selectedUser={selectedUser} />
      }
    </Fragment>
  );
};

export default ContactDetailsClass;
import  {  useRef } from 'react';
import { Button, Modal, ModalBody } from 'reactstrap';
import ReactToPrint from 'react-to-print';
import { Cancel, PrintViews, Print } from 'utils/Constant';
import { printModalPropsTypes} from 'Types/ContactType';
import PrintPreview from './PrintPreview';

const PrintModal = ({ printModal, selectedUser, toggleCallback }:printModalPropsTypes) => {
  const printModalToggle = () => {toggleCallback(false);};

  const componentRef = useRef();
  return (
      <Modal isOpen={printModal} toggle={printModalToggle} >
        <div className='modal-header'>
          <h5 className='modal-title'>{PrintViews}</h5>
          <Button color= 'transprant' className= 'btn-close' onClick= {printModalToggle} type= 'button' ></Button>
        </div>
        <ModalBody className="list-persons">
          <PrintPreview selectedUser={selectedUser} />
          <ReactToPrint
            trigger={() => (
              <Button color= 'secondary' className="me-1"  >
                {Print}
              </Button>
            )}
            content={() => componentRef?.current || null }
          />&nbsp;&nbsp;
          <Button color='primary' onClick= {printModalToggle } >{Cancel}</Button>
        </ModalBody>
      </Modal>
  );
};

export default PrintModal;
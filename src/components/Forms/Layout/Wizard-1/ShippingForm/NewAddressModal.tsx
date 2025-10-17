import { newAddressModalPropsTypes } from "Types/FormLayoutType";
import { Button, Modal, ModalFooter, ModalHeader } from "reactstrap";
import { Information } from "utils/Constant";
import NewAdressModalBody from "./NewAdressModalBody";
const NewAddressModal = ({ toggle, showModal }: newAddressModalPropsTypes) => {
  return (
    <Modal isOpen={showModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{Information}</ModalHeader>
      <NewAdressModalBody />
      <ModalFooter>
        <Button color="transparent" onClick={toggle} className="m-0">Close</Button>
        <Button color="primary" onClick={toggle} className="m-0">Save</Button>
      </ModalFooter>
    </Modal>
  );
};

export default NewAddressModal;

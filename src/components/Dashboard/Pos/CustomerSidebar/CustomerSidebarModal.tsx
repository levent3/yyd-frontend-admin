import { customerSidebarModalProps } from "Types/DashboardType";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import CustomerSidebarModalBody from "./CustomerSidebarModalBody";
import { CreateCustomer } from "utils/Constant";

const CustomerSidebarModal = ({ modal, toggle }: customerSidebarModalProps) => {
  return (
    <Modal fade isOpen={modal}>
      <ModalHeader toggle={toggle}>{CreateCustomer}</ModalHeader>
      <ModalBody className="p-0">
        <div className="text-start dark-sign-up">
          <CustomerSidebarModalBody toggle={toggle} />
        </div>
      </ModalBody>
    </Modal>
  );
};

export default CustomerSidebarModal;

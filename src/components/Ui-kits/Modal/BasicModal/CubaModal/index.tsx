import React, { Fragment, useState } from "react";
import { CUBASIGNUP, Openmodalforcuba } from "utils/Constant";
import FormModalBody from "./FormModalBody";
import { Button, Modal } from "reactstrap";

const CubaModal = () => {
  const [modal, setModal] = useState<boolean>(false);
  const Toggle = () => {
    setModal(!modal);
  };
  return (
    <Fragment>
      <Button
        color="primary"
        type="button"
        onClick={() => {
          setModal(true);
        }}
      >
        {Openmodalforcuba}
      </Button>
      <Modal isOpen={modal} toggle={Toggle}>
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <h3 className="modal-header justify-content-center border-0">
            {CUBASIGNUP}
          </h3>
          <FormModalBody />
        </div>
      </Modal>
    </Fragment>
  );
};

export default CubaModal;

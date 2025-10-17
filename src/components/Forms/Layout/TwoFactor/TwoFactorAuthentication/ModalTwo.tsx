import { modalTwoPropsType } from "Types/FormType";
import Image from "next/image";
import { useState } from "react";
import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap";
import { ImgPath, QrCodeText, Submit, QrCodeAlertText } from "utils/Constant";

const ModalTwo = ({ modalTwo, toggleTwo }: modalTwoPropsType) => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <Modal centered isOpen={modalTwo} toggle={toggleTwo}>
      <ModalHeader toggle={toggleTwo}>Scan QR code</ModalHeader>
      <ModalBody className="main-qr-code">
        <div className="modal-toggle-wrapper">
          <p>{QrCodeText}</p>
          <div className="modal-img">
            <div className="qr-img">
              <Image width={100} height={100} src={`${ImgPath}/forms/qr-code.png`} alt="qr-code"/>
            </div>
            <div className="qr-content">
              <div className={`alert alert-light-dark light alert-dismissible fade text-dark border-left-wrapper ${ active ? "show" : "d-none"}`} role="alert">
                <i className="fa fa-exclamation-triangle" />
                <div>
                  <span>{QrCodeAlertText}</span>
                  <span className="f-w-500">
                    TYU78DE29OLAAWCVNTYFGESWQ31098QW
                  </span>
                </div>
                <Button close onClick={() => {setActive(false)}}/>
              </div>
            </div>
          </div>
          <form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
            <Input type="text" required placeholder="Enter QR Code" />
          </form>
          <Button color="primary">{Submit}</Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalTwo;

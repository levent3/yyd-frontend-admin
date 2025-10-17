import { bookMarkModalTagPropTypes } from 'Types/BookMarkTypes';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Cancel, Save } from 'utils/Constant';

const ModalTag = ({ tagToggle, value }: bookMarkModalTagPropTypes) => {

  return (
    <Modal className="fade show modal-bookmark" size="lg"
      isOpen={value} toggle={tagToggle}>
      <ModalHeader className="modal-title" toggle={tagToggle}>
        {'Create Tag'}
      </ModalHeader>
      <ModalBody>
        <Form className="form-bookmark needs-validation">
          <div className="form-row mb-3">
            <FormGroup className="col-md-12">
              <Label>{'Tag Name'}</Label>
              <Input type="text" />
            </FormGroup>
            <FormGroup className="col-md-12 mb-0">
              <Label>{'Tag color'}</Label>
              <Input type="color" className="form-color d-block" defaultValue="#655af3" />
            </FormGroup>
          </div>
          <Button color='secondary' onClick={tagToggle}>{Save}</Button>&nbsp;&nbsp;
          <Button color='primary' onClick={tagToggle}>{Cancel}</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default ModalTag;
import { useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody } from 'reactstrap';
import { Cancel, Save } from 'utils/Constant';
interface propsTypes {
  tagCallback: (val: boolean) => void, tagModal: boolean
}
const CreateTag = ({ tagCallback, tagModal }: propsTypes) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const tagToggle = () => {
    tagCallback(false);
  };
  const AddTag = () => { };
  return (
    <Modal className="fade show modal-bookmark" isOpen={tagModal} toggle={tagToggle} size="lg">
      <div className='modal-header'>
        <h5 className='modal-title'>{'Create Tag'}</h5>
        <Button color='transprant' className='btn-close' onClick={tagToggle} ></Button>
      </div>
      <ModalBody>
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddTag)}>
          <div className="form-row mb-3">
            <FormGroup className="col-md-12 mb-0">
              <Label>{'Tag Name'}</Label>
              <input className="form-control" type="text" {...register('name', { required: true })} />
              <span style={{ color: 'red' }}>{errors.name && 'First name is required'}</span>
            </FormGroup>
            <FormGroup className="col-md-12 mb-0">
              <Label>{'Tag color'}</Label>
              <input className="form-color d-block" type="color" {...register('color', { required: true })} defaultValue="#655af3" />
            </FormGroup>
          </div>
          <Button color='secondary'>{Save}</Button>&nbsp;&nbsp;
          <Button color='primary' onClick={tagToggle}>{Cancel}</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default CreateTag;
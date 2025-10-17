import { Fragment, useState, useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Modal, ModalBody, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap';
import { CheckCircle } from 'react-feather';
import { AddTask, TaskTitle, Collection, General, Description, Save, Cancel, NewTask } from 'utils/Constant';
import TaskContext from 'helper/Task';
import { taskListInterFace } from '@/pages/app/task';

const NewTaskClass = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<taskListInterFace>();
  const { addNewTask } = useContext(TaskContext);

  const [addModal, setaddModal] = useState(false);
  const addToggle = () => {
    setaddModal(!addModal);
  };


    const addTask: SubmitHandler<taskListInterFace> = (data) => {
    const { collection, description, title } = data
    if (collection !== '' && description !== "" && title !== "") {
      addNewTask(data)
      setaddModal(false);
    }
  };

  return (
    <Fragment>
      <Button color='' className='badge-light-primary btn-block btn-mail w-100' onClick={addToggle}><CheckCircle className="me-2" />  {NewTask}</Button>
      <Modal isOpen={addModal} toggle={addToggle} size="lg">
        <div className='modal-header'>
          <h5 className='modal-title'>{AddTask}</h5>
          <Button color='transprant' className='btn-close' onClick={addToggle}  ></Button>
        </div>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(addTask)}>
            <Row>
              <FormGroup className="col-md-12 create-group">
                <Label>{TaskTitle}</Label>
                <input className="form-control" type="text" {...register('title', { required: true })} />
                <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
              </FormGroup>
              <FormGroup className="col-md-12 create-group">
                <Label>{Collection}</Label>
                <Input className="js-example-disabled-results form-select" name="collection" type="select" >
                  <option value="general">{General}</option>
                  <option value="fs">{'Fs'}</option>
                </Input>
              </FormGroup>
              <FormGroup className="col-md-12 create-group">
                <Label>{Description}</Label>
                <input className="form-control" type="textarea" {...register('description', { required: true })} />
                <span style={{ color: 'red' }}>{errors.description && 'Description is required'}</span>
              </FormGroup>
            </Row>
            <Button color='secondary' className='me-1' >{Save}</Button>&nbsp;&nbsp;
            <Button color='primary' onClick={addToggle} >{Cancel}</Button>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default NewTaskClass;
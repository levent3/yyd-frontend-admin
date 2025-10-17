import { addNewBookMarkInterFace } from 'Types/BookMarkTypes';
import BookMarkContext from 'helper/Bookmark';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody, Row } from 'reactstrap';
import { AddBookmark, Cancel, Collection, Description, General, Group, MyBookmarks, Save, Title, WebUrl } from 'utils/Constant';
interface propsType { value: boolean, addToggle: () => void }

const BookmarkModal = ({ addToggle, value }: propsType) => {
  const { addNewBookmark } = useContext(BookMarkContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<addNewBookMarkInterFace>();
  const onSubmit: SubmitHandler<addNewBookMarkInterFace> = (data) => { addNewBookmark(data); addToggle(), reset() }

  return (
    <Modal isOpen={value} toggle={addToggle} size="lg" className='modal-bookmark'>
      <div className='modal-header'>
        <h5 className='modal-title'>{AddBookmark}</h5>
        <Button color='transprant' className='btn-close' onClick={addToggle} type='button'></Button>
      </div>
      <ModalBody>
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit)} >
          <Row className="form-row">
            <FormGroup className="create-group col-md-12">
              <Label>{WebUrl}</Label>
              <input className="form-control" type="text" autoComplete="off" {...register('url', { required: true })} />
              <span style={{ color: 'red' }}>{errors.url && 'Url is required'}</span>
            </FormGroup>
            <FormGroup className="create-group col-md-12">
              <Label>{Title}</Label>
              <input className="form-control" type="text" autoComplete="off"{...register('title', { required: true })} />
              <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
            </FormGroup>
            <FormGroup className="create-group col-md-12">
              <Label>{Description}</Label>
              <input className="form-control" type="textarea" autoComplete="off" {...register('desc', { required: true })} />
              <span style={{ color: 'red' }}>{errors.desc && 'Description is required'}</span>
            </FormGroup>
            <FormGroup className="create-group col-sm-6 mb-0">
              <Label>{Group}</Label><br />
              <select className="form-control digits" name="group">
                <option value="bookmark">{MyBookmarks}</option>
              </select>
            </FormGroup>
            <FormGroup className="create-group col-sm-6 mb-0" >
              <Label>{Collection}</Label><br />
              <select className=" form-control digits" name="collection">
                <option value="general">{General}</option>
                <option value="fs">{'fs'}</option>
              </select>
            </FormGroup>
          </Row>
          <Button color='secondary' type='submit' >{Save}</Button>&nbsp;&nbsp;
          <Button color='primary' onClick={addToggle}>{Cancel}</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default BookmarkModal;
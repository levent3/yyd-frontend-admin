import { AddNewBookMarkInterFace } from 'Types/BookMarkTypes';
import BookMarkContext from 'helper/Bookmark';
import { useContext } from 'react';
import {  SubmitHandler, useForm } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { Cancel, Collection, Description, EditBookmark, General, Group, MyBookmarks, Save, Title, WebUrl } from 'utils/Constant';

const EditBookmarkModal = () => {
  const {updateBookMark,editModal,setEditModal,setEditRow,editRow } = useContext(BookMarkContext);
  const editToggle = () => { setEditModal(!editModal); setEditRow(null)  };
  const { register, handleSubmit, formState: { errors } } = useForm<AddNewBookMarkInterFace>();
  
    const updatedBookMark: SubmitHandler<AddNewBookMarkInterFace> = (data) => {
      updateBookMark(editRow?.id,data)
      setEditModal(!editModal)
  
  };

  return (
      <Modal isOpen={editModal} toggle={editToggle} size="lg">
        <ModalHeader toggle={editToggle}>{EditBookmark}</ModalHeader>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(updatedBookMark)} >
            <div className="form-row">
              <FormGroup className="col-md-12">
                <Label>{WebUrl}</Label>
                <input className="form-control"  type="text" defaultValue={editRow?.website_url} autoComplete="off" {...register('url', { required: true })} />
                <span style={{ color: 'red' }}>{errors.url && 'Url is not required'}</span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Title}</Label>
                <input className="form-control"  type="text" defaultValue={editRow?.title} autoComplete="off"{...register('title', { required: true })} />
                <span style={{ color: 'red' }}>{errors.title && 'Title is required'}</span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Description}</Label>
                <input className="form-control"  type="textarea" defaultValue={editRow?.desc} autoComplete="off" {...register('desc', { required: true })}/>
                <span style={{ color: 'red' }}> {errors.desc && 'Description is required'}</span>
              </FormGroup>
              <FormGroup className="col mb-0">
                  <Label>{Group}</Label>
                  <select className="form-control digits" name="group">
                    <option value="bookmark">{MyBookmarks}</option>
                  </select>
                </FormGroup>
                <FormGroup className="col mb-0">
                  <Label>{Collection}</Label>
                  <select className=" form-control digits" name="collection">
                    <option value="general">{General}</option>
                    <option value="fs">{'fs'}</option>
                  </select>
                </FormGroup>
            </div>
            <Button color= 'primary' type= 'submit'>{Save}</Button>&nbsp;&nbsp;
            <Button color= 'secondary' onClick= {editToggle} >{Cancel} </Button>
          </Form>
        </ModalBody>
      </Modal>
  );
};
export default EditBookmarkModal;
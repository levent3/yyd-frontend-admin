import React, { Fragment, useState } from 'react';
import { Form, FormGroup, Input, ModalBody, Modal, Row, Button } from 'reactstrap';
import { AddCategory, Cancel, Save } from 'utils/Constant';

const CategoryCreate = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const categoryToggle = () => {
    setCategoryModal(!categoryModal);
  };

  return (
    <Fragment>
      <Button color= 'transparent' className='btn btn-category' onClick= {categoryToggle}  ><span className="title"> + {AddCategory}</span></Button>
      <Modal isOpen={categoryModal} toggle={categoryToggle}>
        <div className='modal-header'>
          <h5 className='modal-title'>{AddCategory}</h5>
          <Button  color= 'transprant' className= 'btn-close' onClick= {categoryToggle} type= 'button'  ></Button>
        </div>
        <ModalBody>
          <Form className="form-bookmark">
            <Row>
              <FormGroup className="col-md-12 my-0">
                <Input className="form-control" type="text" required placeholder="Enter category name" autoComplete="off" />
              </FormGroup>
            </Row>
            <Button color= 'secondary' onClick= {categoryToggle }>{Save}</Button>&nbsp;&nbsp;
            <Button color= 'primary' className= 'ms-1' onClick= {categoryToggle }>{Cancel}</Button>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

export default CategoryCreate;
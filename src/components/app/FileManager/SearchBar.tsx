import { searchBarPropsType } from 'Types/FileManagerType';
import React, { ChangeEvent } from 'react';
import { Form,  Input } from 'reactstrap';

const SearchBar = ({setSearchTerm,searchTerm}:searchBarPropsType) => {
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  return (
      <Form className='form-inline'>
        <div className='form-group mb-0'>
          <i className='fa fa-search'></i>
          <Input className='form-control-plaintext' type='text' value={searchTerm} onChange={(e) => handleChange(e)} placeholder='Search...' />
        </div>
      </Form>
  );
};
export default SearchBar;

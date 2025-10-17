import React, { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { Button, CardHeader, Form, Input, Media } from 'reactstrap';
import SearchBar from './SearchBar';
import { AddNew, ImgPath } from 'utils/Constant';
import { FiPlusSquare, FiUpload } from 'react-icons/fi';
import convertSize from 'convert-size';
import FileMainContent from './FileMainContent';
import { fileContentData } from 'Data/FileManager';
import msToTime from 'helper/MsToTime';
import Image from 'next/image';

const FileContent = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [myFile, setMyFile] = useState(fileContentData);

  const fileList = myFile.filter((data) => {
    if (searchTerm == null) return data;
    if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return data;
    }
  });

  const getFile = () => {
    document.getElementById('upfile')?.click();
  };
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const onFileUpload = () => {
    const date = new Date();
    const time = msToTime(date.getMilliseconds(), 'ago', 'long');
    let myFiles = [...myFile];
    if (selectedFile !== null) {
      myFiles.push({
        id: myFile.length + 1,
        name: `${selectedFile.name}`,
        size: `${convertSize(selectedFile.size)}`,
        modify: `${time}`,
        icon: 'f-22 fa fa-file-text-o txt-info',
        folderClass: "fa fa-folder f-36 txt-warning",
        title: "Endless Admin",
        folderSize: "101 files, 10mb",
      });
      setMyFile(myFiles);
      toast.success('File Upload Successfully !');
    } else {
      toast.error('Please Select at least one file !');
    }
  };

  return (
    <>
      <CardHeader>
        <Media>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Media body className='text-end'>
            <Form className='d-inline-flex'>
              <Button color='primary' className='d-flex align-items-center' onClick={getFile}>
                <FiPlusSquare className='me-1' />
                {AddNew}
              </Button>
              <div style={{ height: '0px', width: '0px', overflow: 'hidden' }}>
                <Input id='upfile' multiple type='file' onChange={(e) => onFileChange(e)} />
              </div>
            </Form>
            <Button color='' className='btn-outline-primary ms-2 d-flex align-items-center' onClick={onFileUpload}>
              <FiUpload className='me-1' />
              {'Upload'}
            </Button>
          </Media>
        </Media>
      </CardHeader>
      {fileList.length ? <FileMainContent searchTerm={searchTerm} fileList={fileList} myFile={myFile} /> : <Image className='img-fluid m-auto' src={`${ImgPath}/search-not-found.png`} alt='image' width={200} height={137} />}
    </>
  );
};
export default FileContent;

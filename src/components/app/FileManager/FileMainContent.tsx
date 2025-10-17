import { Fragment } from 'react';
import AllFile from './AllFile';
import { Files, Folders } from 'utils/Constant';
import FileList from './FileList';
import { CardBody, Media } from 'reactstrap';
import { fileMainContentPropsType } from 'Types/FileManagerType';
const FileMainContent = ({ myFile, fileList, searchTerm }: fileMainContentPropsType) => {
  return (
    <CardBody className='file-manager'>
      {!searchTerm && (
        <>
          <AllFile />
          <h6 className='mt-4'>{Folders}</h6>
          {
            <ul className='folder'>
              {myFile.map((item) =>
              (
                <Fragment key={item.id}>
                  {item.title && (
                    <li className='folder-box'>
                      <Media>
                        <i className={item.folderClass}></i>
                        <Media body className='ms-3'>
                          <h6 className='mb-0'>{item.title}</h6>
                          <p>
                            {item.folderSize}
                          </p>
                        </Media>
                      </Media>
                    </li>
                  )}
                </Fragment>
              )
              )}
            </ul>
          }
        </>
      )}
      <h6 className='mt-4'>{Files}</h6>
      <FileList myFile={fileList} />
    </CardBody>
  );
};

export default FileMainContent;

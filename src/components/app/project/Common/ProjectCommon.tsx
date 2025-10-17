import { commonProjectInterFace, projectListData } from 'Types/projectTypes';
import Image from 'next/image';
import { Col, Row, Progress, Media } from 'reactstrap';
import { Issues, Resolved, Comment, Done, ImgPath } from 'utils/Constant';

const ProjectCommon = ({ item }: commonProjectInterFace) => {
  return (
    <Col xxl={4} md={6} >
      <div className='project-box'>
        <span className={`badge ${item.badge === 'Done' ? 'badge-success' : 'badge-primary'}`}>{item.badge}</span>
        <h6>{item.title}</h6>
        <Media>
          <Image width={20} height={20} className='img-20 me-1 rounded-circle' src={`${ImgPath}/${item.img}`} alt='' />
          <Media body>
            <p>{item.sites}</p>
          </Media>
        </Media>
        <p>{item.desc}</p>
        <Row className='details'>
          <Col xs={6}>
            <span>{Issues} </span>
          </Col>
          <Col xs={6} className={item.badge === 'Done' ? 'font-success' : 'font-primary'}>
            {item.issue}
          </Col>
          <Col xs={6}>
            <span>{Resolved}</span>
          </Col>
          <Col xs={6} className={item.badge === 'Done' ? 'font-success' : 'font-primary'}>
            {item.resolved}
          </Col>
          <Col xs={6}>
            <span>{Comment}</span>
          </Col>
          <Col xs={6} className={item.badge === 'Done' ? 'font-success' : 'font-primary'}>
            {item.comment}
          </Col>
        </Row>
        <div className='customers'>
          <ul className='d-inline-block' >
            <li className='d-inline-block border-0' >
              <Image width={30} height={30} className='img-30 rounded-circle' src={`${ImgPath}/${item.customers_img1}`} alt='' />
            </li>
            <li className='d-inline-block border-0' >
              <Image width={30} height={30} className='img-30 rounded-circle' src={`${ImgPath}/${item.customers_img2}`} alt='' />
            </li>
            <li className='d-inline-block border-0' >
              <Image width={30} height={30} className='img-30 rounded-circle' src={`${ImgPath}/${item.customers_img3}`} alt='' />
            </li>
            <li className='d-inline-block border-0 ms-2' >
              <p className='f-12' >{`+${item.like} More`}</p>
            </li>
          </ul>
        </div>
        <div className='project-status mt-4'>
          <Media className='mb-0'>
            <p>{item.progress}% </p>
            <Media body className='text-end ms-1'>
              <span>{Done}</span>
            </Media>
          </Media>
          {item.progress === '100' ? <Progress className='sm-progress-bar' color='success' value={item.progress} style={{ height: '5px' }} /> : <Progress className='sm-progress-bar' striped color='primary' value={item.progress} style={{ height: '5px' }} />}
        </div>
      </div>
    </Col>
  );
};

export default ProjectCommon;

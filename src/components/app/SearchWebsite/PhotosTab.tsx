import { ImageAbout } from 'utils/Constant';
import { Row } from 'reactstrap';
import PagesSort from './Pages';
import GalleryImageDescription from '@/components/Miscellaneous/gallery/GalleryGridWithDescription/GalleryImageDescription';

const PhotosTab = () => {
  return (
    <>
      <div>
        <h6 className='mb-2 col-sm-12 digits'>{ImageAbout}</h6>
        <Row className='my-gallery gallery-with-description'>
          <GalleryImageDescription />
        </Row>
      </div>
      <PagesSort />
    </>
  );
};

export default PhotosTab;

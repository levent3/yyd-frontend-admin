import Image from 'next/image';
import { MARKJENCO, MARKJENCOEMAIL } from 'utils/Constant';
import { Media } from 'reactstrap';
import { ImgPath } from 'utils/Constant';

const HeaderProfile = () => {
  return (
      <Media>
        <div className="media-size-email">
          <Image height={51.63} width={51.63}  className= 'me-3 rounded-circle' src= {`${ImgPath}/user/user.png`} alt= "Image"  />
        </div>
        <Media body>
          <h6  className= 'f-w-600' >
            <a>{MARKJENCO}</a></h6>
          <p>{MARKJENCOEMAIL}</p>
        </Media>
      </Media>
  );
};

export default HeaderProfile;
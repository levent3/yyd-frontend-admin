import { organizationList } from 'Data/Contact';
import Image from 'next/image';
import { Fragment } from 'react';
import {  Media, TabPane } from 'reactstrap';
import { EmailAddress, Gender, General, Href, ImgPath, Personal, Print } from 'utils/Constant';

const TabOrg = () => {
  
  return (
    <Fragment>
      {organizationList.map((item, i) =>
        <TabPane tabId={item.activeTab} key={i}>
          <div className="profile-mail">
            <Media>
            <Image width={100} height={100} className="img-100 img-fluid m-r-20 rounded-circle update_img_0" src={`${ImgPath}/user/${item.image}`} alt="" />
              <Media body  className="mt-0">
                <h5><span className="first_name_5">{item.name}</span></h5>
                <p className= 'email_add_5' >{item.email}</p>
                <ul  >
                  <li><a href={Href} >{Print}</a></li>
                </ul>
              </Media>
            </Media>
            <div className="email-general">
              <h6>{General}</h6>
              <p>{EmailAddress}: <span className="font-primary email_add_5">{item.email}</span></p>
              <div className="gender">
                <h6>{Personal}</h6>
                <p>{Gender}: <span>{item.gender}</span></p>
              </div>
            </div>
          </div>
        </TabPane>
      )}
    </Fragment>
  );
};

export default TabOrg;
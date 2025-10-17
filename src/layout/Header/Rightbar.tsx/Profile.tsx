import Image from "next/image";
import Link from "next/link";
import FeatherIconCom from "CommonElements/Icons/FeatherIconCom";
import React from "react";
import { profileListData } from "Data/HeaderData";
import { Logout } from "../../../../utils/Constant/index";
import { useAuth } from "../../../context/AuthContext";

const Profile = () => {
  const { logout, user } = useAuth();

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Kullanıcı adını al (fullName varsa onu, yoksa username, o da yoksa 'Kullanıcı')
  const displayName = user?.fullName || user?.username || 'Kullanıcı';

  // Rol adını al (role.name varsa onu, yoksa 'Kullanıcı')
  const roleName = user?.role?.name || 'Kullanıcı';

  return (
    <li className="profile-nav onhover-dropdown pe-0 py-0">
      <div className="media profile-media">
        <Image className="b-r-10" src="/assets/images/dashboard/profile.png" alt="" width={35} height={35}/>
        <div className="media-body">
          <span>{displayName}</span>
          <p className="mb-0 font-roboto">
            {roleName} <i className="middle fa fa-angle-down" />
          </p>
        </div>
      </div>
      <ul className="profile-dropdown onhover-show-div">
        {profileListData &&
          profileListData.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                <FeatherIconCom iconName={item.icon} />
                <span>{item.text} </span>
              </Link>
            </li>
          ))}
        <li onClick={handleLogOut}>
          <a href="#123">
            <FeatherIconCom iconName={"LogIn"} />
            <span>{Logout}</span>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default Profile;

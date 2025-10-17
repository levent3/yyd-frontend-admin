import Link from "next/link";
import Image from "next/image";
import FeatherIconCom from "../../../../CommonElements/Icons/FeatherIconCom";
import layoutContext from "helper/Layout";
import { useContext } from "react";
import { ImgPath } from "utils/Constant";

const SidebarLogo = () => {
  const { setSideBarToggle, sideBarToggle } = useContext(layoutContext);
  return (
    <div className="logo-wrapper">
      <Link href={"/dashboard"}>
        <Image
          className="img-fluid"
          src={`${ImgPath}/logo/logoBlack.svg`}
          alt="Yeryüzü Doktorları"
          width={150}
          height={50}
          style={{ margin: '10px 0' }}
        />
      </Link>
      <div
        className="back-btn"
        onClick={() => setSideBarToggle(!sideBarToggle)}
      >
        <i className="fa fa-angle-left" />
      </div>
      <div
        className="toggle-sidebar"
        onClick={() => setSideBarToggle(!sideBarToggle)}
      >
        <FeatherIconCom
          iconName={"Grid"}
          className="status_toggle middle sidebar-toggle"
        />
      </div>
    </div>
  );
};

export default SidebarLogo;

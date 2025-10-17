import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImgPath } from "utils/Constant";
interface propsType {
  alignLogo?: string;
}
const CommonLogo = ({ alignLogo }: propsType) => {
  return (
    <Link
      className={`logo ${alignLogo ? alignLogo : ""} `}
      href="/dashboard"
    >
      <Image
        width={200}
        height={60}
        className="img-fluid"
        src={`${ImgPath}/logo/logoBlack.svg`}
        alt="Yeryüzü Doktorları"
        priority
      />
    </Link>
  );
};

export default CommonLogo;

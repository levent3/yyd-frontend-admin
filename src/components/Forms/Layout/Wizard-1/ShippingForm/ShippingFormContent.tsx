import { ChangeEvent, useState } from "react";
import NewAddressModal from "./NewAddressModal";
import ShowError from "../common/ShowError";
import { commonPropsTypes } from "Types/FormLayoutType";
import {SavedAddress,ShippingInformation,ShippingInformationText, ShippingMethod,} from "utils/Constant";
import { Button } from "reactstrap";
import HomeAndOfficeAddress from "./HomeAndOfficeAddress";
import ShippingMethods from "./ShippingMethods";

const ShippingFormContent = ({ callbackActive }: commonPropsTypes) => {
  const [radioBoxValues, setRadioBoxValues] = useState({address: "",shippingMethod: "",});
  const { address, shippingMethod } = radioBoxValues;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;
    setRadioBoxValues({ ...radioBoxValues, [name]: value });
  };

  const handleNextButton = () => {
    if (address !== "" && shippingMethod !== "") {
      callbackActive(3);
    } else {
      ShowError();
    }
  };
  const [showModal, setShowModal] = useState(false);
  const toggle = () => setShowModal(!showModal);
  return (
    <>
      <h6>{ShippingInformation}</h6>
      <p className="f-light">{ShippingInformationText}</p>
      <div className="shipping-title">
        <h6 className="mb-2">{SavedAddress}</h6>
        <Button onClick={toggle} color="primary">
          <i className="fa fa-plus-square f-20" />
        </Button>
        <NewAddressModal showModal={showModal} toggle={toggle} />
      </div>
      <HomeAndOfficeAddress radioBoxValues={radioBoxValues} getUserData={getUserData}/>
      <h6 className="mt-4 mb-2">{ShippingMethod}</h6>
      <ShippingMethods radioBoxValues={radioBoxValues} getUserData={getUserData} handleNextButton={handleNextButton}/>
    </>
  );
};

export default ShippingFormContent;

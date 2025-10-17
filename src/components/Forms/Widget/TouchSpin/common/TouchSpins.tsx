import { touchSpinsProp } from "Types/FormsType";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input } from "reactstrap";

const TouchSpins = ({ item, arrowIcon,spinClassName }: touchSpinsProp) => {
  const [touchSpinValue, setTouchSpinValue] = useState(Math.floor(Math.random() * 10));

  const decrementHandle = () => {
    if (touchSpinValue === 0) {
      toast.error("value is zero now you cannot decrement");
    } else {
      setTouchSpinValue(touchSpinValue - 1);
    }
  };
  return (
    <div className="touchspin-wrapper">
      <Button onClick={decrementHandle} color="transparent" className={`decrement-touchspin btn-touchspin touchspin-${item} ${spinClassName ?`spin-border-${item}`:""}`}>{arrowIcon ? <i className="fa fa-angle-left"> </i> : <i className="fa fa-minus"> </i>}</Button>
      <input className={`input-touchspin spin-outline-${item}`} type="number" defaultValue={touchSpinValue} readOnly />
      <Button onClick={() => setTouchSpinValue(touchSpinValue + 1)} color="transparent" className={`increment-touchspin btn-touchspin touchspin-${item} ${spinClassName ?`spin-border-${item}`:""}`}>{arrowIcon ? <i className="fa fa-angle-right"></i> : <i className="fa fa-plus"> </i>} </Button>
    </div>
  );
};

export default TouchSpins;

import { commonPrefixAndPostFixPropsType } from "Types/FormType";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap";
import { Post, Pre } from "utils/Constant";

const CommonPrefixAndPostFix = ({ postIcon, preIcon, preButton, PostButton, differentColor, }: commonPrefixAndPostFixPropsType) => {
  const [touchSpinValue, setTouchSpinValue] = useState(0);
  const decrementHandle = () => {
    if (touchSpinValue === 0) {
      toast.error("value is zero now you cannot decrement");
    } else {
      setTouchSpinValue(touchSpinValue - 1);
    }
  };
  return (
    <InputGroup>
      <Button color="transparent" onClick={decrementHandle} className={`decrement-touchspin btn-touchspin touchspin-${differentColor ? "warning" : "primary"}`}>
        <i className="fa fa-minus" />
      </Button>
      {postIcon ? <InputGroupText>$</InputGroupText> : ""}
      {preButton ? (<Button outline color="warning" >{Pre}</Button>) : ("")}
      <input className="input-touchspin spin-outline-primary" type="number" defaultValue={touchSpinValue} readOnly />
      {preIcon ? <InputGroupText>%</InputGroupText> : ""}
      {PostButton ? (<Button outline color="warning">{Post}</Button>) : ("")}
      <Button color="transparent" onClick={() => setTouchSpinValue(touchSpinValue + 1)} className={`increment-touchspin btn-touchspin touchspin-${differentColor ? "warning" : "primary"}`}>
        <i className="fa fa-plus"> </i>
      </Button>
    </InputGroup>
  );
};

export default CommonPrefixAndPostFix;

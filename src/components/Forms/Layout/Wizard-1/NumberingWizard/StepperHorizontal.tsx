import { stepperHorizontalPropsType } from "Types/FormLayoutType";

const StepperHorizontal = ({ level }: stepperHorizontalPropsType) => {
  let stepperHorizontalData = ["Basic Info", "Cart Info", "Feedback", "Finish"];
  return (
    <div className="stepper-horizontal">
      {stepperHorizontalData.map((data, index) => (
        <div key={index} className={`stepper-one  step ${
            level > index + 1 ? "done active " : ""
          }`}
        >
          <div className="step-circle">
            <span>{index + 1}</span>
          </div>
          <div className="step-title">{data}</div>
          <div className="step-bar-left" />
          <div className="step-bar-right" />
        </div>
      ))}
    </div>
  );
};

export default StepperHorizontal;

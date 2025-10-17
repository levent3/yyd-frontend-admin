import { variationOfSwitchesData } from "Data/Forms/Widget";
import { Input, Label, Media } from "reactstrap";

const DifferentSwitches = () => {
  return (
    <>
      {variationOfSwitchesData.map((data, index) =>
        data.heading ? (<li key={index}><p>{data.heading}</p></li>) : (
          <li className="tg-list-item" key={index}>
            <Media >
              <Media body className={`text-end ${data.mediaBodyClass ? data.mediaBodyClass : ""}`}>
                <Label className="switch mb-0 square-checked">
                  <Input type="checkbox" defaultChecked />
                  <span className={`switch-state bg-${data.color} rounded-2`} />
                </Label>
              </Media>
            </Media>
          </li>
        )
      )}
    </>
  );
};

export default DifferentSwitches;

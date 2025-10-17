import CardHead from "CommonElements/CardHead";
import { Card, CardBody, Col } from "reactstrap";
import {Creativity,KhoKho,ReadingBooks,SelectSizingHeading,YourHobbies,} from "../../../../../utils/Constant/index";
import { selectSizingHeaderData } from "Data/Forms/Control";

const SelectSizing = () => {
  return (
    <Col md={6}>
      <Card>
        <CardHead title={SelectSizingHeading} subTitle={selectSizingHeaderData}/>
        <CardBody>
          <select className="form-select form-select-sm">
            <option selected>{YourHobbies}</option>
            <option value={1}>{KhoKho}</option>
            <option value={2}>{ReadingBooks}</option>
            <option value={3}>{Creativity}</option>
          </select>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SelectSizing;

import { Col, Container,  Row } from "reactstrap";
import CommonTable from "./common/CommonTable";
import { Alerts, Badges, Checkbox, Input, ProgressBarHeading, RadioButtons, Select, Switch, TooltipTriggers, UIComponents } from "utils/Constant";
import {alertTableData,badgesTableData,checkboxTableData,inputTableData,progressTableData,radioBoxTableData,selectBoxTableData,switchTableData,toolTipTriggersData,uiComponentTableData,} from "Data/table/TableComponentData";

const TableComponentContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <CommonTable Heading={UIComponents} tableData={uiComponentTableData}/>
          <CommonTable Heading={Alerts} tableData={alertTableData} />
          <CommonTable Heading={ProgressBarHeading} tableData={progressTableData}/>
          <CommonTable Heading={Checkbox} tableData={checkboxTableData} tableClassName="checkbox-td-width" />
          <CommonTable Heading={RadioButtons} tableData={radioBoxTableData} tableClassName="radio-first-col-width" />
          <CommonTable Heading={Select} tableData={selectBoxTableData} tableClassName="checkbox-td-width" />
          <CommonTable Heading={Input} tableData={inputTableData} tableClassName="checkbox-td-width" />
          <CommonTable Heading={Badges} tableData={badgesTableData}  tdClassName="pills-component" />
          <CommonTable Heading={TooltipTriggers} tableData={toolTipTriggersData}  />
          <CommonTable Heading={Switch} tableData={switchTableData}  tdClassName="pills-component" />          
        </Col>
      </Row>
    </Container>
  );
};

export default TableComponentContainer;

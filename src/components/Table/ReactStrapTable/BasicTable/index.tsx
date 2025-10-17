import { Container, Row } from "reactstrap";
import BasicTableClass from "./BasicTableClass";
import InverseTableClass from "./InverseTableClass";
import HoverableRowsClass from "./HoverableRows";
import InversePrimaryClass from "./InversTableClass";
import CaptionClass from "./Caption";
import TableHeadClass from "./TableHeadClass";
import StripeInverseClass from "./StripInverseClass";
import BreckPointClass from "./BreckPointClass";
import ResponsiveClass from "./ResponsiveClass";
import SizingTable from "./SizingTable";
import CustomHoverClass from "./CustomeHover";
import DashedBorderClass from "./DashedBorderClass";

const BasicTablesContainer = () => {
  return (
    <Container className="basic_table" fluid>
      <Row >
        <BasicTableClass />
        <InverseTableClass />
        <HoverableRowsClass />
        <InversePrimaryClass />
        <CaptionClass />
        <TableHeadClass />
        <StripeInverseClass />
        <BreckPointClass />
        <ResponsiveClass />
        <SizingTable />
        <CustomHoverClass />
        <DashedBorderClass />
      </Row>
    </Container>
  );
};

export default BasicTablesContainer;

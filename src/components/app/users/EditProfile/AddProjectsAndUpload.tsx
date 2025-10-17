import { Card,  Col, Table } from 'reactstrap';
import {AddprojectAndUpload,Date,Price,ProjectName,Status,} from "utils/Constant";
import AddProjectsAndUploadTableBody from "./AddProjectsAndUploadTableBody";
import CommonCardHeading from 'CommonElements/CommonCardHeading';

const AddProjectsAndUpload = () => {
  return (
    <Col md={12}>
      <Card>
        <CommonCardHeading Heading={AddprojectAndUpload} bigHeadingClassName="card-title mb-0" />
        <div className="table-responsive">
          <Table className="table card-table table-vcenter text-nowrap">
            <thead>
              <tr>
                <th>{ProjectName}</th>
                <th>{Date}</th>
                <th>{Status}</th>
                <th>{Price}</th>
                <th />
              </tr>
            </thead>
            <AddProjectsAndUploadTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default AddProjectsAndUpload;

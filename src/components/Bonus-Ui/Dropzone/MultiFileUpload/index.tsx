import CardHead from "CommonElements/CardHead";
import Dropzone from "react-dropzone-uploader";
import { Card, CardBody, Col } from "reactstrap";

const MultiFileUpload = () => {

  const multiFileUpload = [
    {
      text: "Use the ",
      code: `Dropzone`,
    },
    {
      text: " component through create upload files.",
      code: `[https://www.npmjs.com/package/react-filepond]`,
    },
  ];

  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };

  return (
    <Col lg={6}>
      <Card>
        <CardHead title="Multi File Upload" subTitle={multiFileUpload} />
        <CardBody>
          <Dropzone getUploadParams={getUploadParams} accept="image/*" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultiFileUpload;

import CardHead from "CommonElements/CardHead";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col } from "reactstrap";
import { Copy, CopyFromParagraph, CopyParagraph, copyText, copyTextParagraph } from "utils/Constant";

const CopyPortionFromParagraph = () => {
  return (
    <Col sm={12} md={6}>
      <Card className="height-equal">
        <CardHead title={CopyParagraph} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="f-16">{CopyFromParagraph}</p>
            <h6 className="border rounded card-body f-w-300">
              <span className="bg-primary text-white p-1">{copyText}</span>{copyTextParagraph}
            </h6>
            <div className="mt-3 text-end">
              <CopyToClipboard text={copyText} onCopy={() => toast.info("text successfully copied")}>
                <Button className="btn-clipboard" color="secondary"><i className="fa fa-copy"></i> {Copy}</Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CopyPortionFromParagraph;

import CardHead from "CommonElements/CardHead";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col } from "reactstrap";
import { ClipboardOnParagraphHeading, ClipboardOnParagraphValue, Copy, CopyFromParagraph, } from "utils/Constant";

const ClipboardOnParagraph = () => {
  return (
    <Col sm={12} md={6}>
      <Card className="height-equal">
        <CardHead title={ClipboardOnParagraphHeading} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="f-16">{CopyFromParagraph}</p>
            <CopyToClipboard text={ClipboardOnParagraphValue} onCopy={() => toast.info("text successfully copied")}>
              <h6 className="border rounded card-body f-w-300">{ClipboardOnParagraphValue}</h6>
            </CopyToClipboard>
            <div className="mt-3 text-end">
              <CopyToClipboard text={ClipboardOnParagraphValue} onCopy={() => toast.info("text successfully copied")}>
                <Button className="btn-clipboard" color="info">
                  <i className="fa fa-copy"></i> {Copy}
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ClipboardOnParagraph;

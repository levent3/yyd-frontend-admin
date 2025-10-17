import CardHead from "CommonElements/CardHead";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col, Input } from "reactstrap";
import {ClipBoardOnTextArea,ClipboardOnTextAreaValue,Copy,Cut,CutCopyFromTextArea,} from "utils/Constant";

const ClipboardOnTextArea = () => {
  const [clipBoardOnTextAreaValue, setClipBoardOnTextAreaValue] = useState(ClipboardOnTextAreaValue);

  return (
    <Col sm={12} md={6}>
      <Card>
        <CardHead title={ClipBoardOnTextArea} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="f-16">{CutCopyFromTextArea}</p>
            <Input type="textarea" onChange={(event) => setClipBoardOnTextAreaValue(event.target.value)} className="f-14" rows={3} value={clipBoardOnTextAreaValue}/>
            <div className="mt-3 text-end">
              <CopyToClipboard text={clipBoardOnTextAreaValue} onCopy={() => toast.info("text successfully copied")}>
                <Button className="btn-clipboard me-2" color="warning">
                  <i className="fa fa-copy"></i> {Copy}
                </Button>
              </CopyToClipboard>
              <CopyToClipboard text={clipBoardOnTextAreaValue} onCopy={() => { toast.info("text successfully cut"); setClipBoardOnTextAreaValue("");}}>
                <Button className="btn-clipboard-cut" color="success">
                  <i className="fa fa-cut"></i> {Cut}
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ClipboardOnTextArea;

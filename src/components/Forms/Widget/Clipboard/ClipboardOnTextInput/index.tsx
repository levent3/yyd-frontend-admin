import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Card, CardBody, Col, Input } from "reactstrap";
import { toast } from "react-toastify";
import CardHead from "CommonElements/CardHead";
import {ClipBoardOnTextInputHeading,Copy,Cut,CutCopyFromInputArea,} from "utils/Constant";

const ClipboardOnTextInput = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Col sm={12} md={6}>
      <Card>
        <CardHead title={ClipBoardOnTextInputHeading} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="f-16">{CutCopyFromInputArea}</p>
            <Input type="text" placeholder="type some text to copy / cut" value={inputValue} onChange={(event) => setInputValue(event.target.value)}/>
            <div className="mt-3 text-end">
              <CopyToClipboard text={inputValue} onCopy={() => toast.info("text successfully copied")}>
                <Button className="btn-clipboard me-2" color="primary"><i className="fa fa-copy"></i> {Copy}</Button>
              </CopyToClipboard>
              <CopyToClipboard text={inputValue} onCopy={() => { toast.info("text successfully cut"); setInputValue("");}}>
                <Button className="btn-clipboard-cut" color="secondary">
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

export default ClipboardOnTextInput;

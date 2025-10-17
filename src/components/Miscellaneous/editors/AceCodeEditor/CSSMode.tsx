import { Card, CardBody, Col } from "reactstrap";
import AceEditor from "react-ace";
import { cssData } from "Data/editor";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { CSSModeHeading, SupportTicket } from "utils/Constant";

const CssMode = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeading smallHeading={CSSModeHeading} />
        <CardBody>
          <AceEditor
            className="aceEditor w-auto"
            mode="css"
            theme="monokai"
            value={cssData}
            name="blah2"
            setOptions={{ useWorker: false }}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            editorProps={{ $blockScrolling: true }}
            highlightActiveLine={true}
          />
        </CardBody>
      </Card>
    </Col>
  );
};
export default CssMode;

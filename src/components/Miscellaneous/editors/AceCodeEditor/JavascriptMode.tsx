import { Card, CardBody, Col } from "reactstrap";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { javaData } from "Data/editor";
import CommonCardHeading from "CommonElements/CommonCardHeading";
import { JavascriptModeHeading } from "utils/Constant";

const JavascriptMode = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeading smallHeading={JavascriptModeHeading} />
        <CardBody>
          <AceEditor
            className="aceEditor w-auto"
            mode="javascript"
            theme="monokai"
            value={javaData}
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
export default JavascriptMode;

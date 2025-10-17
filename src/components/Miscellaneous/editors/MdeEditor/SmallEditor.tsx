import SimpleMDE from "react-simplemde-editor";
import { useState} from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Instructions, MNDeditortext, SecondExample } from "utils/Constant";
import CommonCardHeading from "CommonElements/CommonCardHeading";

const SmallEditor = () => {
  const [value, setValue] = useState("");
  const handelChange = (newValue:string) => {setValue(newValue);};
  return (
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
            <CommonCardHeading smallHeading={SecondExample} />
              <CardBody>
                <Row>
                  <Col md={6}>
                    <SimpleMDE
                      id="editor_container"
                      options={{autofocus: true,spellChecker: false,}}
                      onChange={handelChange}
                    />
                  </Col>
                  <Col md={6} className="reader">
                    <h3>{Instructions}</h3>
                    <p>{MNDeditortext}</p>
                    <br />
                    {value}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};
export default SmallEditor;

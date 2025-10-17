import CardHead from "CommonElements/CardHead";
import { groupButtonData } from "Data/Buttons/GroupButtonsData";
import { Row, Col, Card, CardBody, ButtonGroup, Button } from "reactstrap";

const GroupButtonClass = () => {
  return (
    <>
      {groupButtonData.map((item, i) => (
        <Col xs={12} key={i}>
          <Card>
            <CardHead title={item.title} />
            <CardBody className="btn-group-showcase">
              <Row>
                {item.color.map((colorItem, i) => (
                  <Col
                    xxl={4}
                    md={6}
                    sm={12}
                    key={i}
                    className={`${
                      colorItem.colClass ? colorItem.colClass : ""
                    }`}
                  >
                    <ButtonGroup className={colorItem.btnClass}>
                      <Button
                        size={colorItem.size ? colorItem.size : ""}
                        color={
                          colorItem.leftButtonClass
                            ? colorItem.leftButtonClass
                            : colorItem.colorClass
                        }
                      >
                        {colorItem.title1}
                      </Button>
                      <Button
                        size={colorItem.size ? colorItem.size : ""}
                        color={
                          colorItem.differentClass
                            ? colorItem.differentClass
                            : colorItem.colorClass
                        }
                      >
                        {colorItem.title2}
                      </Button>
                      <Button
                        size={colorItem.size ? colorItem.size : ""}
                        color={
                          colorItem.rightButtonClass
                            ? colorItem.rightButtonClass
                            : colorItem.colorClass
                        }
                      >
                        {colorItem.title3}
                      </Button>
                    </ButtonGroup>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default GroupButtonClass;

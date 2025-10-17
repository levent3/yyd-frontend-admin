import { Search } from "react-feather";
import { Col, FormGroup, Input } from "reactstrap";
import { ImgPath } from "utils/Constant";

const KnowledgebaseHelp = () => {
  return (
    <Col xs={12}>
      <div
        className="knowledgebase-bg b-center bg-size"
        style={{
          backgroundImage: `url(${ImgPath}/knowledgebase/bg_1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          display: "block",
        }}
      />
      <div className="knowledgebase-search">
        <div>
          <h3>How Can I help you?</h3>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="form-inline"
          >
            <FormGroup className="form-mb-0">
              <Search />
              <Input
                className="form-control-plaintext"
                type="text"
                placeholder="Type question here"
              />
            </FormGroup>
          </form>
        </div>
      </div>
    </Col>
  );
};

export default KnowledgebaseHelp;

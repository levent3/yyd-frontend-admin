import { CardHeader, Input, InputGroup } from "reactstrap";
import { Search } from "utils/Constant";

const SearchInput = () => {
  return (
    <CardHeader>
      <form className="theme-form">
        <InputGroup className=" m-0 flex-nowrap">
          <Input
            className="form-control-plaintext"
            type="search"
            placeholder="Pixelstrap .."
          />
          <span className="btn btn-primary input-group-text">{Search}</span>
        </InputGroup>
      </form>
    </CardHeader>
  );
};

export default SearchInput;

import { CardHeader } from "reactstrap";
import { Todo } from "utils/Constant";

const TodoHeader = () => {
  return (
    <CardHeader className="d-flex align-items-center justify-content-between">
      <h3 className="mb-0">{Todo}</h3>
    </CardHeader>
  );
};

export default TodoHeader;

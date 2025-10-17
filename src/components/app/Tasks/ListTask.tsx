import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Printer } from "react-feather";
import { Card, CardHeader } from "reactstrap";
import { CreatedByMe, Href, Print } from "utils/Constant";
import CreatedByme from "./CreatedByme";

const ListOfTask = () => {
  const componentRef = useRef<any>();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h5 className="mb-0">{CreatedByMe}</h5>
        <a href={Href} onClick={handlePrint}>
          <Printer className="me-2" />
          {Print}
        </a>
      </CardHeader>
      <CreatedByme ref={componentRef} />
    </Card>
  );
};

export default ListOfTask;

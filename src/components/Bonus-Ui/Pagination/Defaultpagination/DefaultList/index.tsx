import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href } from "utils/Constant";

const DefaultList = () => {
  return (
    <Pagination
      className="pagination-primary pagin-border-primary d-flex"
      aria-label="Page navigation example"
    >
      <PaginationItem>
        <PaginationLink href={Href} previous>
          Previous
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={Href}>1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={Href}>2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={Href}>3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href={Href} next>
          Next
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default DefaultList;

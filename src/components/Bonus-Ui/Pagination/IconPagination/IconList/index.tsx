import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href } from "utils/Constant";

const IconList = () => {
  const NextData: string[] = ["1", "2", "3", "...", "20"];

  return (
    <Pagination className="pagination-secondary pagin-border-secondary mb-3 d-flex" aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink href={Href} first></PaginationLink>
      </PaginationItem>
      {NextData.map((item, index) => (
        <PaginationItem key={index}>
          <PaginationLink href={Href}>{item}</PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationLink href={Href} last></PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default IconList;

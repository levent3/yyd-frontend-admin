import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Href } from 'utils/Constant'

const ActiveList = () => {
    return (
        <Pagination className="pagination-success pagin-border-success mb-3 d-flex" aria-label="Page navigation example">
            <PaginationItem disabled><PaginationLink href={Href} previous>{`Previous`}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
            <PaginationItem active><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href} next>{`Next`}</PaginationLink></PaginationItem>
          </Pagination>

    )
}

export default ActiveList
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Href } from 'utils/Constant'

const RoundedList = () => {
const NextData: string[] = ["1", "2", "3", "...", "20"];

    return (
        <Pagination className="pagination pagination-dark pagin-border-dark d-flex justify-content-start" aria-label="Page navigation example">
        <PaginationItem><PaginationLink className="rounded-circle me-2" href={Href} first ></PaginationLink></PaginationItem>
        {NextData.map((item,index)=>(<PaginationItem key={index}><PaginationLink  className="rounded-circle me-2" href={Href}>{item}</PaginationLink></PaginationItem>))}
        <PaginationItem><PaginationLink className="rounded-circle me-2" href={Href} last></PaginationLink></PaginationItem>
      </Pagination>

    )
}

export default RoundedList
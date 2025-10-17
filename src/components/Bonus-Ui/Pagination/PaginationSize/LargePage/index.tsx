import { AlignPageData } from 'Data/Bonus-Ui/PaginationData'
import React from 'react'
import { Nav, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import { Href } from 'utils/Constant'

const LargePage = () => {
    return (
        <Pagination size="lg" className="pagination-info pagin-border-info m-b-30 d-flex" aria-label="Page navigation example">
        <PaginationItem><PaginationLink href={Href} previous>{`Previous`}</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href={Href} next>{`Next`}</PaginationLink></PaginationItem>
      </Pagination>
    )
}

export default LargePage
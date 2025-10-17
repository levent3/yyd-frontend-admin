import { commonTableBodyPropsType } from 'Types/TableType'
import { Fragment } from 'react'
import { Table } from 'reactstrap'

const CommonTableBody = ({tableData ,tableClassName,tdClassName}:commonTableBodyPropsType) => {
  return (
    <Table bordered className={tableClassName?tableClassName:""} >
      <tbody>
        {tableData.map((data, index) => (
          <tr key={index}>
            <td className={tdClassName?tdClassName:""}>{data.tittle}</td>
            <td className={index === 0 ? "w-50" : ""}>{data.tableColData}</td>
            <td>
              <span>
                {data.details &&
                  data.details.map((item, index2) => (
                    <Fragment key={index2}>
                      {item.text}
                      {item.code ? <code>{item.code}</code> : ""}
                    </Fragment>
                  ))}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CommonTableBody
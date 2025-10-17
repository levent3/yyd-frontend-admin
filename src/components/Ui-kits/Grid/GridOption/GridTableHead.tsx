import { GridtableHeadData } from 'Data/Ui-kits/GridData'
import React from 'react'

const GridTableHead = () => {
    return (
        <thead>
            <tr>
                <th></th>
                {
                    GridtableHeadData && GridtableHeadData.map((item, index) => (
                        <th key={index} className="text-center">{item.text1}<br />
                            {item.class ? <small className={item.class}>{item.text2}</small> : <small>{item.text2}</small>}
                        </th>
                    ))
                }
            </tr>
        </thead>
    )
}

export default GridTableHead
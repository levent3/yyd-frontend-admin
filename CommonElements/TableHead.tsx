
import { tableHeadType } from 'Types/CommonElementType'
import React from 'react'

type propsTypes = {
    headeData: tableHeadType[]
}

const TableHead = ({ headeData }: propsTypes) => {
    return (
        <thead>
            <tr>
                {
                    headeData && headeData.map((item: tableHeadType, index: number) => (
                        item.class
                            ? <th key={index} className={item.class}>{item.name}</th>
                            : <th key={index}>{item.name}</th>
                    ))
                }
            </tr>
        </thead>
    )
}

export default TableHead
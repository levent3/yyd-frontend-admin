import React from 'react'
import { Classprefix, Collapsedtostart, Columnordering, Gridbehavior, Gutterwidth, Gutterwidthno, Horizontaltimes, Maxcontainerwidth, Nestable, None, Offsets, Yes, col, collg, colmd, colsm, colxl, colxxl, ofcolumns, px1140, px1320, px540, px720, px960 } from 'utils/Constant'

const GridTableBody = () => {
    return (
        <tbody>
            <tr>
                <th className="text-nowrap" scope="row">{Gridbehavior}</th>
                <td>{Horizontaltimes}</td>
                <td colSpan={5}>{Collapsedtostart}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{Maxcontainerwidth}</th>
                <td>{None}</td>
                <td>{px540}</td>
                <td>{px720}</td>
                <td>{px960}</td>
                <td>{px1140}</td>
                <td>{px1320}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{Classprefix}</th>
                <td><code>{col}</code></td>
                <td><code>{colsm}</code></td>
                <td><code>{colmd}</code></td>
                <td><code>{collg}</code></td>
                <td><code>{colxl}</code></td>
                <td><code>{colxxl}</code></td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{ofcolumns}</th>
                <td colSpan={6}>12</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{Gutterwidth}</th>
                <td colSpan={6}>{Gutterwidthno}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{Nestable}</th>
                <td colSpan={6}>{Yes}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{Offsets}</th>
                <td colSpan={6}>{Yes}</td>
            </tr>
            <tr>
                <th className="text-nowrap" scope="row">{Columnordering}</th>
                <td colSpan={6}>{Yes}</td>
            </tr>
        </tbody>
    )
}

export default GridTableBody
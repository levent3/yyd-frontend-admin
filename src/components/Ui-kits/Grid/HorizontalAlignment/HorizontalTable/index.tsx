import React from 'react'
import { Class, HorizontalClass, HorizontalPosition, Valueclass } from 'utils/Constant'

const HorizontalTable = () => {
    return (
        <div className="table-responsive">
            <table className="w-100">
                <tbody />
                <tbody><tr>
                    <th>{Class}</th>
                    <th>{Valueclass}</th>
                </tr>
                    <tr>
                        <td><code>{HorizontalClass}</code></td>
                        <td>{HorizontalPosition}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default HorizontalTable
import React from 'react'
import { Heading1, SubHeading, h1, h2, h3, h4, h5, h6 } from 'utils/Constant'

const ColorHeadBody = () => {
    return (
        <tbody>
            <tr>
                <td><code>{h1}</code></td>
                <td>
                    <h1><span className="txt-primary"> {Heading1}</span>{SubHeading}</h1>
                </td>
            </tr>
            <tr>
                <td><code>{h2}</code></td>
                <td>
                    <h2><span className="txt-secondary"> {Heading1}</span>{SubHeading}</h2>
                </td>
            </tr>
            <tr>
                <td><code>{h3}</code></td>
                <td>
                    <h3><span className="txt-success"> {Heading1}</span>{SubHeading}</h3>
                </td>
            </tr>
            <tr>
                <td><code>{h4}</code></td>
                <td>
                    <h4><span className="txt-info"> {Heading1}</span>{SubHeading}</h4>
                </td>
            </tr>
            <tr>
                <td><code>{h5}</code></td>
                <td>
                    <h5><span className="txt-warning"> {Heading1}</span>{SubHeading}</h5>
                </td>
            </tr>
            <tr>
                <td className="pb-0"><code>{h6}</code></td>
                <td className="pb-0">
                    <h5><span className="txt-danger"> {Heading1}</span>{SubHeading}</h5>
                </td>
            </tr>
        </tbody>
    )
}

export default ColorHeadBody
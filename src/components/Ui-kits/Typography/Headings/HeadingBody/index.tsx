import React from 'react'
import { Heading1MEGA, Heading2XL, Heading3LARGE, Heading4MEDIUM, Heading5SMALL, Heading6, h1, h2, h3, h4, h5, h6, rem1, rem125, rem15, rem175, rem2, rem25 } from 'utils/Constant'

const HeadingBody = () => {
    return (
        <tbody>
            <tr>
                <td><code>{h1}</code></td>
                <td><h1 className="mb-0">{rem25}</h1></td>
                <td><h1><span>{Heading1MEGA}</span></h1></td>
            </tr>
            <tr>
                <td><code>{h2}</code></td>
                <td><h2 className="mb-0">{rem2}</h2></td>
                <td><h2><span> {Heading2XL}</span></h2></td>
            </tr>
            <tr>
                <td><code>{h3}</code></td>
                <td><h3 className="mb-0">{rem175}</h3></td>
                <td><h3><span> {Heading3LARGE}</span></h3></td>
            </tr>
            <tr>
                <td><code>{h4}</code></td>
                <td><h4 className="mb-0">{rem15}</h4></td>
                <td><h4><span> {Heading4MEDIUM}</span></h4></td>
            </tr>
            <tr>
                <td><code>{h5}</code></td>
                <td><h5 className="mb-0">{rem125}</h5></td>
                <td><h5><span> {Heading5SMALL}</span></h5></td>
            </tr>
            <tr>
                <td className="pb-0"><code>{h6}</code></td>
                <td className="pb-0"><h6 className="mb-0">{rem1}</h6></td>
                <td className="pb-0"><h5><span>{Heading6}</span></h5></td>
            </tr>
        </tbody>
    )
}

export default HeadingBody
import React from 'react'
import { CardHeader } from 'reactstrap'

type propsType = {
    headClass?: string;
    title: string;
    message?: string;
    spanClass?: string
}

const DashboardHead = ({ headClass, title, message, spanClass }: propsType) => {
    return (
        <CardHeader className={headClass}>
            <h5>{title}</h5>
            {message && <span className={spanClass ? spanClass : 'f-14 f-w-500 f-light'}>{message}</span>}
        </CardHeader>
    )
}

export default DashboardHead
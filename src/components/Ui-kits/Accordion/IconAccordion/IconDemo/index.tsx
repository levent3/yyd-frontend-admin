import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom';
import { iconDemoData } from 'Data/Bonus-Ui//AccordionData';
import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const IconDemo = () => {
    const [open, setOpen] = useState('')

    const toggle = (id: string) => id !== open ? setOpen(id) : setOpen('');

    return (
        //@ts-ignore
        <Accordion open={open} toggle={toggle}>
            {
                iconDemoData && iconDemoData.map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionHeader targetId={item.id}>
                            <FeatherIconCom iconName={item.icon} />
                            {item.head}
                            <FeatherIconCom iconName={open === item.id ? 'ChevronUp' : 'ChevronDown'} className='svg-color' />
                        </AccordionHeader>
                        <AccordionBody accordionId={item.id}>
                            {item.text}
                        </AccordionBody>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}

export default IconDemo
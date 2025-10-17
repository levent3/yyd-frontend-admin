import FeatherIconCom from 'CommonElements/Icons/FeatherIconCom'
import { OutlineData } from 'Data/Bonus-Ui/AccordionData'
import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'

const OutlineDemo = () => {

    const [open, setOpen] = useState('')
    const toggle = (id: string) => { open === id ? setOpen('') : setOpen(id) }

    return (
        //@ts-ignore
        <Accordion open={open} toggle={toggle} className='dark-accordion accordion-wrapper'>
            {
                OutlineData && OutlineData.map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionHeader targetId={item.id}>
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

export default OutlineDemo
import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap'
import FeatherIconCom from '../../../../../../CommonElements/Icons/FeatherIconCom';
import { Elementswebdesign, SimpleAccordionText, SimpleAccordionText1, SimpleAccordionText2, Usewebdesign, Webdesignersdo } from 'utils/Constant';

const SimpleDemo = () => {
    const [open, setOpen] = useState('1');

    const toggle = (id: string) => {
        open === id ? setOpen('') : setOpen(id);
    };
    return (
        //@ts-ignore
        <Accordion open={open} toggle={toggle} className='dark-accordion'>
            <AccordionItem>
                <AccordionHeader targetId="1">
                    {Webdesignersdo}
                    <FeatherIconCom iconName={open === '1' ? 'ChevronUp' : 'ChevronDown'} className='svg-color' />
                </AccordionHeader>
                <AccordionBody accordionId="1">
                    {SimpleAccordionText}
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="2">
                    {Usewebdesign}
                    <FeatherIconCom iconName={open === '2' ? 'ChevronUp' : 'ChevronDown'} className='svg-color' />
                </AccordionHeader>
                <AccordionBody accordionId="2">
                    {SimpleAccordionText1}
                </AccordionBody>
            </AccordionItem>
            <AccordionItem>
                <AccordionHeader targetId="3">
                    {Elementswebdesign}
                    <FeatherIconCom iconName={open === '3' ? 'ChevronUp' : 'ChevronDown'} className='svg-color' />
                </AccordionHeader>
                <AccordionBody accordionId="3">
                    {SimpleAccordionText2}
                </AccordionBody>
            </AccordionItem>
        </Accordion>
    )
}

export default SimpleDemo
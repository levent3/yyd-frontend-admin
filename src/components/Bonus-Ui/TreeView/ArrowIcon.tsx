import React from 'react'
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import cx from "classnames";

export const ArrowIcon = ({ isOpen, className }: { isOpen: boolean; className?: string }) => {
    const baseClass = "arrow";
    const classes = cx(
        baseClass,
        { [`${baseClass}--closed`]: !isOpen },
        { [`${baseClass}--open`]: isOpen },
        className
    );
    return <IoMdArrowDropright className={classes} />;
};


export const CheckBoxIcon = ({ variant, ...rest }: any) => {
    switch (variant) {
        case "all":
            return <FaCheckSquare {...rest} />;
        case "none":
            return <FaSquare {...rest} />;
        case "some":
            return <FaMinusSquare {...rest} />;
        default:
            return null;
    }
};
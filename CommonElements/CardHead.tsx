import React, { Fragment } from "react";
import { CardHeader } from "reactstrap";

type objectType = {
  text?: string;
  code?: string;
};
type propsTypes = {
  headClass?: string;
  title: string;
  subTitle?: objectType[];
};

const CardHead = ({ headClass, title, subTitle }: propsTypes) => {
  return (
    <CardHeader className={headClass}>
      <h4 className="mb-0">{title}</h4>
      {subTitle && (
        <p className="f-m-light mt-1">
          {subTitle.map((data, index) => (
            <Fragment key={index}>
              {data?.text} {data.code && <code>{data.code}</code>}
            </Fragment>
          ))}
        </p>
      )}
    </CardHeader>
  );
};

export default CardHead;

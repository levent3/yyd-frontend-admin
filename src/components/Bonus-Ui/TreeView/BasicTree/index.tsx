import CardHead from "CommonElements/CardHead";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { simpleTreeviewData } from "../../../../../Data/Bonus-Ui/TreeViewData";
import { IoMdArrowDropright } from "react-icons/io";
import cx from "classnames";
import { BasicTreesProp } from "Types/BonusUiType";
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";

export const ArrowIcon = ({ isOpen, className }: BasicTreesProp) => {
  const baseClass = "arrow";
  const classes = cx(
    baseClass,
    { [`${baseClass}--closed`]: !isOpen },
    { [`${baseClass}--open`]: isOpen },
    className
  );
  return <IoMdArrowDropright className={classes} />;
};

export const CheckBoxIcon = ({ variant, ...rest }: BasicTreesProp) => {
  switch (variant) {
    case "all":
      return <FaCheckSquare color="#4AAD8A" {...rest} />;
    case "none":
      return (
        <FaSquare
          color="white"
          {...rest}
          style={{ border: "1px solid #80808069" }}
        />
      );
    case "some":
      return <FaMinusSquare {...rest} color="#7366FF" />;
    default:
      return null;
  }
};

const data = flattenTree(simpleTreeviewData);
const BasicTree = () => {
  const basicTreeData = [
    {
      text: "Use the dynamic tree view with checkboxes.",
    },
  ];

  return (
    <Col sm={6}>
      <Card>
        <CardHead title="Basic Tree" subTitle={basicTreeData} />
        <CardBody>
          <div className="tree-container">
            <div className="checkbox">
              <TreeView
                data={data}
                aria-label="Checkbox tree"
                multiSelect
                propagateSelect
                propagateSelectUpwards
                togglableSelect
                defaultSelectedIds={[3]}
                expandedIds={[1, 2, 6, 10]}
                nodeRenderer={({
                  element,
                  isBranch,
                  isExpanded,
                  isSelected,
                  isHalfSelected,
                  getNodeProps,
                  level,
                  handleSelect,
                  handleExpand,
                }) => {
                  return (
                    <div
                      {...getNodeProps({ onClick: handleExpand })}
                      style={{ marginLeft: 40 * (level - 1), marginTop: 5 }}
                      className="d-flex align-items-center"
                    >
                      {isBranch && <ArrowIcon isOpen={isExpanded} />}
                      <CheckBoxIcon
                        className="checkbox-icon "
                        onClick={(e: any) => {
                          handleSelect(e);
                          e.stopPropagation();
                        }}
                        variant={
                          isHalfSelected ? "some" : isSelected ? "all" : "none"
                        }
                      />
                      <span className="name">{element.name}</span>
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTree;

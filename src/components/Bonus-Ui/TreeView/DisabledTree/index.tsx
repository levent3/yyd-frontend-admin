import CardHead from "CommonElements/CardHead";
import { DisableTreeData } from "Data/Bonus-Ui/TreeViewData";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { Card, CardBody, Col } from "reactstrap";
import { ArrowIcon, CheckBoxIcon } from "../BasicTree";

const data = flattenTree(DisableTreeData);

const DisabledTree = () => {
  return (
    <Col sm="6">
      <Card>
        <CardHead title="Disabled Tree" subTitle={[{ text: "Use the dynamic tree view with checkboxes." }]} />
       <CardBody>
        <div className="tree-container">
          <div className="checkbox">
            <TreeView data={data} aria-label="Checkbox tree" multiSelect propagateSelect propagateSelectUpwards defaultDisabledIds={[2, 3, 4, 5]} defaultSelectedIds={[7]} togglableSelect expandedIds={[1,2,6,10]} nodeRenderer={({ element, isBranch, isExpanded, isSelected, isDisabled, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => {
                return (
                  <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1),marginTop:5 }} className="d-flex align-items-center">
                    {isBranch && <ArrowIcon isOpen={isExpanded} />}
                    <CheckBoxIcon className="checkbox-icon " onClick={(e: any) => { handleSelect(e); e.stopPropagation(); }} variant={isHalfSelected ? "some" : isSelected ? "all" : "none"} /><span className="name">{element.name}</span></div>
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

export default DisabledTree;

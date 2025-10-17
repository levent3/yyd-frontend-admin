import { useCallback, useState } from "react";
import { Row, Col, Card, CardBody, TabContent, TabPane } from "reactstrap";
import { Personal } from "utils/Constant";
import ListNewContact from "./ListNewContact";
import UpdateUser from "./UpdateUser";
import ContactDetailsClass from "./ContactDetail";
import {  userUpdateType, userCallbackUser,  personalTabPropsType } from "Types/ContactType";
import CommonCardHeading from "CommonElements/CommonCardHeading";


const PersonalTab = ({ users }: personalTabPropsType) => {
  const [selectedUser, setSelectedUser] = useState<undefined | userCallbackUser | userUpdateType>();
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const userCallback = useCallback((user: userCallbackUser) => {setSelectedUser(user);}, []);
  const userEditCallback = useCallback(
    (edit: boolean, usersData: userCallbackUser) => {
      setEditData(usersData);
      setSelectedUser(usersData);
      setEditing(edit);
    },[]);

  return (
    <Card>
      <CommonCardHeading  Heading={Personal} />
      <CardBody className="p-0">
        <Row className="list-persons" id="addcon">
          <ListNewContact users={users} userCallback={userCallback} />
          <Col xl={8} md={7} className="xl-50">
            {editing ? (
              <UpdateUser editData={editData} userEditCallback={userEditCallback}/>
            ) : (
              <TabContent activeTab={0}>
                <TabPane tabId={0}>
                  <ContactDetailsClass selectedUser={selectedUser ? selectedUser : users[0]} userEditCallback={userEditCallback}/>
                </TabPane>
              </TabContent>
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PersonalTab;
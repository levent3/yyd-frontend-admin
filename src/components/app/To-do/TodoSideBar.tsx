import { ToDoFilter, ToDoList } from "utils/Constant";
import { Href } from "../../../../utils/Constant/index";
import { useState } from "react";
import { Button, Card, CardBody, Nav, NavItem } from "reactstrap";
import UserDetail from "./UserDetail";
import { CheckCircle } from "react-feather";
import { sideBartList } from "Data/ToDo";

const TodoSideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="email-sidebar md-sidebar">
      <a className="btn btn-primary email-aside-toggle md-sidebar-toggle" onClick={()=>setShowSideBar(!showSideBar)}>To Do filter</a>
      <div className={`email-left-aside md-sidebar-aside ${showSideBar ?"open":""}`}>
        <div className="email-sidebar md-sidebar">
          <div className={`email-left-aside md-sidebar-aside ${showSideBar ? "open" : ""}`}>
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark custom-scrollbar">
                  <UserDetail />
                  <Nav className="main-menu">
                    {sideBartList.map((data, index) =>
                      data.todoList ? (
                        <NavItem key={index}>
                          <Button color="primary" className="badge-light d-block btn-mail w-100">
                            <CheckCircle className="me-2" /> {ToDoList}
                          </Button>
                        </NavItem>
                      ) : (
                        <NavItem key={index}>
                          <a href={Href}>
                            <span className={`iconbg badge-light-${data.color}`}>{data.icon}</span>
                            <span className="title ms-2">{data.tittle}</span>
                            {data.badge && (
                              <span className={`badge badge-${ data.tittle === "In Process"? "primary": data.color}`}>{data.badge}</span>
                            )}
                          </a>
                        </NavItem>
                      )
                    )}
                  </Nav>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoSideBar;

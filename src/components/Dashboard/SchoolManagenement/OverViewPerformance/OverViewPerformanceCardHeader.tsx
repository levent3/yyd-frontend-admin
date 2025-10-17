import { useState } from "react"
import { CardHeader, Nav, NavItem, NavLink } from "reactstrap"
import { Href } from "utils/Constant"

const OverViewPerformanceCardHeader = () => {
  const [navActiveTab, setnavActiveTab] = useState("Overview")

  return (
    <CardHeader className="pb-0">
      <div className="performance-wrapper">
        <div className="performance-left">
          <Nav tabs className="border-tab border-0 mb-0">
            <NavItem><NavLink className={`nav-border ${navActiveTab === "Overview" ? "active" : ""}`}  href={Href} onClick={()=>setnavActiveTab("Overview")} >Overview</NavLink></NavItem>
            <NavItem><NavLink className={`nav-border ${navActiveTab === "Performance" ? "active" : ""}`}  href={Href} onClick={()=>setnavActiveTab("Performance")} >Performance</NavLink></NavItem>
          </Nav>
        </div>
        <div className="performance-right"> 
          <p className="mb-0">28-02-2023</p><i className="fa fa-calendar txt-primary" />
        </div>
      </div>
    </CardHeader>
  )
}

export default OverViewPerformanceCardHeader
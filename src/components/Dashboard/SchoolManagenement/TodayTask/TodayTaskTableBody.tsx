import { todaysTaskList } from "Data/Dashboard/SchoolManagement";
import { Button, Input, Label } from "reactstrap";
import IconsBox from "./IconsBox";
import IconsBox2 from "./IconsBox2";
import { ClassNumber } from "utils/Constant";

const TodayTaskTableBody = () => {
  return (
    <tbody className="main-task-wrapper">
      {todaysTaskList.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="d-flex">
              <div className="form-check checkbox-width checkbox checkbox-primary mb-0">
                <Input className="from-check-input" id={`checkbox-task-${index}`} type="checkbox" defaultChecked={data.taskCompleted ? true : false}/>
                <Label className="form-check-label" htmlFor={`checkbox-task-${index}`}></Label>
              </div>
              <div className="d-flex align-items-center gap-2 justify-content-center">
                <div>
                  <h6 className="pb-1">{data.task}</h6>
                  <ul className="task-icons">
                    <li><span className="text-muted">{ClassNumber} {data.classNumber}</span></li>
                    <li className="f-light flex-wrap">
                      <svg className="fill-icon fill-primary">
                        <use href="../assets/svg/icon-sprite.svg#clock" />
                      </svg>
                      <span>{data.time}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </td>
          <td>
            <Button color="transparent" className={`badge-light-${data.badgeClass}`}>{data.status}</Button>
          </td>
          <IconsBox />
          <IconsBox2 />
        </tr>
      ))}
    </tbody>
  );
};

export default TodayTaskTableBody;

import React from 'react';
import { Link, MoreHorizontal, Trash2 } from 'react-feather';
import { CardBody, Table } from 'reactstrap';
import SweetAlert from 'sweetalert2';
import { Href, NoTasksFound } from 'utils/Constant';
import { useContext } from 'react';
import TodoContext from 'helper/Task';

const CreatedByme = React.forwardRef((props, ref:any) => {
  const { allTask,removeTask } = useContext(TodoContext);
  const deleteTask = (userId:number) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ok',
      cancelButtonText: 'cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        removeTask(userId)
        SweetAlert.fire( 'Deleted!', 'Your file has been deleted.', 'success');
      } else {SweetAlert.fire('Your imaginary file is safe!')}
    });
  };

  return (
    <div ref={ref}>
      <CardBody className="p-0">
        <div className="taskadd">
          <div className="table-responsive table-borderless">
            <Table >
              <tbody>
                {allTask && allTask.length ?
                  allTask.map((data) =>  (
                      <tr key={data.id}>
                        <td>
                          <h6  className= 'task_title_0'  >{data.title}</h6>
                          <p  className= 'project_name_0'  >{data.collection}</p>
                        </td>
                        <td>
                          <p  className= 'task_desc_0'  >{data.description}</p>
                        </td>
                        <td>
                          <a className="me-2" href={Href}><Link /></a>
                          <a href={Href}><MoreHorizontal /></a>
                        </td>
                        <td><a href={Href} onClick={() => deleteTask(data.id)}><Trash2 /></a></td>
                      </tr>
                    )
                  )
                  : <tr><td><div className="no-favourite"><span>{NoTasksFound}</span></div></td></tr>
                }
              </tbody>
            </Table>
          </div>
        </div>
      </CardBody>
      </div>
  );
})

export default CreatedByme;
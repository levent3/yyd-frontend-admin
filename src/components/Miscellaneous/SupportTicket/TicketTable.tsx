import { supportColumns, supportData, supportDataType } from 'Data/SupportTicket';
import {  useCallback, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Button } from 'reactstrap';
import { Delete, DeleteData } from 'utils/Constant';

const TicketTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [data, setData] = useState(supportData);

  const handleRowSelected = useCallback((state:any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r:supportDataType) => r.name)}?`)) {
      setToggleDelete(!toggleDelete);
      setData(data.filter((item) => selectedRows.filter((elem:supportDataType) => elem.id === item.id).length > 0 ? false : true));
      setSelectedRows([]);
    }
  };
  return (
      <div className="table-responsive support-table">
        {(selectedRows.length !== 0) &&
          <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
            <h4 className='text-muted m-0' >{DeleteData}</h4>
            <Button color='danger' onClick={() => handleDelete() }>{Delete}</Button>
          </div>
        }
        <DataTable columns={supportColumns} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete}/>
      </div>
  );
};
export default TicketTable;
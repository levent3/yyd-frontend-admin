import { Input } from 'reactstrap';
import { MinimumAge, MaximumAge } from 'utils/Constant';
import { tableSearchBarpropsType } from '../../../../../../Types/TableType';

const TableSearchBar = ({ handleMinAgeChange, handleMaxAgeChange }:tableSearchBarpropsType) => {
  return (
    <div className="table-responsive dataTables_wrapper me-0">
      <table>
        <tbody className="dataTables_filter">
          <tr>
            <td>{MinimumAge}</td>
            <td>
              <Input onChange={handleMinAgeChange} type="number" name="minAge" />
            </td>
          </tr>
          <tr>
            <td>{MaximumAge}</td>
            <td>
              <Input onChange={handleMaxAgeChange} type="number" name="maxAge" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableSearchBar;

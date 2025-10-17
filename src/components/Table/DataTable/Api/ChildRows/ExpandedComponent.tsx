import { zeroConfigurationTableColumnsType } from "Data/table/data-table";
import { ExpanderComponentProps } from "react-data-table-component";
import { ExtraInfo, ExtraInformation, FullName, ID } from "utils/Constant";

const ExpandedComponent: React.FC<ExpanderComponentProps<zeroConfigurationTableColumnsType>> = ({ data }) => {
  return (
    <table cellPadding={5} cellSpacing={0} border={0} style={{ paddingLeft: 50 }}>
      <tbody>
        <tr>
          <td>{ID}:</td>
          <td>{data.id}</td>
        </tr>
        <tr>
          <td>{FullName}:</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td>{ExtraInfo}:</td>
          <td>{ExtraInformation}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ExpandedComponent;

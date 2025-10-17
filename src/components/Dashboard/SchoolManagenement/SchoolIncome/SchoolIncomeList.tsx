import { schoolIncomeListData } from "Data/Dashboard/SchoolManagement";

const SchoolIncomeList = () => {
  return (
    <ul>
      {schoolIncomeListData.map((data, index) => (
        <li key={index}>
          <div className={`income-dot dot-${data.dotClassName}`} />
          <span className="text-muted">{data.heading}</span>
          <h6>${data.amount}</h6>
        </li>
      ))}
    </ul>
  );
};

export default SchoolIncomeList;

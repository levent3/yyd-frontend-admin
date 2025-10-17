import { squareGroupData } from "Data/widgets/general";

const SquareGroup = () => {
  return (
    <ul className="square-group">
      {squareGroupData.map((data, index) => (
        <li key={index} className={`square-${data.id} ${data.color}`}></li>
      ))}
    </ul>
  );
};

export default SquareGroup;

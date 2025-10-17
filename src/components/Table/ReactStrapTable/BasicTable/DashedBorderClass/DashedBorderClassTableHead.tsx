import { Id, className, Type, Hours, Trainer, Spots } from "utils/Constant";

const DashedBorderClassTableHead = () => {
  return (
    <thead>
      <tr className="dashed">
        <th scope="col">{Id}</th>
        <th scope="col">{className}</th>
        <th scope="col">{Type}</th>
        <th scope="col">{Hours}</th>
        <th scope="col">{Trainer}</th>
        <th scope="col">{Spots}</th>
      </tr>
    </thead>
  );
};

export default DashedBorderClassTableHead;

import { Price, Product, ProductDetail } from "utils/Constant";

const CurrentCartTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">{Product}</th>
        <th scope="col">{ProductDetail}</th>
        <th scope="col">{Price}</th>
      </tr>
    </thead>
  );
};

export default CurrentCartTableHead;

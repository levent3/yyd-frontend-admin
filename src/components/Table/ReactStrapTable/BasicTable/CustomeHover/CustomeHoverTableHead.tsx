import {Id,FilmTitle,Released,Studio,Budget,DomesticGross,} from "utils/Constant";

const CustomeHoverTableHead = () => {
  return (
    <thead>
      <tr>
        <th scope="col">{Id}</th>
        <th scope="col">{FilmTitle}</th>
        <th scope="col">{Released}</th>
        <th scope="col">{Studio}</th>
        <th scope="col">{Budget}</th>
        <th scope="col">{DomesticGross}</th>
      </tr>
    </thead>
  );
};

export default CustomeHoverTableHead;

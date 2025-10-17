import Image from "next/image";
import { FiGrid } from "react-icons/fi";
import { Button } from "reactstrap";
import { ContactUs, FREE, ImgPath, Plan200gb, PlanSpace, Premium, PricePlan, PricingPlan, Selected, TrialVersion } from "utils/Constant";

const PricingPlans = () => {
  return (
    <ul>
      <li>
        <div className="btn btn-outline-primary">
          <FiGrid />
          {PricingPlan}
        </div>
      </li>
      <li>
        <div className="pricing-plan">
          <h6>{TrialVersion} </h6>
          <h5>{FREE}</h5>
          <p>{PlanSpace}</p>
          <Button size="xs" color="transparent" className="btn-outline-primary ">{Selected}</Button>
          <Image width={182} height={182} className="bg-img" src={`${ImgPath}/dashboard/folder.png`} alt=""/>
        </div>
      </li>
      <li>
        <div className="pricing-plan">
          <h6>{Premium} </h6>
          <h5>{PricePlan}</h5>
          <p>{Plan200gb}</p>
          <Button size="xs" color="transparent" className="btn-outline-primary ">{ContactUs}</Button>
          <Image width={182} height={182} className="bg-img" src={`${ImgPath}/dashboard/folder1.png`} alt=""/>
        </div>
      </li>
    </ul>
  );
};

export default PricingPlans;

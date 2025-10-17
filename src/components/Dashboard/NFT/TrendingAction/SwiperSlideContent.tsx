import { Button } from "reactstrap";
import { AuctionTime, CurrentBid, OwnedBy, PlaceBid } from "utils/Constant";
import SwiperSlideList from "./SwiperSlideList";

const SwiperSlideContent = () => {
  return (
    <div className="product-nft-content">
      <h6 className="f-14">Amet minim mollit </h6>
      <p className="f-12 f-light mb-2">
        {OwnedBy} <span className="font-primary">Bilout</span>
      </p>
      <SwiperSlideList />
      <Button color="transparent" className="bg-light-primary font-primary w-100 mt-3">{PlaceBid}</Button>
    </div>
  );
};

export default SwiperSlideContent;

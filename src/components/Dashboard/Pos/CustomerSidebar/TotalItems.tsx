import { Fees, Item, Subtotal, Total } from "utils/Constant"

const TotalItems = () => {
  return (
    <div className="total-item">
          <div className="item-number"><span className="text-gray">{Item}</span><span className="f-w-500">3 (Items)</span></div>
          <div className="item-number"><span className="text-gray">{Subtotal}</span><span className="f-w-500">$1,186</span></div>
          <div className="item-number border-bottom"><span className="text-gray">{Fees}</span><span className="f-w-500">$20</span></div>
          <div className="item-number pt-3 pb-0"><span className="f-w-500">{Total}</span>
            <h6 className="txt-primary">$1,186</h6>
          </div>
        </div>
  )
}

export default TotalItems
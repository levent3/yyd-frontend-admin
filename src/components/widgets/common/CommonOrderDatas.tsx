const CommonOrderDatas = () => {
  return (
    <div className="col-sm-6">
      <div className="card widget-1 widget-with-chart mb-xl-0">
        <div className="card-body">
          <div>
            <h4 className="mb-1">1,80k</h4>
            <span className="f-light">Orders</span>
          </div>
          <div className="order-chart">
            <div id="orderchart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonOrderDatas;

import { Media } from 'reactstrap';
import { ContactHistory, Href } from 'utils/Constant';

const HistoryClass = () => {
  const closehistory = () => {
    document.querySelector('.history')?.classList.remove('show');
  };
  return (
      <div id="right-history" className="history">
        <div className="modal-header p-l-20 p-r-20">
          <h6  className= 'modal-title w-100'  >{ContactHistory}
            <span className="pull-right">
              <a className="closehistory" href={Href} onClick={closehistory}>
                <i className="icofont icofont-close"></i>
              </a>
            </span>
          </h6>
        </div>
        <div className="history-details">
          <div className="text-center"><i className="icofont icofont-ui-edit"></i>
            <p>{'Contact has not been modified yet.'}</p>
          </div>
          <Media className=" align-items-start">
            <i className="icofont icofont-star me-3"></i>
            <Media body className="mt-0">
              <h6  className= 'mt-0'  >{'Contact Created'}</h6>
              <p className= 'mb-0'  >{'Contact is created via mail'}</p><span className="f-12">{'Sep 10, 2023 4:00'}</span>
            </Media>
          </Media>
        </div>
      </div>
  );
};

export default HistoryClass;
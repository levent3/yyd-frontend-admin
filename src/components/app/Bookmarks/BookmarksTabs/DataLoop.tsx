import { Row, Card, Col } from "reactstrap";
import { Href, ImgPath } from "utils/Constant";
import SweetAlert from "sweetalert2";
import DescriptionData from "./DescriptionData";
import NoBookmarksFoundComponent from "./NoBookmarksFoundComponent";
import { bookMarkType } from "Types/BookMarkTypes";
import { useContext } from "react";
import BookMarkContext from "helper/Bookmark";
import Image from "next/image";

const DataLoop = () => {
  const { setBookmark, bookmark, editModal, setEditModal, setEditRow } = useContext(BookMarkContext);
  const addToFavorites = (data: bookMarkType) => {
    if (data.fillStar === false) {
      let newBookMarkData = bookmark.map((item) => item.id === data.id ? { ...item, fillStar: true } : item)
      setBookmark(newBookMarkData)
    } else {
      let newBookMarkData = bookmark.map((item) => item.id === data.id ? { ...item, fillStar: false } : item)
      setBookmark(newBookMarkData)
    }
  };
  const OnHandleClick = (data: bookMarkType) => {
    setEditModal(!editModal)
    setEditRow(data)
  };
  const removeFromBookMark = (bookmarkId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        setBookmark(bookmark.filter((data) => data.id !== bookmarkId))
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };
  return (
    <Row >
      {bookmark.length > 0 ? (
        bookmark.map((data: bookMarkType, index: number) => (
          <Col xl="3" lg="6" sm="6" md="4" key={index} className="xl-50 box-col-4">
            <Card className="bookmark-card o-hidden">
              <div className="details-website">
                <Image width={249} height={170} className="img-fluid" src={`${ImgPath}/${data.image}`} alt="image" />
                <div className={`favourite-icon favourite_0 ${data.fillStar ? "favourite" : ""}`} onClick={() => addToFavorites(data)}>
                  <a href={Href}><i className="fa fa-star"></i></a>
                </div>
                <DescriptionData data={data} OnHandleClick={OnHandleClick} removeFromBookMark={removeFromBookMark} />
              </div>
            </Card>
          </Col>
        ))) : (<NoBookmarksFoundComponent />)}
    </Row>
  );
};
export default DataLoop;
import { useContext, useEffect, useState } from "react";
import { Row, Card, Col } from "reactstrap";
import { Href, ImgPath } from "utils/Constant";
import NoBookmarksFoundComponent from "./NoBookmarksFoundComponent";
import FavDescriptionData from "./FavDesciptionData";
import BookMarkContext from "helper/Bookmark";
import { bookMarkType } from "Types/BookMarkTypes";
import Image from "next/image";

const FavDataLoop = () => {
  const { bookmark, setBookmark } = useContext(BookMarkContext);
  const [bookMarkList, setBookMarkList] = useState<bookMarkType[] | []>([]);

  useEffect(() => {
    let updatedList = bookmark.filter((data) => data.fillStar === true);
    setBookMarkList(updatedList);
  }, [bookmark]);

  const removeFromFavorite = (item: bookMarkType) => {
    const updatedBookMark =bookmark.map((data)=>data.id === item.id ? {...data,fillStar:false}:data)
    setBookmark(updatedBookMark)
    }
  

  return (
    <Row>
      {bookMarkList?.length > 0 ? (
        bookMarkList?.map((data, index) => (
          <Col xl={3} className="xl-50" md="4" key={index}>
            <Card className="card-with-border bookmark-card o-hidden">
              <div className="details-website">
                <Image width={249} height={165} className="img-fluid" src={`${ImgPath}/${data.image}`} alt="Image"/>
                <div className={`favourite-icon favourite_0 ${data.fillStar ? "favourite" : ""}`}>
                  <a href={Href}>
                    <i className="fa fa-star" onClick={() => removeFromFavorite(data)}></i>
                  </a>
                </div>
                <FavDescriptionData myBookData={data} />
              </div>
            </Card>
          </Col>
        ))
      ) : (
        <NoBookmarksFoundComponent />
      )}
    </Row>
  );
};
export default FavDataLoop;

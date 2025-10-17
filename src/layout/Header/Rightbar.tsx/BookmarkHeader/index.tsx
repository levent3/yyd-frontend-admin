import React, { ChangeEvent, useContext, useState } from "react";
import BookMarkContain from "./BookMarkContain";
import layoutContext, { searchableMenuType } from "helper/Layout";

const BookmarkHeader = () => {
  const [searchedItems, setSearchedItems] = useState<searchableMenuType[]>([]);
  const [searchWord, setSearchWord] = useState("");
  const { bookmarkList, setBookmarkList, searchableMenu, setSearchableMenu } =useContext(layoutContext);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchKey = event.target.value.toLowerCase();
    setSearchWord(searchKey);
    let copy = [...searchableMenu];
    let result = copy.filter((item) =>
      item.title?.toLowerCase().includes(searchKey)
    );
    setSearchedItems(result);
  };

  const handleBookmarkChange = (item: searchableMenuType) => {
    if(!item.bookmarked){
      const updatedValue ={...item,bookmarked:!item.bookmarked}
      setBookmarkList([...bookmarkList,updatedValue])
    }else {
      const temp:searchableMenuType[] = [];
      bookmarkList.forEach((ele) => {
        if (ele.id !== item.id) {
          temp.push(ele);
        }
      });
      setBookmarkList(temp)
    }
    const copy = [...searchableMenu];
    copy.splice( item.id - 1 , 1, { ...item, bookmarked: !item.bookmarked });
    setSearchableMenu(copy)
    setSearchedItems(copy)
  };

  return (
    <BookMarkContain
      handleSearch={handleSearch}
      handleBookmarkChange={handleBookmarkChange}
      searchedItems={searchedItems}
      searchWord={searchWord}
    />
  );
};

export default BookmarkHeader;

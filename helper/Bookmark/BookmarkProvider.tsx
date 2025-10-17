import React, { ReactNode, useState } from "react";
import CustomizerContext from "./index";
import { bookMarkData } from "Data/Bookmark";
import { addNewBookMarkInterFace, bookMarkType } from "Types/BookMarkTypes";
interface bookmarkProviderType {
  children: ReactNode;
}
const BookmarkProvider = ({ children }: bookmarkProviderType) => {
  const [bookmark, setBookmark] = useState(bookMarkData);
  const [activeTab, setActiveTab] = useState("1");
  const [gridView, setGridView] = useState(true);
  const [editModal, setEditModal] = useState(false);
  const [editRow, setEditRow] = useState<null | bookMarkType >(null);

const addNewBookmark =(data:addNewBookMarkInterFace)=>{
const tempBookmark ={
  id:bookmark.length+1,
  fillStar: false,
  image: "lightgallry/01.jpg",
  title: data.title,
  website_url: data.url,
  desc: data.desc,
  collection: "General",
}
setBookmark((prev) => [...prev, tempBookmark]);
}

const updateBookMark = (tempId:number | undefined,newData:addNewBookMarkInterFace) =>{

const updatedData = bookmark.map((data)=>data.id === tempId ? {...data,title:newData.title,website_url:newData.url,desc:newData.desc}:data )
setBookmark(updatedData)

}

  return (
    <CustomizerContext.Provider
      value={{
        bookmark,
        addNewBookmark,
        updateBookMark,
        setBookmark,
        editRow,
        setEditRow,
        editModal,
        setEditModal,
        activeTab,
        setActiveTab,
        gridView,
        setGridView,
      }}
    >
      {children}
    </CustomizerContext.Provider>
  );
};

export { BookmarkProvider };

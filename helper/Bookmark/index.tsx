import { bookMarkData } from "Data/Bookmark";
import { addNewBookMarkInterFace, bookMarkType } from "Types/BookMarkTypes";
import { Dispatch, SetStateAction, createContext } from "react";

type GlobalType = {
  activeTab: string | undefined;
  gridView: boolean;
  editModal: boolean;
  editRow: null |bookMarkType;
  bookmark: bookMarkType[];
  setBookmark: Dispatch<SetStateAction<bookMarkType[]>>;
  setEditRow: Dispatch<SetStateAction<null |bookMarkType >>;
  setEditModal: Dispatch<SetStateAction<boolean>>;
  setGridView: Dispatch<SetStateAction<boolean>>;
  setActiveTab: Dispatch<SetStateAction<string>>;
   addNewBookmark: (data:any)=> void;
   updateBookMark: (id:number | undefined,data:addNewBookMarkInterFace)=> void;
};

const BookMarkContext = createContext<GlobalType>({
  activeTab: "",
  gridView: true,
  editModal: false,
  editRow: null ,
  bookmark:bookMarkData,
  setBookmark:() => {},
  updateBookMark:() => {},
  addNewBookmark:() => {},
  setEditModal: () => {},
  setEditRow: () => {},
  setActiveTab: () => {},
  setGridView: () => {},
});

export default BookMarkContext;

export interface bookMarkType {
    id: number,
    fillStar: boolean,
    image: string,
    title: string,
    website_url: string,
    desc: string,
    collection: string
}

export interface AddNewBookMarkInterFace {
    url: string
    title: string
    desc: string
  }
export interface addNewBookMarkInterFace {
    url: string
    title: string
    desc: string
}

export interface commonTabCardPropsType {
    tabId: string;
    tittle: string;
}

export interface descriptionBookMarkPropsType {
    data: bookMarkType;
    OnHandleClick: (book: bookMarkType) => void;
    removeFromBookMark: (bookmarkId: number) => void;
}

export interface favoriteBookMalapropsType {
    myBookData: bookMarkType;
}

export interface bookMarkModalTagPropTypes {
    tagToggle: () => void, value: boolean
}

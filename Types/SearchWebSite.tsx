export interface searchTabsPropsType {
  callbackActive: (val: number) => void;
  activeTabValue: number;
}
export interface informationCommonPropsType {
  item: {
    id?: number;
    url: string;
    title: string;
    detail: string;
    star: string;
    vote: string;
    news: string;
    videoLink: string;
    showStar?: boolean[];
  };
}

export interface showRatingProps {
  item: boolean[];
}
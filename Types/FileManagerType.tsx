export interface myFileInterFace {
  id: number;
  name: string;
  size: string;
  modify: string;
  icon: string;
  folderclass?: string;
  title?: string;
  foldersize?: string;
}

export interface searchBarPropsType {
  setSearchTerm: (data: string) => void;
  searchTerm: string;
}
export interface fileMainContentPropsType {
  myFile: fileContentData[];
  fileList: fileContentData[];
  searchTerm: string;
}

interface fileContentData {
  id: number;
  name: string;
  size: string;
  modify: string;
  icon: string;
  folderClass: string;
  title: string;
  folderSize: string;
}

export interface fileListPropsType {
  myFile: fileContentData[];
}

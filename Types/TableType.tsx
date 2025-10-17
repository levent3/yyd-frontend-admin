import { ChangeEvent } from "react";

interface detailsInterFace {
  code?: string;
  text?: string;
}
interface tableDataInterFace {
  tittle: string;
  tableColData: any;
  details: detailsInterFace[];
  tdClassName?: string;
}
 export interface commonTableBodyPropsType {
  tableData: tableDataInterFace[];
  tableClassName?: string;
  tdClassName?: string;
}

export interface commonTablePropsType {
  Heading: string;
  tableClassName?: string;
  tableData: tableDataInterFace[];
  tdClassName?: string;
}

export interface addRowsTable {
  column1: number;
  column2: number;
  column3: number;
  column4: number;
  column5: number;
}

export interface tableSearchBarpropsType {
  handleMinAgeChange: (eve: ChangeEvent<HTMLInputElement>) => void;
  handleMaxAgeChange: (eve: ChangeEvent<HTMLInputElement>) => void;
}

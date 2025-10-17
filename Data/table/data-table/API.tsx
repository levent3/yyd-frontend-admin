import { addRowsTable } from "Types/TableType";

export const addRowsTableData = [
  {
    column1: 101,
    column2: 10.2,
    column3: 10.3,
    column4: 10.4,
    column5: 10.5,
  },
  {
    column1: 111,
    column2: 11.2,
    column3: 11.3,
    column4: 11.4,
    column5: 11.5,
  },
  {
    column1: 121,
    column2: 12.2,
    column3: 12.3,
    column4: 12.4,
    column5: 12.5,
  },
];

export const addRowsTableColumns = [
  {
    name: "Column1",
    selector: (row: addRowsTable) => row.column1,
    sortable: true,
    center: false,
  },
  {
    name: "Column2",
    selector: (row: addRowsTable) => row.column2,
    sortable: true,
    center: true,
  },
  {
    name: "Column3",
    selector: (row: addRowsTable) => row.column3,
    sortable: true,
    center: true,
  },
  {
    name: "Column4",
    cell: (row: addRowsTable) => row.column4,
    sortable: true,
    center: true,
  },
  {
    name: "Column5",
    cell: (row: addRowsTable) => row.column5,
    sortable: true,
    center: true,
  },
];

export const DefaultPagiData: { text: string | JSX.Element; id: string }[] = [
  {
    id: "Pagination1",
    text: "Previous",
  },
  {
    id: "Pagination2",
    text: "1",
  },
  {
    id: "Pagination3",
    text: (
      <>
        2 <span className="sr-only">(current)</span>
      </>
    ),
  },
  {
    id: "Pagination4",
    text: "3",
  },
  {
    id: "Pagination5",
    text: "Next",
  },
];

export const ActiveClassData: { text: string | JSX.Element; id: string }[] = [
  {
    id: "Pagination1",
    text: "Previous",
  },
  {
    id: "Pagination2",
    text: "1",
  },
  {
    id: "Pagination3",
    text: (
      <>
        2 <span className="sr-only">(current)</span>
      </>
    ),
  },
  {
    id: "Pagination4",
    text: "3",
  },
  {
    id: "Pagination5",
    text: "Next",
  },
];

export const iconlistData: { text: string | JSX.Element; id: string }[] = [
  {
    id: "Pagination1",
    text: (
      <>
        <span aria-hidden="true">«</span>
        <span className="sr-only">Previous</span>
      </>
    ),
  },
  {
    id: "Pagination2",
    text: "1",
  },
  {
    id: "Pagination3",
    text: "2",
  },
  {
    id: "Pagination5",
    text: "...",
  },
  {
    id: "Pagination6",
    text: "20",
  },
  {
    id: "Pagination8",
    text: (
      <>
        <span aria-hidden="true">»</span>
        <span className="sr-only">Next</span>
      </>
    ),
  },
];

export const AlignPageData: string[] = ["Previous", "1", "2", "3", "Next"];
export const AlignCenterData: string[] = ["Previous", "I", "II", "III", "Next"];
export const AlignbottomData: string[] = [
  "Previous",
  "i ",
  "ii ",
  "iii",
  "Next",
];

export const AlignmentDataList = [
  {
    className: "justify-content-center m-b-30",
    active: true,
    color: "danger",
    smallText: true,
  },
  {
    className: "justify-content-end",
    color: "success",
  },
];

export const SizingDataList = [
  {
    className: "m-b-30",
    size: "md",
  },
  {
    size: "sm",
  },
];

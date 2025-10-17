import { Href, Status } from "utils/Constant";
// {
// name: "Column1",
// selector: (row: addRowsTable) => row.column1,
// sortable: true,
// center: false,
// },

interface htmlColumnsInterface {
  name: string;
  position: string;
  salary: string;
  office: string;
  cv: any;
  email: string;
  color: string;
  action: any;
  badge: string;
  id: number;
}
interface ajaxSourcedColumnsInterface {
  name: string;
  position: string;
  office: string;
  date: string;
  extends: string;
  salary: string;
}
interface serverSideProcessingColumnsInterface {
  name: string;
  position: string;
  office: string;
  lastName: string;
  date: string;
  salary: string;
}

interface customCellInterFace {
  position: string;
  color: string;
}
const CustomBadge = ({ position, color }: customCellInterFace) => {
  return (
    <span className={`badge rounded-pill badge-${color}`}>{position}</span>
  );
};

export const htmlColumns = [
  {
    name: "Name",
    selector: (row: htmlColumnsInterface) => row.name,
    sortable: true,
    center: false,
  },
  {
    name: "Position",
    selector: (row: htmlColumnsInterface) => row.position,
    sortable: true,
    center: false,
  },
  {
    name: "Salary",
    selector: (row: htmlColumnsInterface) => row.salary,
    sortable: true,
    center: false,
  },
  {
    name: "Office",
    selector: (row: htmlColumnsInterface) => row.office,
    sortable: true,
    center: false,
  },
  {
    name: "cv",
    selector: (row: htmlColumnsInterface) => row.cv,
    sortable: true,
    center: false,
  },
  {
    name: "Status",
    selector: (row: htmlColumnsInterface) => (
      <CustomBadge color={row.color} position={row.badge} />
    ),
    sortable: true,
    center: false,
  },
  {
    name: "Email",
    selector: (row: htmlColumnsInterface) => row.email,
    sortable: true,
    center: false,
  },
  {
    name: "Action",
    selector: (row: htmlColumnsInterface) => row.action,
    sortable: true,
    center: false,
  },
];

export const ajaxSourcedColumns = [
  {
    name: "Name",
    selector: (row: ajaxSourcedColumnsInterface) => row.name,
    sortable: true,
    center: false,
  },
  {
    name: "Position",
    selector: (row: ajaxSourcedColumnsInterface) => row.position,
    sortable: true,
    center: false,
  },
  {
    name: "Office",
    selector: (row: ajaxSourcedColumnsInterface) => row.office,
    sortable: true,
    center: false,
  },
  {
    name: "Extn.",
    selector: (row: ajaxSourcedColumnsInterface) => row.extends,
    sortable: true,
    center: false,
  },
  {
    name: "Start Date",
    selector: (row: ajaxSourcedColumnsInterface) => row.date,
    sortable: true,
    center: false,
  },
  {
    name: "Salary",
    selector: (row: ajaxSourcedColumnsInterface) => row.salary,
    sortable: true,
    center: false,
  },
];

export const ajaxSourcedData = [
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    extends: "5797",
    date: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: "Archana Desai",
    position: "Accountant",
    office: "Tokyo",
    extends: "5407",
    date: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    extends: "1562",
    date: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    extends: "2558",
    date: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    extends: "1314",
    date: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    extends: "8330",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    extends: "3990",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Dai Rios",
    position: "Personnel Lead",
    office: "Edinburgh",
    extends: "2290",
    date: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: "Doris Wilder",
    position: "Sales Assistant",
    office: "Sidney",
    extends: "3023",
    date: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: "Fiona Green",
    position: "Chief Executive Officer (CEO)",
    office: "San Francisco",
    extends: "2947",
    date: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    extends: "8422",
    date: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: "Gavin Cortez",
    position: "Team Leader",
    office: "San Francisco",
    extends: "2860",
    date: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: "Gavin Joyce",
    position: "Developer",
    office: "Edinburgh",
    extends: "8822",
    date: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    extends: "1721",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    extends: "3597",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    extends: "9608",
    date: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    extends: "3814",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    extends: "1721",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    extends: "3597",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Hermione Butler",
    position: "Regional Director",
    office: "London",
    extends: "1016",
    date: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    extends: "9608",
    date: "2012/08/06",
    salary: "$137,500",
  },

  {
    name: "Hope Fuentes",
    position: "Secretary",
    office: "San Francisco",
    extends: "6318",
    date: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: "Howard Hatfield",
    position: "Office Manager",
    office: "San Francisco",
    extends: "7031",
    date: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: "Jackson Bradshaw",
    position: "Director",
    office: "New York",
    extends: "1042",
    date: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    extends: "3814",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Jenette Caldwell",
    position: "Development Lead",
    office: "New York",
    extends: "1937",
    date: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: "Jennifer Acosta",
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    extends: "3431",
    date: "2013/02/01",
    salary: "$75,650",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    extends: "8330",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    extends: "3990",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Archana Desai",
    position: "Accountant",
    office: "Tokyo",
    extends: "5407",
    date: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    extends: "1562",
    date: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    extends: "2558",
    date: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    extends: "1314",
    date: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    extends: "9608",
    date: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    extends: "3814",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    extends: "1721",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    extends: "3597",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Hermione Butler",
    position: "Regional Director",
    office: "London",
    extends: "1016",
    date: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Dai Rios",
    position: "Personnel Lead",
    office: "Edinburgh",
    extends: "2290",
    date: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: "Doris Wilder",
    position: "Sales Assistant",
    office: "Sidney",
    extends: "3023",
    date: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: "Fiona Green",
    position: "Chief Executive Officer (CEO)",
    office: "San Francisco",
    extends: "2947",
    date: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: "Jennifer Acosta",
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    extends: "3431",
    date: "2013/02/01",
    salary: "$75,650",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    extends: "8330",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    extends: "3990",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Archana Desai",
    position: "Accountant",
    office: "Tokyo",
    extends: "5407",
    date: "2008/11/28",
    salary: "$162,700",
  },
];


// export const ImgPath: string = "/assets/images";
const handlePDFClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const pdfUrl = '/assets/pdf/sample.pdf'; // Replace with your actual PDF file name or path
  window.open(pdfUrl, '_blank');
};
export const htmlColumnsTableData = [
  {
    id: 1,
    cv: (
      <td className="action">
        <a className="pdf" onClick={handlePDFClick} rel="/assets/images/favicon.png" href="/assets/pdf/sample.pdf" target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    badge: "hired",
    email: "t.nixon@datatables.net",
    color: "success",
    salary: "$162,700",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    badge: "hired",
    color: "warning",
    email: "a.cox@datatables.net",
    salary: "$86,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    badge: "Pending",
    color: "danger",
    email: "b.williamson@datatables.net",
    salary: "$372,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 4,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "c.kelly@datatables.net",
    salary: "$433,060",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 5,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "c.marshall@datatables.net",
    salary: "$470,600",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 6,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    badge: "Pending",
    color: "danger",
    email: "c.hurst@datatables.net",
    salary: "$205,500",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 7,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    badge: "hired",
    color: "success",
    email: "d.snider@datatables.net",
    salary: "$112,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 8,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    badge: "Pending",
    color: "danger",
    email: "g.winters@datatables.net",
    salary: "$170,750",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 9,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "h.chandler@datatables.net",
    salary: "$137,500",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 10,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$90,560",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 11,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "q.flynn@datatables.net",
    salary: "$342,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 12,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    badge: "hired",
    color: "success",
    email: "r.davidson@datatables.net",
    salary: "$327,900",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 13,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "s.frost@datatables.net",
    salary: "$103,600",
    action: (
      <ul className="action">        
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 14,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$320,800",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 15,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    badge: "hired",
    email: "t.nixon@datatables.net",
    color: "success",
    salary: "$162,700",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 16,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    badge: "hired",
    color: "warning",
    email: "a.cox@datatables.net",
    salary: "$86,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 17,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    badge: "Pending",
    color: "danger",
    email: "b.williamson@datatables.net",
    salary: "$372,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 18,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "c.kelly@datatables.net",
    salary: "$433,060",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 19,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "c.marshall@datatables.net",
    salary: "$470,600",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 20,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    badge: "Pending",
    color: "danger",
    email: "c.hurst@datatables.net",
    salary: "$205,500",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 21,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    badge: "hired",
    color: "success",
    email: "d.snider@datatables.net",
    salary: "$112,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 22,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    badge: "Pending",
    color: "danger",
    email: "g.winters@datatables.net",
    salary: "$170,750",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 23,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "h.chandler@datatables.net",
    salary: "$137,500",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 24,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$90,560",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 25,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "q.flynn@datatables.net",
    salary: "$342,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 26,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    badge: "hired",
    color: "success",
    email: "r.davidson@datatables.net",
    salary: "$327,900",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 27,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "s.frost@datatables.net",
    salary: "$103,600",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 28,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$320,800",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 29,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    badge: "hired",
    color: "success",
    email: "d.snider@datatables.net",
    salary: "$112,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 30,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    badge: "Pending",
    color: "danger",
    email: "g.winters@datatables.net",
    salary: "$170,750",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 31,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "h.chandler@datatables.net",
    salary: "$137,500",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 32,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$90,560",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 33,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "q.flynn@datatables.net",
    salary: "$342,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 34,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    badge: "hired",
    color: "success",
    email: "r.davidson@datatables.net",
    salary: "$327,900",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 35,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "s.frost@datatables.net",
    salary: "$103,600",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 36,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$320,800",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 37,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    badge: "hired",
    email: "t.nixon@datatables.net",
    color: "success",
    salary: "$162,700",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 38,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    badge: "hired",
    color: "warning",
    email: "a.cox@datatables.net",
    salary: "$86,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 39,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    badge: "Pending",
    color: "danger",
    email: "b.williamson@datatables.net",
    salary: "$372,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 40,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "c.kelly@datatables.net",
    salary: "$433,060",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 41,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$90,560",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 42,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "q.flynn@datatables.net",
    salary: "$342,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 43,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    badge: "hired",
    color: "success",
    email: "r.davidson@datatables.net",
    salary: "$327,900",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 44,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "s.frost@datatables.net",
    salary: "$103,600",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 45,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$320,800",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 46,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    badge: "hired",
    color: "success",
    email: "d.snider@datatables.net",
    salary: "$112,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 47,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    badge: "Pending",
    color: "danger",
    email: "g.winters@datatables.net",
    salary: "$170,750",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 48,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "h.chandler@datatables.net",
    salary: "$137,500",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 49,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    badge: "hired",
    color: "success",
    email: "j.gaines@datatables.net",
    salary: "$90,560",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 50,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "q.flynn@datatables.net",
    salary: "$342,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 51,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    badge: "hired",
    email: "t.nixon@datatables.net",
    color: "success",
    salary: "$162,700",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 52,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    badge: "hired",
    color: "warning",
    email: "a.cox@datatables.net",
    salary: "$86,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 53,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    badge: "Pending",
    color: "danger",
    email: "b.williamson@datatables.net",
    salary: "$372,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 54,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    badge: "in process",
    color: "warning",
    email: "c.kelly@datatables.net",
    salary: "$433,060",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 55,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    badge: "in process",
    color: "warning",
    email: "c.marshall@datatables.net",
    salary: "$470,600",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 56,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    badge: "Pending",
    color: "danger",
    email: "c.hurst@datatables.net",
    salary: "$205,500",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
  {
    id: 57,
    cv: (
      <td className="action">
        <a className="pdf" href="/assets/pdf/sample.pdf"  onClick={handlePDFClick} target="_blank">
          <i className="icofont icofont-file-pdf"> </i>
        </a>
      </td>
    ),
    name: "Donna Snider",
    position: "Customer Support",
    office: "New York",
    badge: "hired",
    color: "success",
    email: "d.snider@datatables.net",
    salary: "$112,000",
    action: (
      <ul className="action">
        <li className="edit">
          <a href={Href}>
            <i className="icon-pencil-alt" />
          </a>
        </li>
        <li className="delete">
          <a href={Href}>
            <i className="icon-trash" />
          </a>
        </li>
      </ul>
    ),
  },
];

export const javascriptSourcedData = [
  {
    name: "Angelica Ramos",
    position: "Chief Executive Officer (CEO)",
    office: "London",
    extends: "5797",
    date: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    name: "Archana Desai",
    position: "Accountant",
    office: "Tokyo",
    extends: "5407",
    date: "2008/11/28",
    salary: "$162,700",
  },
  {
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    extends: "1562",
    date: "2009/01/12",
    salary: "$86,000",
  },
  {
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    extends: "2558",
    date: "2012/10/13",
    salary: "$132,000",
  },
  {
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    extends: "1314",
    date: "2011/06/07",
    salary: "$206,850",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    extends: "8330",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    extends: "3990",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Dai Rios",
    position: "Personnel Lead",
    office: "Edinburgh",
    extends: "2290",
    date: "2012/09/26",
    salary: "$217,500",
  },
  {
    name: "Doris Wilder",
    position: "Sales Assistant",
    office: "Sidney",
    extends: "3023",
    date: "2010/09/20",
    salary: "$85,600",
  },
  {
    name: "Fiona Green",
    position: "Chief Executive Officer (CEO)",
    office: "San Francisco",
    extends: "2947",
    date: "2010/03/11",
    salary: "$850,000",
  },
  {
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    extends: "8422",
    date: "2011/07/25",
    salary: "$170,750",
  },
  {
    name: "Gavin Cortez",
    position: "Team Leader",
    office: "San Francisco",
    extends: "2860",
    date: "2008/10/26",
    salary: "$235,500",
  },
  {
    name: "Gavin Joyce",
    position: "Developer",
    office: "Edinburgh",
    extends: "8822",
    date: "2010/12/22",
    salary: "$92,575",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    extends: "1721",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    extends: "3597",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    extends: "9608",
    date: "2012/08/06",
    salary: "$137,500",
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    extends: "3814",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    extends: "1721",
    date: "2009/04/10",
    salary: "$237,500",
  },
  {
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    extends: "3597",
    date: "2012/12/18",
    salary: "$313,500",
  },
  {
    name: "Hermione Butler",
    position: "Regional Director",
    office: "London",
    extends: "1016",
    date: "2011/03/21",
    salary: "$356,250",
  },
  {
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    extends: "9608",
    date: "2012/08/06",
    salary: "$137,500",
  },

  {
    name: "Hope Fuentes",
    position: "Secretary",
    office: "San Francisco",
    extends: "6318",
    date: "2010/02/12",
    salary: "$109,850",
  },
  {
    name: "Howard Hatfield",
    position: "Office Manager",
    office: "San Francisco",
    extends: "7031",
    date: "2008/12/16",
    salary: "$164,500",
  },
  {
    name: "Jackson Bradshaw",
    position: "Director",
    office: "New York",
    extends: "1042",
    date: "2008/09/26",
    salary: "$645,750",
  },
  {
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    extends: "3814",
    date: "2008/12/19",
    salary: "$90,560",
  },
  {
    name: "Jenette Caldwell",
    position: "Development Lead",
    office: "New York",
    extends: "1937",
    date: "2011/09/03",
    salary: "$345,000",
  },
  {
    name: "Jennifer Acosta",
    position: "Junior Javascript Developer",
    office: "Edinburgh",
    extends: "3431",
    date: "2013/02/01",
    salary: "$75,650",
  },
  {
    name: "Bruno Nash",
    position: "Software Engineer",
    office: "London",
    extends: "6222",
    date: "2011/05/03",
    salary: "$163,500",
  },
  {
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    extends: "8330",
    date: "2011/12/12",
    salary: "$106,450",
  },
  {
    name: "Cara Stevens",
    position: "Sales Assistant",
    office: "New York",
    extends: "3990",
    date: "2011/12/06",
    salary: "$145,600",
  },
  {
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    extends: "6224",
    date: "2012/03/29",
    salary: "$433,060",
  },
  {
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    extends: "6741",
    date: "2008/10/16",
    salary: "$470,600",
  },
  {
    name: "Archana Desai",
    position: "Accountant",
    office: "Tokyo",
    extends: "5407",
    date: "2008/11/28",
    salary: "$162,700",
  },
];

export const serverSideProcessingColumns = [
  {
    name: "First Name",
    selector: (row: serverSideProcessingColumnsInterface) => row.name,
    sortable: true,
    center: false,
  },
  {
    name: "Last Name",
    selector: (row: serverSideProcessingColumnsInterface) => row.lastName,
    sortable: true,
    center: false,
  },
  {
    name: "position",
    selector: (row: serverSideProcessingColumnsInterface) => row.position,
    sortable: true,
    center: false,
  },
  {
    name: "office",
    selector: (row: serverSideProcessingColumnsInterface) => row.office,
    sortable: true,
    center: false,
  },
  {
    name: "Start Date",
    selector: (row: serverSideProcessingColumnsInterface) => row.date,
    sortable: true,
    center: false,
  },
  {
    name: "Salary",
    selector: (row: serverSideProcessingColumnsInterface) => row.salary,
    sortable: true,
    center: false,
  },
];

export const serverSideData = [
  {
  name:"Angelica",
  position:"Chief Executive Officer (CEO)",
  office:"London",
  lastName:"Ramos",
  date:"2009/10/09",
  salary:"$1,200,000"
  },
  {
  name:"Archana",
  position:"Accountant",
  office:"Tokyo",
  lastName:"Desai",
  date:"2008/11/28",
  salary:"$162,700"
  },
  {
  name:"Ashton",
  position:"Junior Technical Author",
  office:"San Francisco",
  lastName:"Cox",
  date:"2009/01/12",
  salary:"$86,000"
  },
  {
  name:"Bradley",
  position:"Software Engineer",
  office:"London",
  lastName:"Greer",
  date:"2012/10/13",
  salary:"$132,000"
  },
  {
  name:"Brenden",
  position:"Software Engineer",
  office:"San Francisco",
  lastName:"Wagner",
  date:"2011/06/07",
  salary:"$206,850"
  },
  {
  name:"Bruno",
  position:"Software Engineer",
  office:"London",
  lastName:"Nash",
  date:"2011/05/03",
  salary:"$163,500"
  },
  {
  name:"Caesar",
  position:"Pre-Sales Support",
  office:"New York",
  lastName:"Vance",
  date:"2011/12/12",
  salary:"$106,450"
  },
  {
  name:"Cara",
  position:"Sales Assistant",
  office:"New York",
  lastName:"Stevens",
  date:"2011/12/06",
  salary:"$145,600"
  },
  {
  name:"Cedric",
  position:"Senior Javascript Developer",
  office:"Edinburgh",
  lastName:"Kelly",
  date:"2012/03/29",
  salary:"$433,060"
  },
  {
  name:"Charde",
  position:"Regional Director",
  office:"San Francisco",
  lastName:"Marshall",
  date:"2008/10/16",
  salary:"$470,600"
  },
  {
  name:"Dai",
  position:"Personnel Lead",
  office:"Edinburgh",
  lastName:"Rios",
  date:"2012/09/26",
  salary:"$217,500"
  },
  {
  name:"Doris",
  position:"Sales Assistant",
  office:"Sidney",
  lastName:"Wilder",
  date:"2010/09/20",
  salary:"$85,600"
  },
  {
  name:"Fiona",
  position:"Chief Executive Officer (CEO)",
  office:"San Francisco",
  lastName:"Green",
  date:"2010/03/11",
  salary:"$850,000"
  },
  {
  name:"Garrett",
  position:"Accountant",
  office:"Tokyo",
  lastName:"Winters",
  date:"2011/07/25",
  salary:"$170,750"
  },
  {
  name:"Gavin",
  position:"Team Leader",
  office:"San Francisco",
  lastName:"Cortez",
  date:"2008/10/26",
  salary:"$235,500"
  },
  {
  name:"Gavin",
  position:"Developer",
  office:"Edinburgh",
  lastName:"Joyce",
  date:"2010/12/22",
  salary:"$92,575"
  },
  {
  name:"Gloria",
  position:"Systems Administrator",
  office:"New York",
  lastName:"Little",
  date:"2009/04/10",
  salary:"$237,500"
  },
  {
  name:"Haley",
  position:"Senior Marketing Designer",
  office:"London",
  lastName:"Kennedy",
  date:"2012/12/18",
  salary:"$313,500"
  },
  {
  name:"Herrod",
  position:"Sales Assistant",
  office:"San Francisco",
  lastName:"Chandler",
  date:"2012/08/06",
  salary:"$137,500"
  },
  {
  name:"Jena",
  position:"Office Manager",
  office:"London",
  lastName:"Gaines",
  date:"2008/12/19",
  salary:"$90,560"
  },
  {
  name:"Gloria",
  position:"Systems Administrator",
  office:"New York",
  lastName:"Little",
  date:"2009/04/10",
  salary:"$237,500"
  },
  {
  name:"Haley",
  position:"Senior Marketing Designer",
  office:"London",
  lastName:"Kennedy",
  date:"2012/12/18",
  salary:"$313,500"
  },
  {
  name:"Hermione",
  position:"Regional Director",
  office:"London",
  lastName:"Butler",
  date:"2011/03/21",
  salary:"$356,250"
  },
  {
  name:"Herrod",
  position:"Sales Assistant",
  office:"San Francisco",
  lastName:"Chandler",
  date:"2012/08/06",
  salary:"$137,500"
  },
 
  {
  name:"Hope",
  position:"Secretary",
  office:"San Francisco",
  lastName:"Fuentes",
  date:"2010/02/12",
  salary:"$109,850"
  },
  {
  name:"Howard",
  position:"Office Manager",
  office:"San Francisco",
  lastName:"Hatfield",
  date:"2008/12/16",
  salary:"$164,500"
  },
  {
  name:"Jackson",
  position:"Director",
  office:"New York",
  lastName:"Bradshaw",
  date:"2008/09/26",
  salary:"$645,750"
  },
  {
  name:"Jena",
  position:"Office Manager",
  office:"London",
  lastName:"Gaines",
  date:"2008/12/19",
  salary:"$90,560"
  },
  {
  name:"Jenette",
  position:"Development Lead",
  office:"New York",
  lastName:"Caldwell",
  date:"2011/09/03",
  salary:"$345,000"
  },
  {
  name:"Jennifer",
  position:"Junior Javascript Developer",
  office:"Edinburgh",
  lastName:"Acosta",
  date:"2013/02/01",
  salary:"$75,650"
  },
  {
  name:"Bruno",
  position:"Software Engineer",
  office:"London",
  lastName:"Nash",
  date:"2011/05/03",
  salary:"$163,500"
  },
  {
  name:"Caesar",
  position:"Pre-Sales Support",
  office:"New York",
  lastName:"Vance",
  date:"2011/12/12",
  salary:"$106,450"
  },
  {
  name:"Cara",
  position:"Sales Assistant",
  office:"New York",
  lastName:"Stevens",
  date:"2011/12/06",
  salary:"$145,600"
  },
  {
  name:"Cedric",
  position:"Senior Javascript Developer",
  office:"Edinburgh",
  lastName:"Kelly",
  date:"2012/03/29",
  salary:"$433,060"
  },
  {
  name:"Charde",
  position:"Regional Director",
  office:"San Francisco",
  lastName:"Marshall",
  date:"2008/10/16",
  salary:"$470,600"
  },
  {
  name:"Archana",
  position:"Accountant",
  office:"Tokyo",
  lastName:"Desai",
  date:"2008/11/28",
  salary:"$162,700"
  },
  {
  name:"Ashton",
  position:"Junior Technical Author",
  office:"San Francisco",
  lastName:"Cox",
  date:"2009/01/12",
  salary:"$86,000"
  },
  {
  name:"Bradley",
  position:"Software Engineer",
  office:"London",
  lastName:"Greer",
  date:"2012/10/13",
  salary:"$132,000"
  },
  {
  name:"Brenden",
  position:"Software Engineer",
  office:"San Francisco",
  lastName:"Wagner",
  date:"2011/06/07",
  salary:"$206,850"
  },
  {
  name:"Bruno",
  position:"Software Engineer",
  office:"London",
  lastName:"Nash",
  date:"2011/05/03",
  salary:"$163,500"
  },
  {
  name:"Herrod",
  position:"Sales Assistant",
  office:"San Francisco",
  lastName:"Chandler",
  date:"2012/08/06",
  salary:"$137,500"
  },
  {
  name:"Jena",
  position:"Office Manager",
  office:"London",
  lastName:"Gaines",
  date:"2008/12/19",
  salary:"$90,560"
  },
  {
  name:"Gloria",
  position:"Systems Administrator",
  office:"New York",
  lastName:"Little",
  date:"2009/04/10",
  salary:"$237,500"
  },
  {
  name:"Haley",
  position:"Senior Marketing Designer",
  office:"London",
  lastName:"Kennedy",
  date:"2012/12/18",
  salary:"$313,500"
  },
  {
  name:"Hermione",
  position:"Regional Director",
  office:"London",
  lastName:"Butler",
  date:"2011/03/21",
  salary:"$356,250"
  },
  {
  name:"Cedric",
  position:"Senior Javascript Developer",
  office:"Edinburgh",
  lastName:"Kelly",
  date:"2012/03/29",
  salary:"$433,060"
  },
  {
  name:"Charde",
  position:"Regional Director",
  office:"San Francisco",
  lastName:"Marshall",
  date:"2008/10/16",
  salary:"$470,600"
  },
  {
  name:"Dai",
  position:"Personnel Lead",
  office:"Edinburgh",
  lastName:"Rios",
  date:"2012/09/26",
  salary:"$217,500"
  },
  {
  name:"Doris",
  position:"Sales Assistant",
  office:"Sidney",
  lastName:"Wilder",
  date:"2010/09/20",
  salary:"$85,600"
  },
  {
  name:"Fiona",
  position:"Chief Executive Officer (CEO)",
  office:"San Francisco",
  lastName:"Green",
  date:"2010/03/11",
  salary:"$850,000"
  },
  {
  name:"Jennifer",
  position:"Junior Javascript Developer",
  office:"Edinburgh",
  lastName:"Acosta",
  date:"2013/02/01",
  salary:"$75,650"
  },
  {
  name:"Bruno",
  position:"Software Engineer",
  office:"London",
  lastName:"Nash",
  date:"2011/05/03",
  salary:"$163,500"
  },
  {
  name:"Caesar",
  position:"Pre-Sales Support",
  office:"New York",
  lastName:"Vance",
  date:"2011/12/12",
  salary:"$106,450"
  },
  {
  name:"Cara",
  position:"Sales Assistant",
  office:"New York",
  lastName:"Stevens",
  date:"2011/12/06",
  salary:"$145,600"
  },
  {
  name:"Cedric",
  position:"Senior Javascript Developer",
  office:"Edinburgh",
  lastName:"Kelly",
  date:"2012/03/29",
  salary:"$433,060"
  },
  {
  name:"Charde",
  position:"Regional Director",
  office:"San Francisco",
  lastName:"6741",
  date:"2008/10/16",
  salary:"$470,600"
  },
  {
  name:"Archana",
  position:"Accountant",
  office:"Tokyo",
  lastName:"Desai",
  date:"2008/11/28",
  salary:"$162,700"
  }
 ]
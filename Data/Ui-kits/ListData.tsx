import {
  CheckboxListType,
  ContectualListDataType,
  CustomlistType,
  DisableListType,
  ListDataType,
  ScrollableListType,
  badgeListType,
} from "Types/UikitesType";
import Image from "next/image";
import { ImgPath, JsBehaviorText, JsBehaviorText2 } from "utils/Constant";

export const ContextualListData: ContectualListDataType[] = [
  {
    class: "list-light-primary",
    htmlText: (
      <>
        This is Primary bg you can use{" "}
        <em className="txt-primary fw-bold">.list-light-primary</em> class.
      </>
    ),
  },
  {
    class: "list-light-secondary",
    htmlText: (
      <>
        This is Secondary bg you can use{" "}
        <em className="txt-secondary fw-bold">.list-light-secondary</em> class.
      </>
    ),
  },
  {
    class: "list-light-success",
    htmlText: (
      <>
        This is Success bg you can use{" "}
        <em className="txt-success fw-bold">.list-light-success</em> class.
      </>
    ),
  },
  {
    class: "list-light-danger",
    htmlText: (
      <>
        This is Danger bg you can use
        <em className="txt-danger fw-bold">.list-light-danger</em> class.
      </>
    ),
  },
  {
    class: "list-light-warning",
    htmlText: (
      <>
        This is Warning bg you can use{" "}
        <em className="txt-warning fw-bold">.list-light-warning</em> class.
      </>
    ),
  },
  {
    class: "list-light-info",
    htmlText: (
      <>
        This is Info bg you can use{" "}
        <em className="txt-info fw-bold">.list-light-info</em> class.
      </>
    ),
  },
  {
    class: "list-light-white",
    htmlText: (
      <>
        This is White bg you can use{" "}
        <em className="txt-white fw-bold">.list-light-white</em> class.
      </>
    ),
  },
  {
    class: "list-light-dark",
    htmlText: (
      <>
        This is White bg you can use{" "}
        <em className="txt-white fw-bold">.list-light-dark</em> class.
      </>
    ),
  },
];

export const HorizontalColor: string[] = [
  "border-left-primary",
  "border-left-secondary",
  "border-left-warning",
  "border-left-success",
  "border-left-info",
];

export const HorizontalListData: ListDataType[] = [
  {
    class: "list-group-horizontal-sm pb-2",
    data: [
      "Product",
      "Product details",
      "Pricing",
      "Payment details",
      "Checkout",
      "Mega options",
    ],
  },
  {
    class: "list-group-horizontal-md pb-2",
    data: [
      "Basic table",
      "Sizing table ",
      "Border table",
      "Basic inputs ",
      "Form validations",
    ],
  },
  {
    class: "list-group-horizontal-lg pb-2",
    data: ["Flat style", "Edge style", "Button group", "Rating", "Crypto"],
  },
  {
    class: "list-group-horizontal-xl pb-2",
    data: ["Blog", "Blog details", "Blog single", "Order history"],
  },
  {
    class: "list-group-horizontal-xxl",
    data: ["Gallery grid ", "Gallery desc", "Masonry Desc"],
  },
];

export const CustonListData: CustomlistType[] = [
  {
    class: "active bg-primary",
    head: "Molly Boake",
    mail: "MollyBoake@rhyta.com",
    image: "/user/1.jpg",
    span: "5 days ago",
    subtext:
      "Next step is to choose a tone of voice for your content type. From casual to convincing, pick one from 20+ tones in the dropdown.Why did we say “snag eyeballs” instead of “get attention?” Why do we say “brick-and-mortar words” instead of “concrete words?” Because, in your email subject lines, it’s better to use words that people can picture.",
    follower: "20K Followers",
  },
  {
    class: "list-hover-primary",
    head: "Gabrielle Fahey",
    mail: "GabrielleFahey@dayrep.com",
    image: "/user/3.png",
    span: "10 days ago",
    subtext:
      "Your aim with this blog is to advertise yourself and your services in blog design. That means it's vital to create content about just that: blog design. Anything else on your page may act as a distraction to your potential customers, and you don't want that!",
    follower: "100 Followers",
  },
  {
    class: "list-hover-primary",
    head: "Lucinda Moseley",
    mail: "LucindaMoseley@teleworm.us",
    image: "/user/2.jpg",
    span: "3 days ago",
    subtext:
      "People who are looking to hire a web designer may not know what to look out for. This will give you a chance to prove your trustworthiness by providing potential customers with advice and will let you sell your services by highlighting their best qualities.",
    follower: "23M Followers",
  },
];

export const ListCheckboxData: CheckboxListType[] = [
  {
    class: "checkbox-primary",
    labelClass: "txt-primary",
    text: "Auto Start",
    idFor: "firstCheckbox",
  },
  {
    class: "checkbox-secondary",
    labelClass: "txt-secondary",
    text: "Auto Update",
    idFor: "secondCheckbox",
  },
  {
    class: "checkbox-success",
    labelClass: "txt-success",
    text: "Don't check auth key",
    idFor: "thirdCheckbox",
  },
  {
    class: "checkbox-warning",
    labelClass: "txt-warning",
    text: "Success all",
    idFor: "fourthCheckbox",
  },
];

export const ListRadioData: CheckboxListType[] = [
  {
    class: "checkbox-danger active",
    text: " Meditations",
  },
  {
    class: "checkbox-primary",
    text: " Read a book",
  },
  {
    class: "checkbox-success",
    text: " Learn to code ",
  },
  {
    class: "checkbox-info",
    text: " Drink more water",
  },
];

export const NumberListData: CheckboxListType[] = [
  {
    class: "txt-primary",
    text: "known for delivery of useful and usable solutions",
  },
  {
    class: "txt-danger",
    text: "Solve your problem with us",
  },
  {
    class: "txt-success",
    text: "Certified Professionals",
  },
  {
    class: "txt-warning",
    text: "Growth-Driven ",
  },
];

export const JsBehaviorListData: ContectualListDataType[] = [
  {
    id: "1",
    class: "fade show",
    htmlText: (
      <>
        <div className="d-flex mb-xl-4 list-behavior-1">
          <div className="flex-shrink-0">
            <Image
              className="tab-img img-fluid"
              src={`${ImgPath}/blog/img.png`}
              alt="home"
              width={134}
              height={86}
            />
          </div>
          <div className="flex-grow-1">
            <p className="mb-xl-0 mb-sm-4">{JsBehaviorText}</p>
          </div>
        </div>
        <div className="d-xl-flex list-behavior-2">
          <div className="flex-grow-1">
            <p className="mb-0">{JsBehaviorText2}</p>
          </div>
          <div className="flex-shrink-0">
            <Image
              className="img-fluid"
              src={`${ImgPath}/blog/blog.jpg`}
              alt="home"
              width={138}
              height={86}
            />
          </div>
        </div>
      </>
    ),
  },
  {
    id: "2",
    class: "fade show dark-list",
    htmlText: (
      <div className="flex-space flex-wrap align-items-center list-light-dark">
        <Image
          className="tab-img"
          src={`${ImgPath}/avtar/3.jpg`}
          alt="profile"
          width={100}
          height={100}
        />
        <p>
          <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United
          States- 33020
          <br />
          <strong>Mail Us:</strong>contact@us@gmail.com
          <br />
          <strong>Contact Number: </strong>(954) 357-7760
        </p>
      </div>
    ),
  },
  {
    id: "3",
    class: "fade show",
    htmlText: (
      <p className="pt-3">
        {
          "Us Technology offers web & mobile development solutions for all industry verticals.Include a short form using fields that'll help your business understand who's contacting them."
        }
        <br />
        <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United States-
        33020
        <br />
        <strong>Mail Us:</strong>contact@us@gmail.com
        <br />
        <strong>Contact Number: </strong>(954) 357-7760
      </p>
    ),
  },
  {
    id: "4",
    class: "fade show",
    htmlText: (
      <p>
        <strong>Available pages in Theme: </strong>
        <br />
        --&gt; Typography: <br />
        Typography is the art of arranging letters and text in a way that makes
        the copy legible, clear, and visually appealing to the reader.
        <br />
        --&gt; Tooltip: <br />A tooltip is a brief, informative message that
        appears when a user interacts with an element in a graphical user
        interface (GUI).
      </p>
    ),
  },
];

export const BadgeListData: badgeListType[] = [
  {
    text: "Stella Nowland",
    badgeClass: "bg-warning",
    badgeText: "Freelance",
  },
  {
    text: "Lola Stanford",
    badgeClass: "bg-danger text-white",
    badgeText: "Issue",
  },
  {
    text: "Caitlin Coungeau",
    badgeClass: "bg-primary text-white",
    badgeText: "Social",
  },
  {
    text: "Graciela W. McClaran",
    badgeClass: "bg-danger text-white",
    badgeText: "Issue",
  },
];

export const DisableListData: DisableListType[] = [
  {
    class: "list-hover-primary active",
    img: "/user/1.jpg",
    text: "Teresa J. Mosteller",
  },
  {
    class: "list-hover-primary",
    img: "/user/3.png",
    text: "Gloria D. Acheson",
  },
  {
    class: "disabled",
    img: "/user/2.jpg",
    text: "Sharon C. Obrien",
  },
  {
    class: "disabled",
    img: "/user/5.jpg",
    text: "Bryan A. Owens",
  },
];

export const ScrollableListData: ScrollableListType[] = [
  {
    img: "/user/9.jpg",
    head: "Molly Boake",
    mail: "MollyBoake@rhyta.com",
    small: "5 days ago",
  },
  {
    img: "/user/10.jpg",
    head: "Gabrielle Fahey",
    mail: "GabrielleFahey@dayrep.com",
    small: "10 days ago",
  },
  {
    img: "/user/2.jpg",
    head: "Lucinda Moseley",
    mail: "LucindaMoseley@teleworm.us",
    small: "3 days ago",
  },
  {
    img: "/user/12.png",
    head: "Francis K. Henriques",
    mail: "FrancisKHenriques@teleworm.us",
    small: "2 days ago",
  },
  {
    img: "/user/14.png",
    head: "Jose A. Seay",
    mail: "JoseASeay@rhyta.com",
    small: "15 days ago",
  },
  {
    img: "/user/3.jpg",
    head: "Phil F. Cunningham",
    mail: "PhilFCunningham@dayrep.com",
    small: "6 days ago",
  },
  {
    img: "/user/7.jpg",
    head: "Richard E. Johnson",
    mail: "RichardEJohnson@teleworm.us",
    small: "20 days ago",
  },
  {
    img: "/user/2.png",
    head: "Lawrence L. Nash",
    mail: "LawrenceLNash@jourrapide.com",
    small: "8 days ago",
  },
];

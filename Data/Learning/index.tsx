import {
  BackendDevelopment,
  BusinessAnalyst,
  UXDevelopment,
  WebDevelopment,
  FrontendDevelopment,
   Accounting,
  AllCourses,
  Completed,
  Design,
  Development,
  FreeCourses,
  InterfaceDesign,
  Management,
  PaidCourses,
  Progress,
  Registration,
  UIDesign,
  UXDesign,
  UserExperience,
} from "utils/Constant";

export const mainLearningCardsDatas = [
  {
    learningCardBy: "Paige Turner",
    dateSpan: "05",
    date: "January 2023",
    hits: 15,
    language: "Java Language",
  },
  {
    learningCardBy: "Petey Cruiser",
    dateSpan: "10",
    date: "March 2023",
    hits: 36,
    language: "Web Development",
  },
];

export const categoriesCheckBoxData = [
  Accounting,
  Design,
  Development,
  Management,
];
export const durationCheckBoxData = [
  "0-50 hours",
  "50-100 hours",
  "100+ hours",
];
export const priceCheckBoxData = [AllCourses, PaidCourses, FreeCourses];
export const statusCheckBoxData = [Registration, Progress, Completed];
export const designCategoriesData = [
  { learningHeading: UIDesign, badgeNumber: 28 },
  { learningHeading: UXDesign, badgeNumber: 35 },
  { learningHeading: InterfaceDesign, badgeNumber: 17 },
  { learningHeading: UserExperience, badgeNumber: 26 },
];
export const developmentCategoriesDatas = [
  { DevelopmentHeading: FrontendDevelopment, badgeNumber: 48 },
  { DevelopmentHeading: BackendDevelopment, badgeNumber: 19 },
];

export const upcomingCoursesData = [
  { courseHeading: UXDevelopment, courseDate: 18, courseMonth: "Dec", courseTeam: "Development Team" },
  { courseHeading: BusinessAnalyst, courseDate: 28, courseMonth: "Dec", courseTeam: "Analyst Team" },
  { courseHeading: WebDevelopment, courseDate: 5, courseMonth: "Jan", courseTeam: "Designer" },
];

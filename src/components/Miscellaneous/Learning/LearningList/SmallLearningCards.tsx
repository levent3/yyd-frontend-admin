import { Card, Col } from "reactstrap";
import BlogDetails from "./BlogDetails";
import Image from "next/image";
import { ImgPath } from "utils/Constant";
import { useRouter } from "next/router";

const SmallLearningCards = () => {
  const router = useRouter();
  let imagePath =[
    {
      title: "Web Devlopment.",
      src: 3,
      text: "This course is designed to start you on a path toward future studies in web development and design.",
    },
    {
      title: "Web Design.",
      src: 1,
      text: "A Web Designing course belongs to the field of Computer Science and IT. It enables students to learn",
    },
    {
      title: "UX Development.",
      src: 4,
      text: "User interface design (UI) is the design for machines and software, such as mobile devices, computers.",
    },
    {
      title: "Spoken English.",
      src: 2,
      text: "Spoken English Courses are pursued by candidates from all levels to improve their communication skills.",
    },
    {
      title: "Web Devlopment.",
      src: 4,
      text: "This course is designed to start you on a path toward future studies in web development and design.",
    },
    {
      title: "Advance Design.",
      src: 3,
      text: "A Web Development course belongs to the field of Computer Science and IT. It enables students to learn",
    },
  ];
  return (
    <>
      {imagePath.map((data, index) => (
        <Col xl={4} sm={6} className="xl-50 box-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center product-box">
              <div className="product-img">
                <Image width={350} height={415} className="img-fluid top-radius-blog" src={`${ImgPath}/faq/${data.src}.jpg`} alt="faq"/>
                <div className="product-hover">
                  <ul>
                    <li><i onClick={() => router.push("/app/knowledgebase")} className="icon-link"/></li>
                    <li><i onClick={() => router.push("/app/learning/learningdetail")} className="icon-import"/></li>
                  </ul>
                </div>
              </div>
              <BlogDetails text={data.text} />
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default SmallLearningCards;

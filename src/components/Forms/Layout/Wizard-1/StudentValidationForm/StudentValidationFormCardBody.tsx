import { useState, ChangeEvent, useRef } from "react";
import StudentForm from "./StudentForm";

const StudentValidationFormCardBody = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [studentValidationForm, setStudentValidationForm] = useState({name: "",email: "",password: "",confirmPassWord: "",portfolioURL: "",projectDescription: "",imageUpload: "",twitterUrl: "",gitHubUrl: "",studentFile: "",positions: "",positionQuestion: "",});
  const [level, setLevel] = useState(1);
  const {password,name,email,confirmPassWord,portfolioURL,projectDescription,imageUpload,twitterUrl,gitHubUrl,studentFile,positions,positionQuestion,} = studentValidationForm;
  const handleImageLabelClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleBackButton = () => {
    if (level === 2) {
      setLevel(level - 1);
    }
    if (level === 3) {
      setLevel(level - 1);
    }
    if (level === 4) {
      setLevel(level - 1);
    }
  };
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const handleNextButton = () => {
    if (name !== "" &&email !== "" &&password !== "" &&confirmPassWord !== "" &&level === 1) {
      setLevel(2);
    }
    if (projectDescription !== "" &&portfolioURL !== "" &&imageUpload !== "") {
      setLevel(3);
    }
    if (twitterUrl !== "" &&gitHubUrl !== "" &&studentFile !== "" &&positions !== "" &&positionQuestion !== "") {
      setLevel(4);
    }
  };
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    if (name === "imageUpload") {
      const file = event.target.files?.[0];
      const reader = new FileReader();
      reader.onload = () => {
        const uploadedImageUrl = reader.result as string;
        setImageUrl(uploadedImageUrl);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }
    let value =name == "agreeTerms" ||name == "informationCheckBox" ||name == "agreeConditions"? event.target.checked: name === "imageUpload" || name === "studentFile"? event.target.files && event.target.files[0].name: event.target.value;
    setStudentValidationForm({ ...studentValidationForm, [name]: value });
  };
  return (
    <StudentForm
      handleImageLabelClick={handleImageLabelClick}
      handleBackButton={handleBackButton}
      imageUrl={imageUrl}
      fileInputRef={fileInputRef}
      handleNextButton={handleNextButton}
      getUserData={getUserData}
      studentValidationForm={studentValidationForm}
      level={level}
    />
  );
};

export default StudentValidationFormCardBody;

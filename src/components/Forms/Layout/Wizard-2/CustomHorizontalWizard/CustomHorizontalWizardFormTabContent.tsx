import { TabContent, TabPane } from "reactstrap";
import PersonalInfoForm from "./PersonalInfoForm";
import BankInfoForm from "./BankInfoForm";
import InquiresForm from "./InquiresForm";
import SuccessfullyFormSubmitted from "./SuccessfullyFormSubmitted";
import { businessFormCommonProps } from "Types/FormType";

const CustomHorizontalWizardFormTabContent = ({activeTab,callbackActive,diffrentId}: businessFormCommonProps) => {
  return (
    <TabContent className=" dark-field " activeTab={activeTab}>
      <TabPane tabId={1}>
        <PersonalInfoForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={2}>
        <BankInfoForm callbackActive={callbackActive}  />
      </TabPane>
      <TabPane tabId={3}>
        <InquiresForm callbackActive={callbackActive} diffrentId={diffrentId} />
      </TabPane>
      <TabPane tabId={4}>
        <SuccessfullyFormSubmitted />
      </TabPane>
    </TabContent>
  );
};

export default CustomHorizontalWizardFormTabContent;

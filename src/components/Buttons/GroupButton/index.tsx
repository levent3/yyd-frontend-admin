import { Row } from "reactstrap"
import GroupButtonClass from "./GroupButton"
import RadioBtnClass from "./RadioBtn"
import NestingButton from "./NestingButton"
import VerticalBtnGroup from "./VerticalBtnGroup"

const GroupButtonContainer = () => {
  return (
    <Row>
        <GroupButtonClass />
        <RadioBtnClass />
        <NestingButton />
        <VerticalBtnGroup />
      </Row>
  )
}

export default GroupButtonContainer
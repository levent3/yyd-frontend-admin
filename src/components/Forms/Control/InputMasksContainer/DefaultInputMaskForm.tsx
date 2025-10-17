import Cleave from "cleave.js/react"
import { Col, Label } from "reactstrap"
import { CardNumber, Currency, Delimiter, PhoneNumber, Prefix, Tailprefix } from "utils/Constant"

const DefaultInputMaskForm = () => {
  return (
    <form className="row g-3">
        <Col xxl={4} sm={6} > 
            <Label className="col-form-label" htmlFor="cleave-number-format">{Currency}</Label>          
            <Cleave className="form-control" options={{  numeral: true,numeralThousandsGroupStyle: 'thousand'}} placeholder="hh:mm" />
        </Col>
        <Col xxl={4} sm={6}> 
          <Label className="col-form-label" htmlFor="cleave-type-prefix">{Prefix}</Label>
          <Cleave className="form-control" options={{prefix: 'PREFIX', delimiter: '-', blocks: [6, 4, 4, 4], uppercase: true}} placeholder="Prefix-xxxx-xxxx-xxxx" />
        </Col>
        <Col xxl={4} sm={6}>
          <Label className="col-form-label" htmlFor="cleave-type-delimiter">{Delimiter}</Label>
          <Cleave className="form-control" options={{ delimiters: ['.', '.', '-'], blocks: [3, 3, 3], uppercase: true}} placeholder="xxx·xxx·xxx" />
        </Col>
        <Col xxl={4} sm={6}>
          <Label  >{PhoneNumber}</Label>
          <input className="form-control" id="cleave-phone-number" type="text" placeholder="(xxx)xxx-xxxx" />
        </Col>
        <Col xxl={4} sm={6} >
          <Label>{CardNumber}</Label>
          <Cleave className="form-control" options={{creditCard: true}} placeholder="xxxx xxxx xxxx xxxx" />
        </Col>
        <Col xxl={4} sm={6}>
          <Label >{Tailprefix}</Label>
          <input className="form-control" id="tailprefix" type="text" placeholder="0000.00€" />
        </Col>
      </form>
  )
}

export default DefaultInputMaskForm
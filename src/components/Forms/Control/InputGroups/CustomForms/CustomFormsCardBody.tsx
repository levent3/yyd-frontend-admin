import { CardBody, InputGroup, Label, Input, Button } from "reactstrap";
import {Cuba,DairyMilk,DarkChocolates,Kitkat,Koho,Options,Orange,Oslo,Red,Roxo,SelectYourFavoriteChocolates,SelectYourFavoriteColors,SelectYourFavoritePixelstrapTheme,SelectYourFavoriteTheme,Submit,Tivo,Voxo,Yellow,} from "utils/Constant";

const CustomFormsCardBody = () => {
  return (
    <CardBody className="common-flex main-custom-form">
      <InputGroup>
        <Label className="input-group-text">{Options}</Label>
        <Input type="select">
          <option selected>{SelectYourFavoritePixelstrapTheme}</option>
          <option value={1}>{Tivo}</option>
          <option value={2}>{Cuba}</option>
          <option value={3}>{Roxo}</option>
        </Input>
      </InputGroup>
      <InputGroup>
        <Input type="select">
          <option selected>{SelectYourFavoriteColors}</option>
          <option value={1}>{Yellow}</option>
          <option value={2}>{Red}</option>
          <option value={3}>{Orange}</option>
        </Input>
        <Label className="input-group-text" htmlFor="inputGroupSelect02">{Options}</Label>
      </InputGroup>
      <InputGroup>
        <Button outline color="secondary" ><i className="icofont icofont-credit-card" /></Button>
        <Input type="select">
          <option selected>{SelectYourFavoriteChocolates}</option>
          <option value={1}>{DarkChocolates}</option>
          <option value={2}>{DairyMilk}</option>
          <option value={3}>{Kitkat}</option>
        </Input>
      </InputGroup>
      <InputGroup>
        <Input type="select">
          <option selected>{SelectYourFavoriteTheme}</option>
          <option value={1}>{Oslo}</option>
          <option value={2}>{Koho}</option>
          <option value={3}>{Voxo}</option>
        </Input>
        <Button outline color="secondary" >{Submit}</Button>
      </InputGroup>
    </CardBody>
  );
};

export default CustomFormsCardBody;

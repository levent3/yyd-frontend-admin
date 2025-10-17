import CommonLogo from "@/components/Others/authentication/common/CommonLogo";
import { Col, Container, Row } from "reactstrap";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { Button, FormGroup, Input, Label } from "reactstrap";
import {
  CreateAccount,
  DoNotAccount,
  EmailAddress,
  EnterEmailPasswordLogin,
  FacebookHeading,
  ForgotPassword,
  Password,
  RememberPassword,
  SignIn,
  SignInAccount,
  SignInWith,
  TwitterHeading,
  linkedInHeading,
} from "utils/Constant";
import { useAuth } from "../../../context/AuthContext";

const Login = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { email, password } = formValues;
  const { login } = useAuth();

  const handleUserValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const formSubmitHandle = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      await login({ email, password });
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <div className="login-card login-dark">
            <div>
              <div>
                <CommonLogo />
              </div>
              <div className="login-main">
                <form className="theme-form" onSubmit={formSubmitHandle}>
                  <h4>Yeryüzü Doktorları</h4>
                  <h6 className="mb-3">Yönetim Paneli Girişi</h6>
                  <p>Email ve şifrenizi girerek giriş yapın</p>
                  <FormGroup>
                    <Label className="col-form-label">{EmailAddress}</Label>
                    <Input
                      type="email"
                      required
                      placeholder="ornek@email.com"
                      value={email}
                      name="email"
                      onChange={handleUserValue}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{Password}</Label>
                    <div className="form-input position-relative">
                      <Input
                        type={showPassWord ? "text" : "password"}
                        placeholder="*********"
                        onChange={handleUserValue}
                        value={password}
                        name="password"
                      />
                      <div className="show-hide">
                        <span
                          onClick={() => setShowPassWord(!showPassWord)}
                          className={!showPassWord ? "show" : ""}
                        />
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup className="mb-0 form-group">
                    <div className="checkbox p-0">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" htmlFor="checkbox1">
                        {RememberPassword}
                      </Label>
                    </div>
                    <Link
                      className="link"
                      href="/pages/authentication/forget-pwd"
                    >
                      {ForgotPassword}
                    </Link>
                    <div className="text-end mt-3">
                      <Button
                        color="primary"
                        className="btn-block w-100"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Giriş yapılıyor..." : SignIn}
                      </Button>
                    </div>
                  </FormGroup>
                  <p className="mt-4 mb-0 text-center text-muted">
                    © 2025 Yeryüzü Doktorları - Tüm hakları saklıdır
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

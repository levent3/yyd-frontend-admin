import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Dashboard } from "utils/Constant";
import userService from "../../../services/userService";
import roleService, { Role } from "../../../services/roleService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const UserCreate = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    roleId: 0
  });
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingRoles, setLoadingRoles] = useState(true);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      setLoadingRoles(true);
      const rolesData = await roleService.getAllRoles();
      setRoles(rolesData);
    } catch (error) {
      console.error('Roller yüklenirken hata:', error);
      toast.error('Roller yüklenirken hata oluştu');
    } finally {
      setLoadingRoles(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'roleId' ? Number(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasyonlar
    if (!formData.username.trim()) {
      toast.error('Kullanıcı adı gerekli');
      return;
    }
    if (!formData.email.trim()) {
      toast.error('E-posta gerekli');
      return;
    }
    if (!formData.password) {
      toast.error('Şifre gerekli');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Şifreler eşleşmiyor');
      return;
    }
    if (formData.password.length < 6) {
      toast.error('Şifre en az 6 karakter olmalı');
      return;
    }
    if (!formData.roleId || formData.roleId === 0) {
      toast.error('Lütfen bir rol seçin');
      return;
    }

    try {
      setLoading(true);
      await userService.createUser({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName || undefined,
        roleId: formData.roleId
      });

      toast.success('Kullanıcı başarıyla oluşturuldu');
      router.push('/admin/users');
    } catch (error: any) {
      console.error('Kullanıcı oluşturulurken hata:', error);
      toast.error(error.response?.data?.message || 'Kullanıcı oluşturulurken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  if (loadingRoles) {
    return (
      <div className="page-body">
        <Container fluid={true}>
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="page-body">
      <Breadcrumbs title="Yeni Kullanıcı Ekle" mainTitle="Kullanıcı Ekle" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12} md={8} lg={6} className="mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Yeni Kullanıcı Oluştur</h5>
                  <Button
                    color="secondary"
                    size="sm"
                    onClick={() => router.push('/admin/users')}
                  >
                    ← Geri Dön
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="username">Kullanıcı Adı *</Label>
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Kullanıcı adı"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="email">E-posta *</Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="ornek@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="fullName">Ad Soyad</Label>
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Ad Soyad"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="password">Şifre *</Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="En az 6 karakter"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength={6}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="confirmPassword">Şifre Tekrar *</Label>
                    <Input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Şifreyi tekrar girin"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="roleId">Rol *</Label>
                    <Input
                      type="select"
                      id="roleId"
                      name="roleId"
                      value={formData.roleId}
                      onChange={handleChange}
                      required
                    >
                      <option value={0}>Rol Seçin...</option>
                      {roles.map(role => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button
                      color="secondary"
                      type="button"
                      onClick={() => router.push('/admin/users')}
                      disabled={loading}
                    >
                      İptal
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? 'Oluşturuluyor...' : 'Kullanıcı Oluştur'}
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserCreate;

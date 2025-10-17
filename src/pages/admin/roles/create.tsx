import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, Table } from "reactstrap";
import { Dashboard } from "utils/Constant";
import roleService, { Module } from "../../../services/roleService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const RoleCreate = () => {
  const router = useRouter();
  const [roleName, setRoleName] = useState("");
  const [allModules, setAllModules] = useState<Module[]>([]);
  const [selectedPermissions, setSelectedPermissions] = useState<{[key: number]: {read: boolean, create: boolean, update: boolean, delete: boolean}}>({});
  const [loading, setLoading] = useState(false);
  const [loadingModules, setLoadingModules] = useState(true);

  useEffect(() => {
    fetchAllModules();
  }, []);

  const fetchAllModules = async () => {
    try {
      setLoadingModules(true);
      const modules = await roleService.getAllModules();
      setAllModules(modules);

      // Tüm modüller için başlangıç izinlerini false yap
      const initialPerms: {[key: number]: {read: boolean, create: boolean, update: boolean, delete: boolean}} = {};
      modules.forEach(module => {
        initialPerms[module.id] = {read: false, create: false, update: false, delete: false};
      });
      setSelectedPermissions(initialPerms);
    } catch (error) {
      console.error('Modüller yüklenirken hata:', error);
      toast.error('Modüller yüklenirken hata oluştu');
    } finally {
      setLoadingModules(false);
    }
  };

  const handlePermissionChange = (moduleId: number, action: string, value: boolean) => {
    setSelectedPermissions(prev => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        [action]: value
      }
    }));
  };

  const handleSelectAll = (action: string) => {
    const newPerms = {...selectedPermissions};
    allModules.forEach(module => {
      newPerms[module.id] = {
        ...newPerms[module.id],
        [action]: true
      };
    });
    setSelectedPermissions(newPerms);
  };

  const handleDeselectAll = (action: string) => {
    const newPerms = {...selectedPermissions};
    allModules.forEach(module => {
      newPerms[module.id] = {
        ...newPerms[module.id],
        [action]: false
      };
    });
    setSelectedPermissions(newPerms);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!roleName.trim()) {
      toast.error('Lütfen rol adı girin');
      return;
    }

    try {
      setLoading(true);

      // Önce rolü oluştur
      const response = await roleService.createRole(roleName);
      const newRoleId = response.role.id;

      // Sonra seçili izinleri ata
      const permissionPromises = Object.entries(selectedPermissions)
        .filter(([moduleId, perms]) => perms.read || perms.create || perms.update || perms.delete)
        .map(([moduleId, perms]) =>
          roleService.assignPermission(newRoleId, Number(moduleId), perms)
        );

      await Promise.all(permissionPromises);

      toast.success('Rol başarıyla oluşturuldu');
      router.push('/admin/roles');
    } catch (error: any) {
      console.error('Rol oluşturulurken hata:', error);
      toast.error(error.response?.data?.message || 'Rol oluşturulurken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  if (loadingModules) {
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
      <Breadcrumbs title="Yeni Rol Ekle" mainTitle="Rol Ekle" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Yeni Rol Oluştur</h5>
                  <Button
                    color="secondary"
                    size="sm"
                    onClick={() => router.push('/admin/roles')}
                  >
                    ← Geri Dön
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="roleName">Rol Adı *</Label>
                    <Input
                      type="text"
                      id="roleName"
                      placeholder="Örn: Editör, Moderatör"
                      value={roleName}
                      onChange={(e) => setRoleName(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <hr className="my-4" />

                  <h6 className="mb-3">Modül İzinleri</h6>
                  <p className="text-muted small mb-3">Bu rol için izin vermek istediğiniz modülleri seçin</p>

                  <div className="table-responsive">
                    <Table bordered hover>
                      <thead className="table-light">
                        <tr>
                          <th>Modül</th>
                          <th className="text-center" style={{width: '120px'}}>
                            Okuma
                            <div className="mt-1">
                              <Button size="sm" color="link" className="p-0 me-1" onClick={() => handleSelectAll('read')}>Tümü</Button>
                              <Button size="sm" color="link" className="p-0" onClick={() => handleDeselectAll('read')}>Temizle</Button>
                            </div>
                          </th>
                          <th className="text-center" style={{width: '120px'}}>
                            Oluşturma
                            <div className="mt-1">
                              <Button size="sm" color="link" className="p-0 me-1" onClick={() => handleSelectAll('create')}>Tümü</Button>
                              <Button size="sm" color="link" className="p-0" onClick={() => handleDeselectAll('create')}>Temizle</Button>
                            </div>
                          </th>
                          <th className="text-center" style={{width: '120px'}}>
                            Güncelleme
                            <div className="mt-1">
                              <Button size="sm" color="link" className="p-0 me-1" onClick={() => handleSelectAll('update')}>Tümü</Button>
                              <Button size="sm" color="link" className="p-0" onClick={() => handleDeselectAll('update')}>Temizle</Button>
                            </div>
                          </th>
                          <th className="text-center" style={{width: '120px'}}>
                            Silme
                            <div className="mt-1">
                              <Button size="sm" color="link" className="p-0 me-1" onClick={() => handleSelectAll('delete')}>Tümü</Button>
                              <Button size="sm" color="link" className="p-0" onClick={() => handleDeselectAll('delete')}>Temizle</Button>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {allModules.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="text-center text-muted py-4">
                              Modül bulunamadı.
                            </td>
                          </tr>
                        ) : (
                          allModules.map((module) => {
                            const perms = selectedPermissions[module.id] || {read: false, create: false, update: false, delete: false};

                            return (
                              <tr key={module.id}>
                                <td>
                                  <strong>{module.name}</strong>
                                  <br />
                                  <small className="text-muted">{module.moduleKey}</small>
                                </td>
                                <td className="text-center">
                                  <Input
                                    type="checkbox"
                                    checked={perms.read}
                                    onChange={(e) => handlePermissionChange(module.id, 'read', e.target.checked)}
                                  />
                                </td>
                                <td className="text-center">
                                  <Input
                                    type="checkbox"
                                    checked={perms.create}
                                    onChange={(e) => handlePermissionChange(module.id, 'create', e.target.checked)}
                                  />
                                </td>
                                <td className="text-center">
                                  <Input
                                    type="checkbox"
                                    checked={perms.update}
                                    onChange={(e) => handlePermissionChange(module.id, 'update', e.target.checked)}
                                  />
                                </td>
                                <td className="text-center">
                                  <Input
                                    type="checkbox"
                                    checked={perms.delete}
                                    onChange={(e) => handlePermissionChange(module.id, 'delete', e.target.checked)}
                                  />
                                </td>
                              </tr>
                            );
                          })
                        )}
                      </tbody>
                    </Table>
                  </div>

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button
                      color="secondary"
                      type="button"
                      onClick={() => router.push('/admin/roles')}
                      disabled={loading}
                    >
                      İptal
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? 'Oluşturuluyor...' : 'Rol Oluştur'}
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

export default RoleCreate;

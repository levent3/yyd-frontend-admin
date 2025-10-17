import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Table, Button, Badge } from "reactstrap";
import roleService, { Role } from "../../../services/roleService";
import { toast } from "react-toastify";

const RolesPage = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      setLoading(true);
      const data = await roleService.getAllRoles();
      setRoles(data);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Roller yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`"${name}" rolünü silmek istediğinize emin misiniz?`)) {
      return;
    }

    try {
      await roleService.deleteRole(id);
      toast.success('Rol başarıyla silindi');
      fetchRoles();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Rol silinirken hata oluştu');
    }
  };

  return (
    <div className="page-body">
      <Breadcrumbs
        title="Rol Yönetimi"
        mainTitle="Rol Yönetimi"
        parent="Yönetim"
      />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>Roller</h5>
                  <Button color="primary" size="sm">
                    + Yeni Rol
                  </Button>
                </div>

                {loading ? (
                  <div className="text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Yükleniyor...</span>
                    </div>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Rol Adı</th>
                          <th>Kullanıcı Sayısı</th>
                          <th>Modül İzinleri</th>
                          <th>İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {roles.map((role) => (
                          <tr key={role.id}>
                            <td>{role.id}</td>
                            <td>
                              <strong>{role.name}</strong>
                              {role.name.toLowerCase() === 'superadmin' && (
                                <Badge color="danger" className="ms-2">Admin</Badge>
                              )}
                            </td>
                            <td>
                              <Badge color="info">{role._count?.users || 0} kullanıcı</Badge>
                            </td>
                            <td>
                              <Badge color="success">{role._count?.accessibleModules || 0} modül</Badge>
                            </td>
                            <td>
                              <Button
                                color="info"
                                size="sm"
                                className="me-2"
                                outline
                                onClick={() => window.location.href = `/admin/roles/${role.id}`}
                              >
                                İzinleri Yönet
                              </Button>
                              <Button
                                color="danger"
                                size="sm"
                                outline
                                disabled={role.name.toLowerCase() === 'superadmin'}
                                onClick={() => handleDelete(role.id, role.name)}
                              >
                                Sil
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>

                    {roles.length === 0 && (
                      <div className="text-center py-4 text-muted">
                        Henüz rol bulunmamaktadır.
                      </div>
                    )}
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RolesPage;

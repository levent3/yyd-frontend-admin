import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table, Button, Badge, Spinner } from "reactstrap";
import { Dashboard } from "utils/Constant";
import moduleService, { Module } from "../../../services/moduleService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Edit, Trash2, Plus } from "react-feather";
import SvgIcon from "CommonElements/Icons/SvgIcon";

const ModulesPage = () => {
  const router = useRouter();
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    try {
      setLoading(true);
      const data = await moduleService.getAllModules();
      setModules(data);
    } catch (error: any) {
      console.error('Modüller yüklenirken hata:', error);
      toast.error('Modüller yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number, name: string) => {
    if (!window.confirm(`"${name}" modülünü silmek istediğinize emin misiniz?`)) {
      return;
    }

    try {
      await moduleService.deleteModule(id);
      toast.success('Modül başarıyla silindi');
      fetchModules();
    } catch (error: any) {
      console.error('Modül silinirken hata:', error);
      toast.error(error.response?.data?.message || 'Modül silinirken hata oluştu');
    }
  };

  // Modülleri sıralama: önce parent'lar, sonra displayOrder'a göre
  const sortedModules = [...modules].sort((a, b) => {
    // Önce parentId'ye göre (parent'lar önce)
    if (!a.parentId && b.parentId) return -1;
    if (a.parentId && !b.parentId) return 1;

    // Parent'lar kendi aralarında displayOrder'a göre
    if (!a.parentId && !b.parentId) {
      return (a.displayOrder || 0) - (b.displayOrder || 0);
    }

    // Alt modüller önce parent'a göre, sonra displayOrder'a göre
    if (a.parentId !== b.parentId) {
      return (a.parentId || 0) - (b.parentId || 0);
    }

    return (a.displayOrder || 0) - (b.displayOrder || 0);
  });

  if (loading) {
    return (
      <div className="page-body">
        <Container fluid={true}>
          <div className="text-center py-5">
            <Spinner color="primary" />
            <p className="mt-2">Yükleniyor...</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="page-body">
      <Breadcrumbs title="Modüller" mainTitle="Modül Yönetimi" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5 className="mb-1">Tüm Modüller</h5>
                    <p className="text-muted mb-0 small">
                      Toplam {modules.length} modül ({modules.filter(m => !m.parentId).length} ana, {modules.filter(m => m.parentId).length} alt modül)
                    </p>
                  </div>
                  <Button color="primary" size="sm" onClick={() => router.push('/admin/modules/create')}>
                    <Plus size={16} className="me-1" />
                    Yeni Modül Ekle
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {modules.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted">Henüz modül bulunmuyor.</p>
                    <Button color="primary" onClick={() => router.push('/admin/modules/create')}>
                      İlk Modülü Oluştur
                    </Button>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <Table hover className="align-middle">
                      <thead className="table-light">
                        <tr>
                          <th style={{ width: '60px' }}>ID</th>
                          <th style={{ width: '80px' }}>Icon</th>
                          <th>Modül Adı</th>
                          <th>Modül Anahtarı</th>
                          <th>Path</th>
                          <th>Parent</th>
                          <th style={{ width: '80px' }} className="text-center">Sıra</th>
                          <th style={{ width: '120px' }}>Tip</th>
                          <th style={{ width: '140px' }} className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedModules.map((module) => {
                          const isParent = !module.parentId;
                          const parentModule = module.parentId
                            ? modules.find(m => m.id === module.parentId)
                            : null;

                          return (
                            <tr key={module.id} className={!isParent ? 'bg-light' : ''}>
                              <td>
                                <Badge color="secondary" pill>{module.id}</Badge>
                              </td>
                              <td>
                                {module.icon ? (
                                  <div className="d-flex align-items-center">
                                    <SvgIcon
                                      className="stroke-icon"
                                      iconId={`stroke-${module.icon}`}
                                      style={{ width: '24px', height: '24px' }}
                                    />
                                  </div>
                                ) : (
                                  <span className="text-muted">-</span>
                                )}
                              </td>
                              <td>
                                {isParent ? (
                                  <strong>{module.name}</strong>
                                ) : (
                                  <div className="d-flex align-items-center">
                                    <span className="text-muted me-2">└─</span>
                                    <span>{module.name}</span>
                                  </div>
                                )}
                              </td>
                              <td>
                                <code className={isParent ? 'text-primary' : 'text-muted'}>{module.moduleKey}</code>
                              </td>
                              <td>
                                {module.path ? (
                                  <code className="small text-info">{module.path}</code>
                                ) : (
                                  <span className="text-muted">-</span>
                                )}
                              </td>
                              <td>
                                {parentModule ? (
                                  <Badge color="info" className="small">
                                    {parentModule.name}
                                  </Badge>
                                ) : (
                                  <span className="text-muted">-</span>
                                )}
                              </td>
                              <td className="text-center">
                                <Badge color="light" className="text-dark">{module.displayOrder || 0}</Badge>
                              </td>
                              <td>
                                <Badge color={isParent ? 'primary' : 'secondary'}>
                                  {isParent ? 'Ana Modül' : 'Alt Modül'}
                                </Badge>
                              </td>
                              <td className="text-end">
                                <Button
                                  color="info"
                                  size="sm"
                                  className="me-2"
                                  onClick={() => router.push(`/admin/modules/edit/${module.id}`)}
                                  title="Düzenle"
                                >
                                  <Edit size={14} />
                                </Button>
                                <Button
                                  color="danger"
                                  size="sm"
                                  onClick={() => handleDelete(module.id, module.name)}
                                  title="Sil"
                                >
                                  <Trash2 size={14} />
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
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

export default ModulesPage;

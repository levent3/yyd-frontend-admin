import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Dashboard } from "utils/Constant";
import projectService from "../../../services/projectService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ProjectCreate = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('tr');
  const [formData, setFormData] = useState({
    translations: [
      { language: 'tr', title: '', description: '' },
      { language: 'en', title: '', description: '' }
    ],
    category: "",
    targetAmount: "",
    status: "planning",
    priority: "medium",
    isActive: true
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    // Dil-bağımsız alanlar
    if (name !== 'title' && name !== 'description') {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
      return;
    }

    // Dil-bağımlı alanlar (title, description)
    setFormData(prev => {
      const updatedTranslations = prev.translations.map(trans => {
        if (trans.language === activeTab) {
          return { ...trans, [name]: value };
        }
        return trans;
      });
      return { ...prev, translations: updatedTranslations };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // En az bir dilde title olmalı
    const hasValidTranslation = formData.translations.some(t => t.title.trim());
    if (!hasValidTranslation) {
      toast.error('En az bir dilde proje başlığı girmelisiniz');
      return;
    }

    // Boş olmayan çevirileri filtrele
    const validTranslations = formData.translations.filter(t => t.title.trim());

    try {
      setLoading(true);
      await projectService.createProject({
        translations: validTranslations,
        category: formData.category || undefined,
        targetAmount: formData.targetAmount ? Number(formData.targetAmount) : undefined,
        status: formData.status,
        priority: formData.priority,
        isActive: formData.isActive
      });

      toast.success('Proje başarıyla oluşturuldu');
      router.push('/admin/projects');
    } catch (error: any) {
      console.error('Proje oluşturulurken hata:', error);
      toast.error(error.response?.data?.message || 'Proje oluşturulurken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-body">
      <Breadcrumbs title="Yeni Proje Ekle" mainTitle="Proje Ekle" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12} lg={8} className="mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Yeni Proje Oluştur</h5>
                  <Button color="secondary" size="sm" onClick={() => router.push('/admin/projects')}>
                    ← Geri Dön
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  {/* Language Tabs */}
                  <Nav tabs className="mb-3">
                    <NavItem>
                      <NavLink
                        className={activeTab === 'tr' ? 'active' : ''}
                        onClick={() => setActiveTab('tr')}
                        style={{ cursor: 'pointer' }}
                      >
                        🇹🇷 Türkçe
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === 'en' ? 'active' : ''}
                        onClick={() => setActiveTab('en')}
                        style={{ cursor: 'pointer' }}
                      >
                        🇬🇧 English
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab}>
                    {['tr', 'en'].map(lang => {
                      const translation = formData.translations.find(t => t.language === lang) || { title: '', description: '' };
                      return (
                        <TabPane key={lang} tabId={lang}>
                          <FormGroup>
                            <Label for={`title-${lang}`}>Proje Başlığı * ({lang.toUpperCase()})</Label>
                            <Input
                              type="text"
                              id={`title-${lang}`}
                              name="title"
                              value={translation.title}
                              onChange={handleChange}
                              placeholder={`Proje başlığı (${lang.toUpperCase()})`}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for={`description-${lang}`}>Açıklama ({lang.toUpperCase()})</Label>
                            <Input
                              type="textarea"
                              id={`description-${lang}`}
                              name="description"
                              rows={4}
                              value={translation.description}
                              onChange={handleChange}
                              placeholder={`Proje açıklaması (${lang.toUpperCase()})`}
                            />
                          </FormGroup>
                        </TabPane>
                      );
                    })}
                  </TabContent>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="category">Kategori</Label>
                        <Input type="text" id="category" name="category" value={formData.category} onChange={handleChange} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="targetAmount">Hedef Tutar</Label>
                        <Input type="number" id="targetAmount" name="targetAmount" value={formData.targetAmount} onChange={handleChange} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="status">Durum</Label>
                        <Input type="select" id="status" name="status" value={formData.status} onChange={handleChange}>
                          <option value="planning">Planlamada</option>
                          <option value="active">Aktif</option>
                          <option value="completed">Tamamlandı</option>
                          <option value="paused">Duraklatıldı</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="priority">Öncelik</Label>
                        <Input type="select" id="priority" name="priority" value={formData.priority} onChange={handleChange}>
                          <option value="low">Düşük</option>
                          <option value="medium">Orta</option>
                          <option value="high">Yüksek</option>
                          <option value="urgent">Acil</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} />{' '}
                      Aktif
                    </Label>
                  </FormGroup>
                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button color="secondary" onClick={() => router.push('/admin/projects')} disabled={loading}>İptal</Button>
                    <Button color="primary" type="submit" disabled={loading}>
                      {loading ? 'Oluşturuluyor...' : 'Proje Oluştur'}
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

export default ProjectCreate;

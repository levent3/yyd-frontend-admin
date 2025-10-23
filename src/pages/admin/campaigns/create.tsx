import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, FormText, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Dashboard } from "utils/Constant";
import donationService from "../../../services/donationService";
import projectService from "../../../services/projectService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const CampaignCreate = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('tr');
  const [formData, setFormData] = useState({
    translations: [
      { language: 'tr', title: '', slug: '', description: '' },
      { language: 'en', title: '', slug: '', description: '' },
      { language: 'ar', title: '', slug: '', description: '' }
    ],
    targetAmount: "",
    imageUrl: "",
    category: "",
    isActive: true,
    isFeatured: false,
    displayOrder: 0,
    startDate: "",
    endDate: "",
    projectId: ""
  });
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoadingProjects(true);
      const response = await projectService.getAllProjects();
      setProjects(response.data);
    } catch (error) {
      console.error('Projeler yüklenirken hata:', error);
      toast.error('Projeler yüklenirken hata oluştu');
    } finally {
      setLoadingProjects(false);
    }
  };

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ş/g, 's')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    // Dil-bağımsız alanlar
    if (name !== 'title' && name !== 'slug' && name !== 'description') {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
      return;
    }

    // Dil-bağımlı alanlar (title, slug, description)
    setFormData(prev => {
      const updatedTranslations = prev.translations.map(trans => {
        if (trans.language === activeTab) {
          const updated = { ...trans, [name]: value };
          // Title değiştiğinde slug'ı otomatik oluştur
          if (name === 'title') {
            updated.slug = generateSlug(value);
          }
          return updated;
        }
        return trans;
      });
      return { ...prev, translations: updatedTranslations };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // En az bir dilde title ve slug olmalı
    const hasValidTranslation = formData.translations.some(t => t.title.trim() && t.slug.trim());
    if (!hasValidTranslation) {
      toast.error('En az bir dilde kampanya başlığı girmelisiniz');
      return;
    }

    // Boş olmayan çevirileri filtrele
    const validTranslations = formData.translations.filter(t =>
      t.title.trim() || t.slug.trim() || t.description.trim()
    );

    try {
      setLoading(true);
      await donationService.createCampaign({
        translations: validTranslations,
        targetAmount: formData.targetAmount ? Number(formData.targetAmount) : undefined,
        imageUrl: formData.imageUrl || undefined,
        category: formData.category || undefined,
        isActive: formData.isActive,
        isFeatured: formData.isFeatured,
        displayOrder: Number(formData.displayOrder),
        startDate: formData.startDate || undefined,
        endDate: formData.endDate || undefined,
        projectId: formData.projectId ? Number(formData.projectId) : undefined,
      });

      toast.success('Kampanya başarıyla oluşturuldu');
      router.push('/admin/campaigns');
    } catch (error: any) {
      console.error('Kampanya oluşturulurken hata:', error);
      toast.error(error.response?.data?.message || 'Kampanya oluşturulurken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  if (loadingProjects) {
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
      <Breadcrumbs title="Yeni Kampanya Ekle" mainTitle="Kampanya Ekle" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12} lg={8} className="mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Yeni Kampanya Oluştur</h5>
                  <Button color="secondary" size="sm" onClick={() => router.push('/admin/campaigns')}>
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
                    <NavItem>
                      <NavLink
                        className={activeTab === 'ar' ? 'active' : ''}
                        onClick={() => setActiveTab('ar')}
                        style={{ cursor: 'pointer' }}
                      >
                        🇸🇦 العربية
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab}>
                    {['tr', 'en', 'ar'].map(lang => {
                      const translation = formData.translations.find(t => t.language === lang) || { title: '', slug: '', description: '' };
                      return (
                        <TabPane key={lang} tabId={lang}>
                          <FormGroup>
                            <Label for={`title-${lang}`}>Kampanya Başlığı * ({lang.toUpperCase()})</Label>
                            <Input
                              type="text"
                              id={`title-${lang}`}
                              name="title"
                              placeholder={`Örn: Gazze İnsani Yardım (${lang.toUpperCase()})`}
                              value={translation.title}
                              onChange={handleChange}
                            />
                            <FormText color="muted">Slug otomatik olarak oluşturulacak</FormText>
                          </FormGroup>

                          <FormGroup>
                            <Label for={`slug-${lang}`}>Slug *</Label>
                            <Input
                              type="text"
                              id={`slug-${lang}`}
                              name="slug"
                              placeholder="gazze-insani-yardim"
                              value={translation.slug}
                              onChange={handleChange}
                              disabled
                            />
                          </FormGroup>

                          <FormGroup>
                            <Label for={`description-${lang}`}>Açıklama ({lang.toUpperCase()})</Label>
                            <Input
                              type="textarea"
                              id={`description-${lang}`}
                              name="description"
                              rows={5}
                              placeholder={`Kampanya detayları... (${lang.toUpperCase()})`}
                              value={translation.description}
                              onChange={handleChange}
                            />
                          </FormGroup>
                        </TabPane>
                      );
                    })}
                  </TabContent>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="targetAmount">Hedef Tutar (₺)</Label>
                        <Input
                          type="number"
                          id="targetAmount"
                          name="targetAmount"
                          placeholder="100000"
                          value={formData.targetAmount}
                          onChange={handleChange}
                          step="0.01"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="category">Kategori</Label>
                        <Input
                          type="select"
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                        >
                          <option value="">Kategori Seçin...</option>
                          <option value="Sağlık">Sağlık</option>
                          <option value="Eğitim">Eğitim</option>
                          <option value="Acil Yardım">Acil Yardım</option>
                          <option value="Zekat">Zekat</option>
                          <option value="Su Kuyusu">Su Kuyusu</option>
                          <option value="Genel">Genel</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label for="imageUrl">Görsel URL</Label>
                    <Input
                      type="text"
                      id="imageUrl"
                      name="imageUrl"
                      placeholder="https://..."
                      value={formData.imageUrl}
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="projectId">İlişkili Proje</Label>
                    <Input
                      type="select"
                      id="projectId"
                      name="projectId"
                      value={formData.projectId}
                      onChange={handleChange}
                    >
                      <option value="">Proje Seçin (Opsiyonel)</option>
                      {projects.map(project => (
                        <option key={project.id} value={project.id}>
                          {project.title}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="startDate">Başlangıç Tarihi</Label>
                        <Input
                          type="date"
                          id="startDate"
                          name="startDate"
                          value={formData.startDate}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="endDate">Bitiş Tarihi</Label>
                        <Input
                          type="date"
                          id="endDate"
                          name="endDate"
                          value={formData.endDate}
                          onChange={handleChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="displayOrder">Sıralama</Label>
                        <Input
                          type="number"
                          id="displayOrder"
                          name="displayOrder"
                          value={formData.displayOrder}
                          onChange={handleChange}
                          min="0"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup check className="mb-3">
                    <Label check>
                      <Input
                        type="checkbox"
                        name="isActive"
                        checked={formData.isActive}
                        onChange={handleChange}
                      />{' '}
                      Aktif
                    </Label>
                  </FormGroup>

                  <FormGroup check className="mb-3">
                    <Label check>
                      <Input
                        type="checkbox"
                        name="isFeatured"
                        checked={formData.isFeatured}
                        onChange={handleChange}
                      />{' '}
                      Öne Çıkan Kampanya
                    </Label>
                  </FormGroup>

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button color="secondary" onClick={() => router.push('/admin/campaigns')} disabled={loading}>
                      İptal
                    </Button>
                    <Button color="primary" type="submit" disabled={loading}>
                      {loading ? 'Oluşturuluyor...' : 'Kampanya Oluştur'}
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

export default CampaignCreate;

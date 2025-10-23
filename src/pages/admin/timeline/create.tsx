import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Dashboard } from "utils/Constant";
import timelineService from "../../../services/timelineService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const TimelineCreate = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('tr');
  const [formData, setFormData] = useState({
    year: new Date().getFullYear(),
    displayOrder: 0,
    isActive: true,
    translations: [
      { language: 'tr', title: '', description: '', content: '' },
      { language: 'en', title: '', description: '', content: '' },
      { language: 'ar', title: '', description: '', content: '' }
    ]
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    // Language-independent fields
    if (name !== 'title' && name !== 'description' && name !== 'content') {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
      return;
    }

    // Language-dependent fields
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

    // At least one language must have a title
    const hasValidTranslation = formData.translations.some(t => t.title.trim());
    if (!hasValidTranslation) {
      toast.error('En az bir dilde başlık girmelisiniz');
      return;
    }

    // Filter non-empty translations
    const validTranslations = formData.translations.filter(t =>
      t.title.trim() || t.description.trim() || t.content.trim()
    );

    try {
      setLoading(true);

      await timelineService.createTimeline({
        year: Number(formData.year),
        displayOrder: Number(formData.displayOrder),
        isActive: formData.isActive,
        translations: validTranslations
      });

      toast.success('Tarihçe kaydı başarıyla oluşturuldu');
      router.push('/admin/timeline');
    } catch (error: any) {
      console.error('Tarihçe kaydı oluşturulurken hata:', error);
      toast.error(error.response?.data?.message || 'Tarihçe kaydı oluşturulurken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-body">
      <Breadcrumbs title="Yeni Tarihçe Kaydı Ekle" mainTitle="Tarihçe Ekle" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12} lg={8} className="mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Yeni Tarihçe Kaydı Oluştur</h5>
                  <Button color="secondary" size="sm" onClick={() => router.push('/admin/timeline')}>
                    ← Geri Dön
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  {/* Basic Info */}
                  <Row className="mb-3">
                    <Col md={6}>
                      <FormGroup>
                        <Label for="year">Yıl *</Label>
                        <Input
                          type="number"
                          id="year"
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          required
                          min="1900"
                          max="2100"
                        />
                      </FormGroup>
                    </Col>
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

                  <hr />

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
                      const translation = formData.translations.find(t => t.language === lang) || { title: '', description: '', content: '' };
                      return (
                        <TabPane key={lang} tabId={lang}>
                          <FormGroup>
                            <Label for={`title-${lang}`}>Başlık * ({lang.toUpperCase()})</Label>
                            <Input
                              type="text"
                              id={`title-${lang}`}
                              name="title"
                              value={translation.title}
                              onChange={handleChange}
                              placeholder={`Başlık (${lang.toUpperCase()})`}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for={`description-${lang}`}>Kısa Açıklama ({lang.toUpperCase()})</Label>
                            <Input
                              type="textarea"
                              id={`description-${lang}`}
                              name="description"
                              rows={3}
                              value={translation.description}
                              onChange={handleChange}
                              placeholder={`Kısa açıklama (${lang.toUpperCase()})`}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for={`content-${lang}`}>Detaylı İçerik ({lang.toUpperCase()})</Label>
                            <Input
                              type="textarea"
                              id={`content-${lang}`}
                              name="content"
                              rows={5}
                              value={translation.content}
                              onChange={handleChange}
                              placeholder={`Detaylı içerik (${lang.toUpperCase()})`}
                            />
                          </FormGroup>
                        </TabPane>
                      );
                    })}
                  </TabContent>

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button color="secondary" onClick={() => router.push('/admin/timeline')} disabled={loading}>
                      İptal
                    </Button>
                    <Button color="primary" type="submit" disabled={loading}>
                      {loading ? 'Oluşturuluyor...' : 'Kayıt Oluştur'}
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

export default TimelineCreate;

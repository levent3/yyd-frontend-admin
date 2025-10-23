import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, Nav, NavItem, NavLink, TabContent, TabPane, Spinner } from "reactstrap";
import { Dashboard } from "utils/Constant";
import projectService from "../../../../services/projectService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ProjectEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState('tr');
  const [formData, setFormData] = useState({
    translations: [
      { language: 'tr', title: '', description: '', content: '' },
      { language: 'en', title: '', description: '', content: '' },
      { language: 'ar', title: '', description: '', content: '' }
    ],
    category: "",
    location: "",
    country: "",
    coverImage: "",
    targetAmount: "",
    budget: "",
    beneficiaryCount: "",
    startDate: "",
    endDate: "",
    status: "planning",
    priority: "medium",
    isActive: true,
    isFeatured: false,
    displayOrder: 0
  });
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  useEffect(() => {
    if (id) {
      fetchProject();
    }
  }, [id]);

  const fetchProject = async () => {
    try {
      setLoadingData(true);
      const project = await projectService.getProjectById(Number(id));

      // Backend'den gelen translations varsa kullan, yoksa mapped fields kullan
      const translations = project.translations || [
        { language: 'tr', title: project.title || '', description: project.description || '', content: project.content || '' },
        { language: 'en', title: '', description: '', content: '' },
        { language: 'ar', title: '', description: '', content: '' }
      ];

      // Tüm diller için translation olduğundan emin ol
      const ensureAllLanguages = (trans: any[]) => {
        const languages = ['tr', 'en', 'ar'];
        return languages.map(lang => {
          const existing = trans.find(t => t.language === lang);
          return existing || { language: lang, title: '', description: '', content: '' };
        });
      };

      setFormData({
        translations: ensureAllLanguages(translations),
        category: project.category || "",
        location: project.location || "",
        country: project.country || "",
        coverImage: project.coverImage || "",
        targetAmount: project.targetAmount?.toString() || "",
        budget: project.budget?.toString() || "",
        beneficiaryCount: project.beneficiaryCount?.toString() || "",
        startDate: project.startDate ? new Date(project.startDate).toISOString().split('T')[0] : "",
        endDate: project.endDate ? new Date(project.endDate).toISOString().split('T')[0] : "",
        status: project.status || "planning",
        priority: project.priority || "medium",
        isActive: project.isActive ?? true,
        isFeatured: project.isFeatured ?? false,
        displayOrder: project.displayOrder || 0
      });
      setImagePreview(project.coverImage || '');
    } catch (error: any) {
      console.error('Proje yüklenirken hata:', error);
      toast.error('Proje yüklenirken hata oluştu');
      router.push('/admin/projects');
    } finally {
      setLoadingData(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    // Dil-bağımsız alanlar
    if (name !== 'title' && name !== 'description' && name !== 'content') {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
      return;
    }

    // Dil-bağımlı alanlar (title, description, content)
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);

      // Preview oluştur
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // En az bir dilde title olmalı
    const hasValidTranslation = formData.translations.some(t => t.title.trim());
    if (!hasValidTranslation) {
      toast.error('En az bir dilde proje başlığı girmelisiniz');
      return;
    }

    // Boş olmayan çevirileri filtrele - title, description veya content'ten herhangi biri doluysa gönder
    const validTranslations = formData.translations.filter(t =>
      t.title.trim() || t.description.trim() || t.content.trim()
    );

    try {
      setLoading(true);

      let coverImageUrl = formData.coverImage;

      // Eğer yeni bir görsel seçildiyse, önce yükle
      if (imageFile) {
        const uploadResult = await projectService.uploadImage(imageFile);
        coverImageUrl = uploadResult.imageUrl;
      }

      await projectService.updateProject(Number(id), {
        translations: validTranslations,
        category: formData.category || undefined,
        location: formData.location || undefined,
        country: formData.country || undefined,
        coverImage: coverImageUrl || undefined,
        targetAmount: formData.targetAmount ? Number(formData.targetAmount) : undefined,
        budget: formData.budget ? Number(formData.budget) : undefined,
        beneficiaryCount: formData.beneficiaryCount ? Number(formData.beneficiaryCount) : undefined,
        startDate: formData.startDate || undefined,
        endDate: formData.endDate || undefined,
        status: formData.status,
        priority: formData.priority,
        isActive: formData.isActive,
        isFeatured: formData.isFeatured,
        displayOrder: Number(formData.displayOrder)
      });

      toast.success('Proje başarıyla güncellendi');
      router.push('/admin/projects');
    } catch (error: any) {
      console.error('Proje güncellenirken hata:', error);
      toast.error(error.response?.data?.message || 'Proje güncellenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) {
    return (
      <div className="page-body">
        <Container fluid={true}>
          <div className="text-center py-5">
            <Spinner color="primary" />
            <p className="mt-2">Proje yükleniyor...</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="page-body">
      <Breadcrumbs title="Proje Düzenle" mainTitle="Proje Düzenle" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12} lg={8} className="mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Proje Düzenle</h5>
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
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="category">Kategori</Label>
                        <Input type="select" id="category" name="category" value={formData.category} onChange={handleChange}>
                          <option value="">Kategori Seçin...</option>
                          <option value="Sağlık">Sağlık</option>
                          <option value="Eğitim">Eğitim</option>
                          <option value="Acil Yardım">Acil Yardım</option>
                          <option value="Su Kuyusu">Su Kuyusu</option>
                          <option value="Altyapı">Altyapı</option>
                          <option value="Genel">Genel</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="location">Konum</Label>
                        <Input type="text" id="location" name="location" value={formData.location} onChange={handleChange} placeholder="Örn: Gazze, Yemen" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="country">Ülke</Label>
                        <Input type="text" id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Örn: Filistin, Yemen" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="coverImage">Kapak Görseli</Label>
                        <Input
                          type="file"
                          id="coverImage"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        {imagePreview && (
                          <div className="mt-2">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover', borderRadius: '4px' }}
                            />
                          </div>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="targetAmount">Hedef Tutar (₺)</Label>
                        <Input type="number" id="targetAmount" name="targetAmount" value={formData.targetAmount} onChange={handleChange} step="0.01" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="budget">Bütçe (₺)</Label>
                        <Input type="number" id="budget" name="budget" value={formData.budget} onChange={handleChange} step="0.01" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="beneficiaryCount">Faydalanacak Kişi Sayısı</Label>
                        <Input type="number" id="beneficiaryCount" name="beneficiaryCount" value={formData.beneficiaryCount} onChange={handleChange} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="displayOrder">Sıralama</Label>
                        <Input type="number" id="displayOrder" name="displayOrder" value={formData.displayOrder} onChange={handleChange} min="0" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="startDate">Başlangıç Tarihi</Label>
                        <Input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="endDate">Bitiş Tarihi</Label>
                        <Input type="date" id="endDate" name="endDate" value={formData.endDate} onChange={handleChange} />
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
                  <FormGroup check className="mb-3">
                    <Label check>
                      <Input type="checkbox" name="isActive" checked={formData.isActive} onChange={handleChange} />{' '}
                      Aktif
                    </Label>
                  </FormGroup>
                  <FormGroup check className="mb-3">
                    <Label check>
                      <Input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} />{' '}
                      Öne Çıkan Proje
                    </Label>
                  </FormGroup>
                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button color="secondary" onClick={() => router.push('/admin/projects')} disabled={loading}>İptal</Button>
                    <Button color="primary" type="submit" disabled={loading}>
                      {loading ? 'Güncelleniyor...' : 'Proje Güncelle'}
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

export default ProjectEdit;

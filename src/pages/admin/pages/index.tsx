/**
 * Pages Management - REFACTORED
 */
import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table, Button, Badge, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Form, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Dashboard } from "utils/Constant";
import LoadingState from "../../../components/common/LoadingState";
import EmptyState from "../../../components/common/EmptyState";
import useConfirm from "../../../hooks/useConfirm";
import withPermission from "../../../../helper/WithPermission";
import pageService, { Page } from "../../../services/pageService";
import uploadService from "../../../services/uploadService";
import { toast } from "react-toastify";
import { Edit, Trash2, Plus, X, Eye } from "react-feather";

const PagesManagement = () => {
  const confirm = useConfirm();
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ status: '', pageType: '' });
  const [modal, setModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<Page | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, total: 0 });
  const [activeTab, setActiveTab] = useState('tr');

  const [formData, setFormData] = useState({
    translations: [
      { language: 'tr', title: '', slug: '', content: '', excerpt: '', metaTitle: '', metaDescription: '', metaKeywords: '' },
      { language: 'en', title: '', slug: '', content: '', excerpt: '', metaTitle: '', metaDescription: '', metaKeywords: '' },
      { language: 'ar', title: '', slug: '', content: '', excerpt: '', metaTitle: '', metaDescription: '', metaKeywords: '' }
    ],
    pageType: 'general' as const,
    status: 'draft' as const,
    isPublic: true,
    isActive: true,
    displayOrder: 0,
    featuredImage: '',
  });

  useEffect(() => {
    fetchPages();
  }, [filter, pagination.page]);

  const fetchPages = async () => {
    try {
      setLoading(true);
      const params: any = { page: pagination.page, limit: pagination.limit };
      if (filter.status) params.status = filter.status;
      if (filter.pageType) params.pageType = filter.pageType;

      const response = await pageService.getAllPages(params);
      setPages(response.pages);
      setPagination({ ...pagination, total: response.total });
    } catch (error: any) {
      console.error('Sayfalar yüklenirken hata:', error);
      confirm.error('Hata!', 'Sayfalar yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingState message="Sayfalar yükleniyor..." />;

  const toggleModal = () => {
    setModal(!modal);
    if (modal) {
      setEditingItem(null);
      setActiveTab('tr');
      setFormData({
        translations: [
          { language: 'tr', title: '', slug: '', content: '', excerpt: '', metaTitle: '', metaDescription: '', metaKeywords: '' },
          { language: 'en', title: '', slug: '', content: '', excerpt: '', metaTitle: '', metaDescription: '', metaKeywords: '' },
          { language: 'ar', title: '', slug: '', content: '', excerpt: '', metaTitle: '', metaDescription: '', metaKeywords: '' }
        ],
        pageType: 'general',
        status: 'draft',
        isPublic: true,
        isActive: true,
        displayOrder: 0,
        featuredImage: '',
      });
    }
  };

  const handleEdit = (item: Page) => {
    setEditingItem(item);

    // Backend'den gelen translations array'i kullan veya mevcut çeviriden oluştur
    const existingTranslations = (item as any).translations || [];
    const languages = ['tr', 'en', 'ar'];

    // Her dil için translation oluştur
    const translations = languages.map(lang => {
      const existing = existingTranslations.find((t: any) => t.language === lang);
      if (existing) {
        return {
          language: lang,
          title: existing.title || '',
          slug: existing.slug || '',
          content: existing.content || '',
          excerpt: existing.excerpt || '',
          metaTitle: existing.metaTitle || '',
          metaDescription: existing.metaDescription || '',
          metaKeywords: existing.metaKeywords || ''
        };
      }
      // Eğer çeviri yoksa, mevcut dil TR ise ondan al, yoksa boş bırak
      if (lang === 'tr') {
        return {
          language: 'tr',
          title: item.title || '',
          slug: item.slug || '',
          content: item.content || '',
          excerpt: item.excerpt || '',
          metaTitle: item.metaTitle || '',
          metaDescription: item.metaDescription || '',
          metaKeywords: item.metaKeywords || ''
        };
      }
      return {
        language: lang,
        title: '',
        slug: '',
        content: '',
        excerpt: '',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: ''
      };
    });

    setFormData({
      translations,
      pageType: item.pageType,
      status: item.status,
      isPublic: item.isPublic,
      isActive: item.isActive,
      displayOrder: item.displayOrder,
      featuredImage: item.featuredImage || '',
    });
    setActiveTab('tr');
    setModal(true);
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    // Dil-bağımsız alanlar
    const translationFields = ['title', 'slug', 'content', 'excerpt', 'metaTitle', 'metaDescription', 'metaKeywords'];
    if (!translationFields.includes(name)) {
      setFormData((prev: any) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
      return;
    }

    // Dil-bağımlı alanlar
    setFormData((prev: any) => {
      const updatedTranslations = prev.translations.map((trans: any) => {
        if (trans.language === activeTab) {
          const updated = { ...trans, [name]: value };
          // Title değiştiğinde slug'ı otomatik oluştur
          if (name === 'title' && !editingItem) {
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
    setSaving(true);

    try {
      // En az bir dilde title ve content olmalı
      const hasValidTranslation = formData.translations.some(
        (t: any) => t.title.trim() && t.content.trim()
      );

      if (!hasValidTranslation) {
        toast.error('En az bir dilde başlık ve içerik girmelisiniz');
        setSaving(false);
        return;
      }

      // Boş olmayan çevirileri filtrele
      const validTranslations = formData.translations.filter(
        (t: any) => t.title.trim() && t.content.trim()
      );

      const submitData = {
        ...formData,
        translations: validTranslations
      };

      if (editingItem) {
        await pageService.updatePage(editingItem.id, submitData);
        toast.success('Sayfa güncellendi');
      } else {
        await pageService.createPage(submitData);
        toast.success('Sayfa oluşturuldu');
      }
      toggleModal();
      fetchPages();
    } catch (error: any) {
      console.error('Sayfa kaydedilirken hata:', error);
      toast.error(error.response?.data?.message || 'Sayfa kaydedilirken hata oluştu');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Bu sayfayı silmek istediğinizden emin misiniz?')) return;

    try {
      await pageService.deletePage(id);
      toast.success('Sayfa silindi');
      fetchPages();
    } catch (error: any) {
      console.error('Sayfa silinirken hata:', error);
      toast.error(error.response?.data?.message || 'Sayfa silinirken hata oluştu');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validationError = uploadService.validateFile(file, 'image');
    if (validationError) {
      toast.error(validationError);
      return;
    }

    try {
      setUploadingImage(true);
      setUploadProgress(0);

      const result = await uploadService.uploadImage(file, (progress) => {
        setUploadProgress(progress);
      });

      setFormData(prev => ({ ...prev, featuredImage: result.fileUrl }));
      toast.success('Görsel yüklendi');
    } catch (error: any) {
      console.error('Görsel yüklenirken hata:', error);
      toast.error(error.response?.data?.message || 'Görsel yüklenirken hata oluştu');
    } finally {
      setUploadingImage(false);
      setUploadProgress(0);
    }
  };

  const handleRemoveImage = () => {
    setFormData(prev => ({ ...prev, featuredImage: '' }));
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString('tr-TR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge color="success">Yayında</Badge>;
      case 'draft':
        return <Badge color="warning">Taslak</Badge>;
      default:
        return <Badge color="secondary">{status}</Badge>;
    }
  };

  const getPageTypeName = (type: string) => {
    const types: { [key: string]: string } = {
      about: 'Hakkımızda',
      terms: 'Kullanım Koşulları',
      privacy: 'Gizlilik Politikası',
      faq: 'SSS',
      contact: 'İletişim',
      team: 'Ekibimiz',
      general: 'Genel'
    };
    return types[type] || type;
  };

  if (loading && pages.length === 0) {
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
      <Breadcrumbs title="Sayfalar" mainTitle="Sayfa Yönetimi" parent={Dashboard} />
      <Container fluid={true}>
        <Row className="mb-3">
          <Col sm={12}>
            <Card>
              <CardBody>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="statusFilter">Durum</Label>
                      <Input
                        type="select"
                        id="statusFilter"
                        value={filter.status}
                        onChange={(e) => setFilter({ ...filter, status: e.target.value })}
                      >
                        <option value="">Tümü</option>
                        <option value="draft">Taslak</option>
                        <option value="published">Yayında</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="pageTypeFilter">Sayfa Türü</Label>
                      <Input
                        type="select"
                        id="pageTypeFilter"
                        value={filter.pageType}
                        onChange={(e) => setFilter({ ...filter, pageType: e.target.value })}
                      >
                        <option value="">Tümü</option>
                        <option value="about">Hakkımızda</option>
                        <option value="terms">Kullanım Koşulları</option>
                        <option value="privacy">Gizlilik Politikası</option>
                        <option value="faq">SSS</option>
                        <option value="contact">İletişim</option>
                        <option value="team">Ekibimiz</option>
                        <option value="general">Genel</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Tüm Sayfalar</h5>
                  <Button color="primary" onClick={toggleModal}>
                    <Plus size={16} className="me-2" />
                    Yeni Sayfa Ekle
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {pages.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted">Henüz sayfa bulunmuyor.</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead className="table-light">
                        <tr>
                          <th>Başlık</th>
                          <th>Tür</th>
                          <th>Durum</th>
                          <th>Public</th>
                          <th>Aktif</th>
                          <th>Yayın Tarihi</th>
                          <th className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pages.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <div>
                                <strong>{item.title}</strong>
                                <br />
                                <small className="text-muted">/{item.slug}</small>
                              </div>
                            </td>
                            <td>
                              <Badge color="info">{getPageTypeName(item.pageType)}</Badge>
                            </td>
                            <td>{getStatusBadge(item.status)}</td>
                            <td>
                              {item.isPublic ? (
                                <Badge color="success">Evet</Badge>
                              ) : (
                                <Badge color="secondary">Hayır</Badge>
                              )}
                            </td>
                            <td>
                              {item.isActive ? (
                                <Badge color="success">Evet</Badge>
                              ) : (
                                <Badge color="secondary">Hayır</Badge>
                              )}
                            </td>
                            <td>
                              <small>{item.publishedAt ? formatDate(item.publishedAt) : '-'}</small>
                            </td>
                            <td className="text-end">
                              {item.status === 'published' && item.isPublic && (
                                <a
                                  href={`/pages/${item.slug}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-sm btn-success me-2"
                                  title="Önizle"
                                >
                                  <Eye size={14} />
                                </a>
                              )}
                              <Button
                                color="info"
                                size="sm"
                                className="me-2"
                                onClick={() => handleEdit(item)}
                                title="Düzenle"
                              >
                                <Edit size={14} />
                              </Button>
                              <Button
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(item.id)}
                                title="Sil"
                              >
                                <Trash2 size={14} />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                )}

                {pagination.total > pagination.limit && (
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <small className="text-muted">
                        Toplam {pagination.total} sayfa bulundu
                      </small>
                    </div>
                    <div className="btn-group">
                      <Button
                        size="sm"
                        color="secondary"
                        disabled={pagination.page === 1}
                        onClick={() => setPagination({ ...pagination, page: pagination.page - 1 })}
                      >
                        Önceki
                      </Button>
                      <Button size="sm" color="light" disabled>
                        Sayfa {pagination.page} / {Math.ceil(pagination.total / pagination.limit)}
                      </Button>
                      <Button
                        size="sm"
                        color="secondary"
                        disabled={pagination.page >= Math.ceil(pagination.total / pagination.limit)}
                        onClick={() => setPagination({ ...pagination, page: pagination.page + 1 })}
                      >
                        Sonraki
                      </Button>
                    </div>
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Add/Edit Modal */}
      <Modal isOpen={modal} toggle={toggleModal} size="xl">
        <ModalHeader toggle={toggleModal}>
          {editingItem ? 'Sayfa Düzenle' : 'Yeni Sayfa Ekle'}
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
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

            <Row>
              <Col md={8}>
                <TabContent activeTab={activeTab}>
                  {['tr', 'en', 'ar'].map(lang => {
                    const translation = formData.translations.find((t: any) => t.language === lang) || {};
                    return (
                      <TabPane key={lang} tabId={lang}>
                        <FormGroup>
                          <Label>Başlık * ({lang.toUpperCase()})</Label>
                          <Input
                            type="text"
                            name="title"
                            value={translation.title || ''}
                            onChange={handleChange}
                            placeholder={`Sayfa başlığı (${lang.toUpperCase()})`}
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label>Slug (URL)</Label>
                          <Input
                            type="text"
                            name="slug"
                            value={translation.slug || ''}
                            onChange={handleChange}
                            placeholder="sayfa-url"
                            disabled
                          />
                          <small className="text-muted">Otomatik oluşturulur</small>
                        </FormGroup>

                        <FormGroup>
                          <Label>Kısa Özet ({lang.toUpperCase()})</Label>
                          <Input
                            type="textarea"
                            name="excerpt"
                            value={translation.excerpt || ''}
                            onChange={handleChange}
                            rows={2}
                            placeholder={`Sayfa özeti (${lang.toUpperCase()})`}
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label>İçerik * ({lang.toUpperCase()})</Label>
                          <Input
                            type="textarea"
                            name="content"
                            value={translation.content || ''}
                            onChange={handleChange}
                            rows={12}
                            placeholder={`Sayfa içeriği (${lang.toUpperCase()})`}
                          />
                        </FormGroup>

                        <Row>
                          <Col md={6}>
                            <FormGroup>
                              <Label>SEO Başlık ({lang.toUpperCase()})</Label>
                              <Input
                                type="text"
                                name="metaTitle"
                                value={translation.metaTitle || ''}
                                onChange={handleChange}
                                placeholder={`SEO başlığı (${lang.toUpperCase()})`}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              <Label>SEO Anahtar Kelimeler ({lang.toUpperCase()})</Label>
                              <Input
                                type="text"
                                name="metaKeywords"
                                value={translation.metaKeywords || ''}
                                onChange={handleChange}
                                placeholder="kelime1, kelime2, kelime3"
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <FormGroup>
                          <Label>SEO Açıklama ({lang.toUpperCase()})</Label>
                          <Input
                            type="textarea"
                            name="metaDescription"
                            value={translation.metaDescription || ''}
                            onChange={handleChange}
                            rows={2}
                            placeholder={`SEO açıklaması (${lang.toUpperCase()})`}
                          />
                        </FormGroup>
                      </TabPane>
                    );
                  })}
                </TabContent>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label>Sayfa Türü</Label>
                  <Input
                    type="select"
                    name="pageType"
                    value={formData.pageType}
                    onChange={handleChange}
                  >
                    <option value="general">Genel</option>
                    <option value="about">Hakkımızda</option>
                    <option value="terms">Kullanım Koşulları</option>
                    <option value="privacy">Gizlilik Politikası</option>
                    <option value="faq">SSS</option>
                    <option value="contact">İletişim</option>
                    <option value="team">Ekibimiz</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label>Durum</Label>
                  <Input
                    type="select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="draft">Taslak</option>
                    <option value="published">Yayında</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label>Sıralama</Label>
                  <Input
                    type="number"
                    name="displayOrder"
                    value={formData.displayOrder}
                    onChange={handleChange}
                    min="0"
                  />
                  <small className="text-muted">Menülerde gösterim sırası</small>
                </FormGroup>

                <FormGroup check className="mb-3">
                  <Label check>
                    <Input
                      type="checkbox"
                      name="isPublic"
                      checked={formData.isPublic}
                      onChange={handleChange}
                    />
                    {' '}Public (Herkese Açık)
                  </Label>
                </FormGroup>

                <FormGroup check className="mb-3">
                  <Label check>
                    <Input
                      type="checkbox"
                      name="isActive"
                      checked={formData.isActive}
                      onChange={handleChange}
                    />
                    {' '}Aktif
                  </Label>
                </FormGroup>

                <FormGroup>
                  <Label>Kapak Görseli</Label>
                  {!formData.featuredImage ? (
                    <div>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploadingImage}
                      />
                      {uploadingImage && (
                        <div className="mt-2">
                          <div className="progress">
                            <div
                              className="progress-bar progress-bar-striped progress-bar-animated"
                              role="progressbar"
                              style={{ width: `${uploadProgress}%` }}
                            >
                              {uploadProgress}%
                            </div>
                          </div>
                        </div>
                      )}
                      <small className="text-muted d-block mt-1">
                        Maksimum 10MB, JPG, PNG, GIF veya WebP
                      </small>
                    </div>
                  ) : (
                    <div>
                      <div className="position-relative">
                        <img
                          src={formData.featuredImage}
                          alt="Preview"
                          className="img-fluid rounded"
                          style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }}
                        />
                        <Button
                          color="danger"
                          size="sm"
                          className="position-absolute top-0 end-0 m-2"
                          onClick={handleRemoveImage}
                          title="Görseli kaldır"
                        >
                          <X size={14} />
                        </Button>
                      </div>
                      <small className="text-muted d-block mt-1">
                        Görseli değiştirmek için önce kaldırın
                      </small>
                    </div>
                  )}
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal} disabled={saving}>
              İptal
            </Button>
            <Button color="primary" type="submit" disabled={saving}>
              {saving ? (
                <>
                  <Spinner size="sm" className="me-2" />
                  Kaydediliyor...
                </>
              ) : (
                editingItem ? 'Güncelle' : 'Kaydet'
              )}
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default withPermission(PagesManagement, {
  moduleKey: 'pages',
  action: 'read'
});

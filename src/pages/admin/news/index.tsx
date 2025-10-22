/**
 * News Page
 *
 * REFACTORING NOTU:
 * -----------------
 * Bu sayfa refactor edildi:
 * - formatDate → utils/formatters'dan import edildi
 * - Loading state → LoadingState component kullanıyor
 * - Empty state → EmptyState component kullanıyor
 * - window.confirm → useConfirm hook kullanıyor
 * - toast.success/error → useConfirm hook kullanıyor
 */

import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table, Button, Badge, Spinner, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Form, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Dashboard } from "utils/Constant";
import { formatDate } from "utils/formatters";
import LoadingState from "../../../components/common/LoadingState";
import EmptyState from "../../../components/common/EmptyState";
import useConfirm from "../../../hooks/useConfirm";
import withPermission from "../../../../helper/WithPermission";
import newsService, { News, CreateNewsData, UpdateNewsData } from "../../../services/newsService";
import uploadService from "../../../services/uploadService";
import { toast } from "react-toastify";
import { Edit, Trash2, Plus, Upload, X } from "react-feather";
import { PaginationInfo } from '../../../types/pagination';
import Pagination from '../../../components/common/Pagination';

const NewsPage = () => {
  const confirm = useConfirm();
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ status: '' });
  const [modal, setModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<News | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('tr');
  const [formData, setFormData] = useState<any>({
    translations: [
      { language: 'tr', title: '', slug: '', summary: '', content: '' },
      { language: 'en', title: '', slug: '', summary: '', content: '' },
      { language: 'ar', title: '', slug: '', summary: '', content: '' }
    ],
    imageUrl: '',
    status: 'draft'
  });

  useEffect(() => {
    fetchNews();
  }, [filter]);

  useEffect(() => {
    fetchNews();
  }, [currentPage]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const params: any = { page: currentPage, limit: 10 };
      if (filter.status) {
        params.status = filter.status;
      }
      const response = await newsService.getAllNews(params);
      const { data, pagination } = response;
      setNews(data);
      setPagination(pagination);
    } catch (error: any) {
      console.error('Haberler yüklenirken hata:', error);
      toast.error('Haberler yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
    if (modal) {
      setEditingItem(null);
      setActiveTab('tr');
      setFormData({
        translations: [
          { language: 'tr', title: '', slug: '', summary: '', content: '' },
          { language: 'en', title: '', slug: '', summary: '', content: '' },
          { language: 'ar', title: '', slug: '', summary: '', content: '' }
        ],
        imageUrl: '',
        status: 'draft'
      });
    }
  };

  const handleEdit = (item: News) => {
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
          summary: existing.summary || '',
          content: existing.content || ''
        };
      }
      // Eğer çeviri yoksa, mevcut dil TR ise ondan al, yoksa boş bırak
      if (lang === 'tr') {
        return {
          language: 'tr',
          title: item.title || '',
          slug: item.slug || '',
          summary: item.summary || '',
          content: item.content || ''
        };
      }
      return {
        language: lang,
        title: '',
        slug: '',
        summary: '',
        content: ''
      };
    });

    setFormData({
      translations,
      imageUrl: item.imageUrl || '',
      status: item.status
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Dil-bağımsız alanlar (imageUrl, status)
    if (name === 'imageUrl' || name === 'status') {
      setFormData((prev: any) => ({
        ...prev,
        [name]: value
      }));
      return;
    }

    // Dil-bağımlı alanlar (title, slug, summary, content)
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
        await newsService.updateNews(editingItem.id, submitData);
        confirm.success('Başarılı!', 'Haber güncellendi');
      } else {
        await newsService.createNews(submitData);
        confirm.success('Başarılı!', 'Haber oluşturuldu');
      }
      toggleModal();
      fetchNews();
    } catch (error: any) {
      console.error('Haber kaydedilirken hata:', error);
      confirm.error('Hata!', error.response?.data?.message || 'Haber kaydedilirken hata oluştu');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!(await confirm('Bu haberi silmek istediğinizden emin misiniz?', 'Bu işlem geri alınamaz.'))) return;

    try {
      await newsService.deleteNews(id);
      confirm.success('Başarılı!', 'Haber silindi');
      fetchNews();
    } catch (error: any) {
      console.error('Haber silinirken hata:', error);
      confirm.error('Hata!', error.response?.data?.message || 'Haber silinirken hata oluştu');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Dosya validasyonu
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

      setFormData(prev => ({ ...prev, imageUrl: result.fileUrl }));
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
    setFormData(prev => ({ ...prev, imageUrl: '' }));
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge color="success">Yayında</Badge>;
      case 'draft':
        return <Badge color="warning">Taslak</Badge>;
      case 'archived':
        return <Badge color="secondary">Arşiv</Badge>;
      default:
        return <Badge color="secondary">{status}</Badge>;
    }
  };

  if (loading) {
    return <LoadingState message="Haberler yükleniyor..." />;
  }

  return (
    <div className="page-body">
      <Breadcrumbs title="Haberler" mainTitle="Haber Yönetimi" parent={Dashboard} />
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
                        onChange={(e) => setFilter({ status: e.target.value })}
                      >
                        <option value="">Tümü</option>
                        <option value="draft">Taslak</option>
                        <option value="published">Yayında</option>
                        <option value="archived">Arşiv</option>
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
                  <h5 className="mb-0">Tüm Haberler</h5>
                  <Button color="primary" onClick={toggleModal}>
                    <Plus size={16} className="me-2" />
                    Yeni Haber Ekle
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {news.length === 0 ? (
                  <EmptyState
                    message="Henüz haber bulunmuyor"
                    actionLabel="Yeni Haber Ekle"
                    onAction={toggleModal}
                  />
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead className="table-light">
                        <tr>
                          <th>Başlık</th>
                          <th>Yazar</th>
                          <th>Durum</th>
                          <th>Yayın Tarihi</th>
                          <th>Oluşturulma</th>
                          <th className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {news.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <div>
                                <strong>{item.title}</strong>
                                {item.summary && (
                                  <><br /><small className="text-muted">{item.summary.substring(0, 80)}...</small></>
                                )}
                              </div>
                            </td>
                            <td>{item.author?.fullName || '-'}</td>
                            <td>{getStatusBadge(item.status)}</td>
                            <td>
                              <small>{item.publishedAt ? formatDate(item.publishedAt) : '-'}</small>
                            </td>
                            <td>
                              <small>{formatDate(item.createdAt)}</small>
                            </td>
                            <td className="text-end">
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
                {pagination && (
                  <Pagination
                    pagination={pagination}
                    onPageChange={(page) => setCurrentPage(page)}
                  />
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Add/Edit Modal */}
      <Modal isOpen={modal} toggle={toggleModal} size="xl">
        <ModalHeader toggle={toggleModal}>
          {editingItem ? 'Haber Düzenle' : 'Yeni Haber Ekle'}
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
                            placeholder={`Haber başlığı (${lang.toUpperCase()})`}
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label>Slug (URL)</Label>
                          <Input
                            type="text"
                            name="slug"
                            value={translation.slug || ''}
                            onChange={handleChange}
                            placeholder="haber-url"
                            disabled
                          />
                          <small className="text-muted">Otomatik oluşturulur</small>
                        </FormGroup>

                        <FormGroup>
                          <Label>Kısa Özet ({lang.toUpperCase()})</Label>
                          <Input
                            type="textarea"
                            name="summary"
                            value={translation.summary || ''}
                            onChange={handleChange}
                            rows={3}
                            placeholder={`Haber özeti (${lang.toUpperCase()})`}
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
                            placeholder={`Haber içeriği (${lang.toUpperCase()})`}
                          />
                        </FormGroup>
                      </TabPane>
                    );
                  })}
                </TabContent>
              </Col>

              <Col md={4}>
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
                    <option value="archived">Arşiv</option>
                  </Input>
                </FormGroup>

                <FormGroup>
                  <Label>Haber Görseli</Label>
                  {!formData.imageUrl ? (
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
                        Maksimum 10MB, JPG, PNG, GIF veya WebP formatında
                      </small>
                    </div>
                  ) : (
                    <div>
                      <div className="position-relative">
                        <img
                          src={formData.imageUrl}
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

export default withPermission(NewsPage, {
  moduleKey: 'news',
  action: 'read'
});

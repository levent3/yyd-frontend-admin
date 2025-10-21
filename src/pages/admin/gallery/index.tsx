/**
 * Gallery Page - REFACTORED
 */
import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Badge, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Form, Progress } from "reactstrap";
import { Dashboard } from "utils/Constant";
import { formatDate } from "utils/formatters";
import LoadingState from "../../../components/common/LoadingState";
import EmptyState from "../../../components/common/EmptyState";
import useConfirm from "../../../hooks/useConfirm";
import galleryService, { GalleryItem, CreateGalleryItemData, UpdateGalleryItemData } from "../../../services/galleryService";
import uploadService from "../../../services/uploadService";
import { toast } from "react-toastify";
import { Edit, Trash2, Plus, Image, Video, Upload } from "react-feather";

const GalleryPage = () => {
  const confirm = useConfirm();
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({ mediaType: '' });
  const [modal, setModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingItem, setEditingItem] = useState<GalleryItem | null>(null);
  const [formData, setFormData] = useState<CreateGalleryItemData>({
    title: '',
    mediaType: 'image',
    fileUrl: '',
  });

  // Upload states
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchGallery();
  }, [filter]);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const response = await galleryService.getAllGalleryItems(
        filter.mediaType ? { mediaType: filter.mediaType as 'image' | 'video' } : undefined
      );
      setGallery(response.data);
    } catch (error: any) {
      console.error('Galeri yüklenirken hata:', error);
      confirm.error('Hata!', 'Galeri yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
    if (modal) {
      setEditingItem(null);
      setFormData({
        title: '',
        mediaType: 'image',
        fileUrl: '',
      });
    }
  };

  const handleEdit = (item: GalleryItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title || '',
      mediaType: item.mediaType,
      fileUrl: item.fileUrl,
    });
    setModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Dosya yükleme
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Dosya validasyonu
    const error = uploadService.validateFile(file, formData.mediaType);
    if (error) {
      toast.error(error);
      if (fileInputRef.current) fileInputRef.current.value = '';
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      const result = await uploadService.uploadImage(file, (progress) => {
        setUploadProgress(progress);
      });

      // Form datayı güncelle
      setFormData(prev => ({
        ...prev,
        fileUrl: result.fileUrl
      }));

      toast.success(`Dosya yüklendi! (${(file.size / (1024 * 1024)).toFixed(2)}MB → Optimized)`);
    } catch (error: any) {
      console.error('Dosya yükleme hatası:', error);
      toast.error(error.response?.data?.message || 'Dosya yüklenemedi');
    } finally {
      setUploading(false);
      setUploadProgress(0);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (editingItem) {
        await galleryService.updateGalleryItem(editingItem.id, formData as UpdateGalleryItemData);
        confirm.success('Başarılı!', 'Galeri öğesi güncellendi');
      } else {
        await galleryService.createGalleryItem(formData);
        confirm.success('Başarılı!', 'Galeri öğesi oluşturuldu');
      }
      toggleModal();
      fetchGallery();
    } catch (error: any) {
      console.error('Galeri öğesi kaydedilirken hata:', error);
      confirm.error('Hata!', error.response?.data?.message || 'Galeri öğesi kaydedilirken hata oluştu');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!(await confirm('Bu galeri öğesini silmek istediğinizden emin misiniz?', 'Bu işlem geri alınamaz.'))) return;

    try {
      await galleryService.deleteGalleryItem(id);
      confirm.success('Başarılı!', 'Galeri öğesi silindi');
      fetchGallery();
    } catch (error: any) {
      console.error('Galeri öğesi silinirken hata:', error);
      confirm.error('Hata!', error.response?.data?.message || 'Galeri öğesi silinirken hata oluştu');
    }
  };

  if (loading) return <LoadingState message="Galeri yükleniyor..." />;

  const formatDateLocal = (date: Date) => {
    return new Date(date).toLocaleString('tr-TR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getMediaTypeBadge = (type: string) => {
    return type === 'image' ? (
      <Badge color="info">
        <Image size={14} className="me-1" />
        Resim
      </Badge>
    ) : (
      <Badge color="warning">
        <Video size={14} className="me-1" />
        Video
      </Badge>
    );
  };

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
      <Breadcrumbs title="Galeri" mainTitle="Galeri Yönetimi" parent={Dashboard} />
      <Container fluid={true}>
        <Row className="mb-3">
          <Col sm={12}>
            <Card>
              <CardBody>
                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="mediaTypeFilter">Medya Tipi</Label>
                      <Input
                        type="select"
                        id="mediaTypeFilter"
                        value={filter.mediaType}
                        onChange={(e) => setFilter({ mediaType: e.target.value })}
                      >
                        <option value="">Tümü</option>
                        <option value="image">Resim</option>
                        <option value="video">Video</option>
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
                  <h5 className="mb-0">Galeri Öğeleri</h5>
                  <Button color="primary" onClick={toggleModal}>
                    <Plus size={16} className="me-2" />
                    Yeni Öğe Ekle
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {gallery.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted">Henüz galeri öğesi bulunmuyor.</p>
                  </div>
                ) : (
                  <Row>
                    {gallery.map((item) => (
                      <Col md={4} lg={3} key={item.id} className="mb-4">
                        <Card>
                          <div style={{ position: 'relative', paddingTop: '75%', overflow: 'hidden', backgroundColor: '#f5f5f5' }}>
                            {item.mediaType === 'image' ? (
                              <img
                                src={item.fileUrl}
                                alt={item.title ||'Galeri öğesi'}
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover'
                                }}
                              />
                            ) : (
                              <div
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: '#e9ecef'
                                }}
                              >
                                <Video size={48} className="text-muted" />
                              </div>
                            )}
                          </div>
                          <CardBody>
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h6 className="mb-0">{item.title}</h6>
                              {getMediaTypeBadge(item.mediaType)}
                            </div>
                            <div className="mb-2">
                              <small className="text-muted">
                                {item.uploader?.fullName} • {formatDate(item.createdAt)}
                              </small>
                            </div>
                            <div className="d-flex gap-2">
                              <Button
                                color="info"
                                size="sm"
                                onClick={() => handleEdit(item)}
                                title="Düzenle"
                                className="flex-fill"
                              >
                                <Edit size={14} />
                              </Button>
                              <Button
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(item.id)}
                                title="Sil"
                                className="flex-fill"
                              >
                                <Trash2 size={14} />
                              </Button>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Add/Edit Modal */}
      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>
          {editingItem ? 'Galeri Öğesi Düzenle' : 'Yeni Galeri Öğesi Ekle'}
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Row>
              <Col md={8}>
                <FormGroup>
                  <Label>Başlık *</Label>
                  <Input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="Galeri öğesi başlığı"
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Medya Yükle</Label>
                  <div className="d-flex gap-2 mb-2">
                    <Input
                      type="file"
                      innerRef={fileInputRef}
                      onChange={handleFileSelect}
                      accept={formData.mediaType === 'image' ? 'image/*' : 'video/*'}
                      disabled={uploading}
                      className="flex-grow-1"
                    />
                    <Button
                      color="primary"
                      outline
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                    >
                      <Upload size={16} />
                    </Button>
                  </div>
                  {uploading && (
                    <div className="mb-2">
                      <Progress value={uploadProgress} className="mb-1" />
                      <small className="text-muted">Yükleniyor... {uploadProgress}%</small>
                    </div>
                  )}
                  <small className="text-muted">
                    Maks. {formData.mediaType === 'image' ? '10MB' : '100MB'}
                    {formData.mediaType === 'image' && ' (Otomatik optimize edilir)'}
                  </small>
                </FormGroup>

                <FormGroup>
                  <Label>Dosya URL * {formData.fileUrl && '✓'}</Label>
                  <Input
                    type="text"
                    name="fileUrl"
                    value={formData.fileUrl}
                    onChange={handleChange}
                    required
                    placeholder="Dosya yükle veya manuel URL gir"
                    disabled={uploading}
                  />
                  <small className="text-muted">Yukarıdan dosya yükle veya manuel URL gir</small>
                </FormGroup>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label>Medya Tipi *</Label>
                  <Input
                    type="select"
                    name="mediaType"
                    value={formData.mediaType}
                    onChange={handleChange}
                    required
                  >
                    <option value="image">Resim</option>
                    <option value="video">Video</option>
                  </Input>
                </FormGroup>

                {formData.fileUrl && formData.mediaType === 'image' && (
                  <div className="mb-3">
                    <Label>Önizleme:</Label>
                    <img
                      src={formData.fileUrl}
                      alt="Preview"
                      className="img-fluid rounded"
                      style={{ maxHeight: '200px', width: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}
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

export default GalleryPage;

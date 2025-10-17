import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useEffect, useState } from "react";
import {
  Container, Row, Col, Card, CardBody, Table, Button, Badge,
  Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,
  Label, Input, FormFeedback, Nav, NavItem, NavLink, TabContent, TabPane
} from "reactstrap";
import projectService, { Project, CreateProjectData } from "../../../services/projectService";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";
import { PaginationInfo } from '../../../types/pagination';
import Pagination from '../../../components/common/Pagination';

const ProjectsPage = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState('1');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [formData, setFormData] = useState<CreateProjectData>({
    title: '',
    description: '',
    content: '',
    coverImage: '',
    category: '',
    location: '',
    country: '',
    status: 'active',
    priority: 'medium',
    startDate: '',
    endDate: '',
    budget: undefined,
    targetAmount: undefined,
    collectedAmount: 0,
    beneficiaryCount: undefined,
    isActive: true,
    isFeatured: false,
    displayOrder: 0
  });
  const [formErrors, setFormErrors] = useState<any>({});

  // Check user permissions
  const isSuperAdmin = user?.role?.name?.toLowerCase() === 'superadmin';
  const projectPermission = user?.permissions?.find(p => p.moduleKey === 'projects');
  const canCreate = isSuperAdmin || projectPermission?.create || false;
  const canUpdate = isSuperAdmin || projectPermission?.update || false;
  const canDelete = isSuperAdmin || projectPermission?.delete || false;

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [currentPage]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await projectService.getAllProjects({ page: currentPage, limit: 10 });
      const { data, pagination } = response;
      setProjects(data);
      setPagination(pagination);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Projeler yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      content: '',
      coverImage: '',
      category: '',
      location: '',
      country: '',
      status: 'active',
      priority: 'medium',
      startDate: '',
      endDate: '',
      budget: undefined,
      targetAmount: undefined,
      collectedAmount: 0,
      beneficiaryCount: undefined,
      isActive: true,
      isFeatured: false,
      displayOrder: 0
    });
    setImageFile(null);
    setImagePreview('');
    setFormErrors({});
    setActiveTab('1');
  };

  const openCreateModal = () => {
    setEditMode(false);
    setCurrentProject(null);
    resetForm();
    setModalOpen(true);
  };

  const openEditModal = (project: Project) => {
    setEditMode(true);
    setCurrentProject(project);
    setFormData({
      title: project.title,
      description: project.description || '',
      content: project.content || '',
      coverImage: project.coverImage || '',
      category: project.category || '',
      location: project.location || '',
      country: project.country || '',
      status: project.status || 'active',
      priority: project.priority || 'medium',
      startDate: project.startDate ? project.startDate.split('T')[0] : '',
      endDate: project.endDate ? project.endDate.split('T')[0] : '',
      budget: project.budget || undefined,
      targetAmount: project.targetAmount || undefined,
      collectedAmount: project.collectedAmount || 0,
      beneficiaryCount: project.beneficiaryCount || undefined,
      isActive: project.isActive,
      isFeatured: project.isFeatured || false,
      displayOrder: project.displayOrder || 0
    });
    setImagePreview(project.coverImage || '');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
    resetForm();
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

  const validateForm = () => {
    const errors: any = {};

    if (!formData.title?.trim()) {
      errors.title = 'Proje başlığı zorunludur';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Lütfen zorunlu alanları doldurun');
      return;
    }

    try {
      let coverImageUrl = formData.coverImage;

      // Eğer yeni bir görsel seçildiyse, önce yükle
      if (imageFile) {
        setUploading(true);
        const uploadResult = await projectService.uploadImage(imageFile);
        coverImageUrl = uploadResult.imageUrl;
        setUploading(false);
      }

      const projectData = {
        ...formData,
        coverImage: coverImageUrl,
        budget: formData.budget ? Number(formData.budget) : undefined,
        targetAmount: formData.targetAmount ? Number(formData.targetAmount) : undefined,
        collectedAmount: formData.collectedAmount ? Number(formData.collectedAmount) : 0,
        beneficiaryCount: formData.beneficiaryCount ? Number(formData.beneficiaryCount) : undefined,
        displayOrder: formData.displayOrder ? Number(formData.displayOrder) : 0
      };

      if (editMode && currentProject) {
        await projectService.updateProject(currentProject.id, projectData);
        toast.success('Proje başarıyla güncellendi');
      } else {
        await projectService.createProject(projectData);
        toast.success('Proje başarıyla oluşturuldu');
      }

      closeModal();
      fetchProjects();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Proje kaydedilirken hata oluştu');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: number, title: string) => {
    if (!confirm(`"${title}" projesini silmek istediğinize emin misiniz?`)) {
      return;
    }

    try {
      await projectService.deleteProject(id);
      toast.success('Proje başarıyla silindi');
      fetchProjects();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Proje silinirken hata oluştu');
    }
  };

  const getStatusBadgeColor = (status?: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'completed': return 'primary';
      case 'paused': return 'warning';
      case 'planning': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusLabel = (status?: string) => {
    switch (status) {
      case 'active': return 'Aktif';
      case 'completed': return 'Tamamlandı';
      case 'paused': return 'Duraklatıldı';
      case 'planning': return 'Planlanıyor';
      default: return status || 'Bilinmiyor';
    }
  };

  return (
    <div className="page-body">
      <Breadcrumbs
        title="Proje Yönetimi"
        mainTitle="Proje Yönetimi"
        parent="Yönetim"
      />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>Projeler</h5>
                  {canCreate && (
                    <Button color="primary" size="sm" onClick={openCreateModal}>
                      + Yeni Proje
                    </Button>
                  )}
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
                          <th>Görsel</th>
                          <th>Proje Başlığı</th>
                          <th>Kategori</th>
                          <th>Konum</th>
                          <th>Durum</th>
                          <th>Öncelik</th>
                          <th>İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects.map((project) => (
                          <tr key={project.id}>
                            <td>
                              {project.coverImage ? (
                                <img
                                  src={project.coverImage}
                                  alt={project.title}
                                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
                                />
                              ) : (
                                <div
                                  style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}
                                >
                                  <span style={{ fontSize: '12px', color: '#999' }}>Görsel yok</span>
                                </div>
                              )}
                            </td>
                            <td>
                              <strong>{project.title}</strong>
                              {project.isFeatured && (
                                <Badge color="warning" className="ms-2" style={{ fontSize: '10px' }}>
                                  Öne Çıkan
                                </Badge>
                              )}
                              <br />
                              <small className="text-muted">{project.description?.substring(0, 60)}...</small>
                            </td>
                            <td>{project.category || '-'}</td>
                            <td>{project.location || '-'}</td>
                            <td>
                              <Badge color={getStatusBadgeColor(project.status)}>
                                {getStatusLabel(project.status)}
                              </Badge>
                            </td>
                            <td>
                              <Badge
                                color={
                                  project.priority === 'urgent' ? 'danger' :
                                  project.priority === 'high' ? 'warning' :
                                  project.priority === 'low' ? 'secondary' : 'info'
                                }
                              >
                                {project.priority === 'urgent' ? 'Acil' :
                                 project.priority === 'high' ? 'Yüksek' :
                                 project.priority === 'low' ? 'Düşük' : 'Orta'}
                              </Badge>
                            </td>
                            <td>
                              {canUpdate && (
                                <Button
                                  color="warning"
                                  size="sm"
                                  className="me-2"
                                  outline
                                  onClick={() => openEditModal(project)}
                                >
                                  Düzenle
                                </Button>
                              )}
                              {canDelete && (
                                <Button
                                  color="danger"
                                  size="sm"
                                  outline
                                  onClick={() => handleDelete(project.id, project.title)}
                                >
                                  Sil
                                </Button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>

                    {projects.length === 0 && (
                      <div className="text-center py-4 text-muted">
                        Henüz proje bulunmamaktadır.
                      </div>
                    )}
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

      {/* Proje Ekleme/Düzenleme Modal */}
      <Modal isOpen={modalOpen} toggle={closeModal} size="lg">
        <ModalHeader toggle={closeModal}>
          {editMode ? 'Proje Düzenle' : 'Yeni Proje Ekle'}
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={activeTab === '1' ? 'active' : ''}
                  onClick={() => setActiveTab('1')}
                  style={{ cursor: 'pointer' }}
                >
                  Genel Bilgiler
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '2' ? 'active' : ''}
                  onClick={() => setActiveTab('2')}
                  style={{ cursor: 'pointer' }}
                >
                  Detaylar
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === '3' ? 'active' : ''}
                  onClick={() => setActiveTab('3')}
                  style={{ cursor: 'pointer' }}
                >
                  Görsel & Ayarlar
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={activeTab} className="mt-3">
              <TabPane tabId="1">
                <FormGroup>
                  <Label for="title">Proje Başlığı *</Label>
                  <Input
                    id="title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    invalid={!!formErrors.title}
                  />
                  {formErrors.title && <FormFeedback>{formErrors.title}</FormFeedback>}
                </FormGroup>

                <FormGroup>
                  <Label for="description">Kısa Açıklama</Label>
                  <Input
                    id="description"
                    type="textarea"
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="content">Detaylı İçerik</Label>
                  <Input
                    id="content"
                    type="textarea"
                    rows={5}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  />
                </FormGroup>

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="category">Kategori</Label>
                      <Input
                        id="category"
                        type="select"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      >
                        <option value="">Kategori Seçiniz</option>
                        <option value="Sağlık">Sağlık</option>
                        <option value="Eğitim">Eğitim</option>
                        <option value="Acil Yardım">Acil Yardım</option>
                        <option value="Temiz Su">Temiz Su</option>
                        <option value="Beslenme">Beslenme</option>
                        <option value="Diğer">Diğer</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="location">Konum</Label>
                      <Input
                        id="location"
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Örn: Gazze, Yemen, Tanzanya"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId="2">
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="status">Durum</Label>
                      <Input
                        id="status"
                        type="select"
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      >
                        <option value="planning">Planlanıyor</option>
                        <option value="active">Aktif</option>
                        <option value="completed">Tamamlandı</option>
                        <option value="paused">Duraklatıldı</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="priority">Öncelik</Label>
                      <Input
                        id="priority"
                        type="select"
                        value={formData.priority}
                        onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      >
                        <option value="low">Düşük</option>
                        <option value="medium">Orta</option>
                        <option value="high">Yüksek</option>
                        <option value="urgent">Acil</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="startDate">Başlangıç Tarihi</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="endDate">Bitiş Tarihi</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="budget">Bütçe (TL)</Label>
                      <Input
                        id="budget"
                        type="number"
                        value={formData.budget || ''}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value ? Number(e.target.value) : undefined })}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="targetAmount">Hedef Bağış (TL)</Label>
                      <Input
                        id="targetAmount"
                        type="number"
                        value={formData.targetAmount || ''}
                        onChange={(e) => setFormData({ ...formData, targetAmount: e.target.value ? Number(e.target.value) : undefined })}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="beneficiaryCount">Faydalanan Kişi</Label>
                      <Input
                        id="beneficiaryCount"
                        type="number"
                        value={formData.beneficiaryCount || ''}
                        onChange={(e) => setFormData({ ...formData, beneficiaryCount: e.target.value ? Number(e.target.value) : undefined })}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId="3">
                <FormGroup>
                  <Label for="coverImage">Kapak Görseli</Label>
                  <Input
                    id="coverImage"
                    type="file"
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

                <Row>
                  <Col md={6}>
                    <FormGroup check className="mb-2">
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={formData.isActive}
                          onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                        />
                        {' '}Aktif
                      </Label>
                    </FormGroup>

                    <FormGroup check>
                      <Label check>
                        <Input
                          type="checkbox"
                          checked={formData.isFeatured}
                          onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                        />
                        {' '}Öne Çıkan Proje
                      </Label>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="displayOrder">Sıralama</Label>
                      <Input
                        id="displayOrder"
                        type="number"
                        value={formData.displayOrder}
                        onChange={(e) => setFormData({ ...formData, displayOrder: Number(e.target.value) })}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={closeModal} disabled={uploading}>
              İptal
            </Button>
            <Button color="primary" type="submit" disabled={uploading}>
              {uploading ? 'Yükleniyor...' : (editMode ? 'Güncelle' : 'Kaydet')}
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectsPage;

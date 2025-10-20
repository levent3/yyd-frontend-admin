import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, FormText, Spinner } from "reactstrap";
import { Dashboard } from "utils/Constant";
import donationService from "../../../../services/donationService";
import projectService from "../../../../services/projectService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const CampaignEdit = () => {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
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
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (id) {
      fetchCampaign();
    }
  }, [id]);

  const fetchProjects = async () => {
    try {
      const response = await projectService.getAllProjects();
      setProjects(response.data);
    } catch (error) {
      console.error('Projeler yüklenirken hata:', error);
      toast.error('Projeler yüklenirken hata oluştu');
    }
  };

  const fetchCampaign = async () => {
    try {
      setLoadingData(true);
      const campaign = await donationService.getCampaignById(Number(id));

      setFormData({
        title: campaign.title || "",
        slug: campaign.slug || "",
        description: campaign.description || "",
        targetAmount: campaign.targetAmount?.toString() || "",
        imageUrl: campaign.imageUrl || "",
        category: campaign.category || "",
        isActive: campaign.isActive ?? true,
        isFeatured: campaign.isFeatured ?? false,
        displayOrder: campaign.displayOrder || 0,
        startDate: campaign.startDate ? new Date(campaign.startDate).toISOString().split('T')[0] : "",
        endDate: campaign.endDate ? new Date(campaign.endDate).toISOString().split('T')[0] : "",
        projectId: campaign.projectId?.toString() || ""
      });
    } catch (error: any) {
      console.error('Kampanya yüklenirken hata:', error);
      toast.error('Kampanya yüklenirken hata oluştu');
      router.push('/admin/campaigns');
    } finally {
      setLoadingData(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Başlıktan otomatik slug oluştur
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    const slug = title
      .toLowerCase()
      .replace(/ş/g, 's')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    setFormData(prev => ({
      ...prev,
      title,
      slug
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error('Kampanya başlığı gerekli');
      return;
    }
    if (!formData.slug.trim()) {
      toast.error('Kampanya slug gerekli');
      return;
    }

    try {
      setLoading(true);
      await donationService.updateCampaign(Number(id), {
        title: formData.title,
        slug: formData.slug,
        description: formData.description || undefined,
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

      toast.success('Kampanya başarıyla güncellendi');
      router.push('/admin/campaigns');
    } catch (error: any) {
      console.error('Kampanya güncellenirken hata:', error);
      toast.error(error.response?.data?.message || 'Kampanya güncellenirken hata oluştu');
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
            <p className="mt-2">Kampanya yükleniyor...</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="page-body">
      <Breadcrumbs title="Kampanya Düzenle" mainTitle="Kampanya Düzenle" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12} lg={8} className="mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Kampanya Düzenle</h5>
                  <Button color="secondary" size="sm" onClick={() => router.push('/admin/campaigns')}>
                    ← Geri Dön
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="title">Kampanya Başlığı *</Label>
                    <Input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Örn: Gazze İnsani Yardım"
                      value={formData.title}
                      onChange={handleTitleChange}
                      required
                    />
                    <FormText color="muted">Slug otomatik olarak oluşturulacak</FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label for="slug">Slug *</Label>
                    <Input
                      type="text"
                      id="slug"
                      name="slug"
                      placeholder="gazze-insani-yardim"
                      value={formData.slug}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="description">Açıklama</Label>
                    <Input
                      type="textarea"
                      id="description"
                      name="description"
                      rows={5}
                      placeholder="Kampanya detayları..."
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </FormGroup>

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
                      {loading ? 'Güncelleniyor...' : 'Kampanyayı Güncelle'}
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

export default CampaignEdit;

import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Dashboard } from "utils/Constant";
import projectService from "../../../services/projectService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ProjectCreate = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error('Proje başlığı gerekli');
      return;
    }

    try {
      setLoading(true);
      await projectService.createProject({
        title: formData.title,
        description: formData.description || undefined,
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
                  <FormGroup>
                    <Label for="title">Proje Başlığı *</Label>
                    <Input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Açıklama</Label>
                    <Input type="textarea" id="description" name="description" rows={4} value={formData.description} onChange={handleChange} />
                  </FormGroup>
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

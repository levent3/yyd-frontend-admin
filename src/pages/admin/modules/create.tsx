import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, FormText } from "reactstrap";
import { Dashboard } from "utils/Constant";
import moduleService, { Module } from "../../../services/moduleService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ModuleCreate = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    moduleKey: "",
    displayOrder: 0,
    parentId: null as number | null
  });
  const [parentModules, setParentModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingParents, setLoadingParents] = useState(true);

  useEffect(() => {
    fetchParentModules();
  }, []);

  const fetchParentModules = async () => {
    try {
      setLoadingParents(true);
      const data = await moduleService.getAllModules();
      // Sadece ana modülleri (parentId olmayan) göster
      setParentModules(data.filter(m => !m.parentId));
    } catch (error) {
      console.error('Ana modüller yüklenirken hata:', error);
      toast.error('Ana modüller yüklenirken hata oluştu');
    } finally {
      setLoadingParents(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'parentId') {
      setFormData(prev => ({
        ...prev,
        [name]: value === '' || value === '0' ? null : Number(value)
      }));
    } else if (name === 'displayOrder') {
      setFormData(prev => ({
        ...prev,
        [name]: Number(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Modül adından otomatik moduleKey oluştur
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    const moduleKey = name
      .toLowerCase()
      .replace(/ş/g, 's')
      .replace(/ğ/g, 'g')
      .replace(/ü/g, 'u')
      .replace(/ı/g, 'i')
      .replace(/ö/g, 'o')
      .replace(/ç/g, 'c')
      .replace(/[^a-z0-9]/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '');

    setFormData(prev => ({
      ...prev,
      name,
      moduleKey
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error('Modül adı gerekli');
      return;
    }
    if (!formData.moduleKey.trim()) {
      toast.error('Modül anahtarı gerekli');
      return;
    }

    try {
      setLoading(true);
      await moduleService.createModule({
        name: formData.name,
        moduleKey: formData.moduleKey,
        displayOrder: formData.displayOrder,
        parentId: formData.parentId
      });

      toast.success('Modül başarıyla oluşturuldu');
      router.push('/admin/modules');
    } catch (error: any) {
      console.error('Modül oluşturulurken hata:', error);
      toast.error(error.response?.data?.message || 'Modül oluşturulurken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  if (loadingParents) {
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
      <Breadcrumbs title="Yeni Modül Ekle" mainTitle="Modül Ekle" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12} md={8} lg={6} className="mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Yeni Modül Oluştur</h5>
                  <Button
                    color="secondary"
                    size="sm"
                    onClick={() => router.push('/admin/modules')}
                  >
                    ← Geri Dön
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="name">Modül Adı *</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Örn: Kullanıcı Yönetimi"
                      value={formData.name}
                      onChange={handleNameChange}
                      required
                    />
                    <FormText color="muted">
                      Modül anahtarı otomatik olarak oluşturulacaktır
                    </FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label for="moduleKey">Modül Anahtarı *</Label>
                    <Input
                      type="text"
                      id="moduleKey"
                      name="moduleKey"
                      placeholder="Örn: user_management"
                      value={formData.moduleKey}
                      onChange={handleChange}
                      required
                    />
                    <FormText color="muted">
                      Küçük harf, rakam ve alt çizgi kullanabilirsiniz
                    </FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label for="parentId">Ana Modül</Label>
                    <Input
                      type="select"
                      id="parentId"
                      name="parentId"
                      value={formData.parentId || '0'}
                      onChange={handleChange}
                    >
                      <option value="0">Yok (Ana Modül Olarak Oluştur)</option>
                      {parentModules.map(module => (
                        <option key={module.id} value={module.id}>
                          {module.name}
                        </option>
                      ))}
                    </Input>
                    <FormText color="muted">
                      Bu bir alt modül ise, ana modülünü seçin
                    </FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label for="displayOrder">Görüntüleme Sırası</Label>
                    <Input
                      type="number"
                      id="displayOrder"
                      name="displayOrder"
                      placeholder="0"
                      value={formData.displayOrder}
                      onChange={handleChange}
                      min="0"
                    />
                    <FormText color="muted">
                      Menüde hangi sırada görüneceğini belirler (0 en üstte)
                    </FormText>
                  </FormGroup>

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button
                      color="secondary"
                      type="button"
                      onClick={() => router.push('/admin/modules')}
                      disabled={loading}
                    >
                      İptal
                    </Button>
                    <Button
                      color="primary"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? 'Oluşturuluyor...' : 'Modül Oluştur'}
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

export default ModuleCreate;

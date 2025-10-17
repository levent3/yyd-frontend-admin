import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, FormText, Spinner } from "reactstrap";
import { Dashboard } from "utils/Constant";
import moduleService, { Module } from "../../../../services/moduleService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ModuleEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    name: "",
    moduleKey: "",
    displayOrder: 0,
    parentId: null as number | null
  });
  const [parentModules, setParentModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (id) {
      fetchModuleData();
      fetchParentModules();
    }
  }, [id]);

  const fetchModuleData = async () => {
    try {
      setLoadingData(true);
      const data = await moduleService.getModuleById(Number(id));
      setFormData({
        name: data.name,
        moduleKey: data.moduleKey,
        displayOrder: data.displayOrder || 0,
        parentId: data.parentId || null
      });
    } catch (error: any) {
      console.error('Modül yüklenirken hata:', error);
      toast.error('Modül yüklenirken hata oluştu');
      router.push('/admin/modules');
    } finally {
      setLoadingData(false);
    }
  };

  const fetchParentModules = async () => {
    try {
      const data = await moduleService.getAllModules();
      // Mevcut modülü ve alt modülleri hariç tut
      setParentModules(data.filter(m => !m.parentId && m.id !== Number(id)));
    } catch (error) {
      console.error('Ana modüller yüklenirken hata:', error);
      toast.error('Ana modüller yüklenirken hata oluştu');
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
      await moduleService.updateModule(Number(id), {
        name: formData.name,
        moduleKey: formData.moduleKey,
        displayOrder: formData.displayOrder,
        parentId: formData.parentId
      });

      toast.success('Modül başarıyla güncellendi');
      router.push('/admin/modules');
    } catch (error: any) {
      console.error('Modül güncellenirken hata:', error);
      toast.error(error.response?.data?.message || 'Modül güncellenirken hata oluştu');
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
            <p className="mt-2">Yükleniyor...</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="page-body">
      <Breadcrumbs title="Modül Düzenle" mainTitle="Modül Düzenle" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12} md={8} lg={6} className="mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Modülü Düzenle</h5>
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
                      onChange={handleChange}
                      required
                    />
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
                      {loading ? 'Güncelleniyor...' : 'Güncelle'}
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

export default ModuleEdit;

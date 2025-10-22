import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table, Button, Badge, Spinner, Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { Dashboard } from "utils/Constant";
import withPermission from "../../../../helper/WithPermission";
import systemSettingsService, { SystemSetting } from "../../../services/systemSettingsService";
import { toast } from "react-toastify";
import { Edit, Trash2, Plus, Save, X } from "react-feather";

const SystemSettingsPage = () => {
  const [settings, setSettings] = useState<SystemSetting[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    settingKey: '',
    settingValue: '',
    description: '',
    category: 'general',
    isActive: true,
    isPublic: false
  });

  const categories = [
    { key: 'all', label: 'Tümü' },
    { key: 'payment', label: 'Ödeme' },
    { key: 'donation', label: 'Bağış' },
    { key: 'general', label: 'Genel' },
    { key: 'notification', label: 'Bildirim' }
  ];

  useEffect(() => {
    fetchSettings();
  }, [activeCategory]);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const filters = activeCategory !== 'all' ? { category: activeCategory } : undefined;
      const data = await systemSettingsService.getAllSettings(filters);
      setSettings(data);
    } catch (error: any) {
      console.error('Ayarlar yüklenirken hata:', error);
      toast.error('Ayarlar yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleInitializeDefaults = async () => {
    if (!confirm('Varsayılan ayarları yüklemek istediğinizden emin misiniz?')) return;

    try {
      await systemSettingsService.initializeDefaults();
      toast.success('Varsayılan ayarlar yüklendi');
      fetchSettings();
    } catch (error: any) {
      console.error('Hata:', error);
      toast.error(error.response?.data?.message || 'İşlem başarısız');
    }
  };

  const handleOpenModal = (setting?: SystemSetting) => {
    if (setting) {
      setEditMode(true);
      setFormData({
        settingKey: setting.settingKey,
        settingValue: typeof setting.settingValue === 'string'
          ? setting.settingValue
          : JSON.stringify(setting.settingValue, null, 2),
        description: setting.description || '',
        category: setting.category || 'general',
        isActive: setting.isActive,
        isPublic: setting.isPublic
      });
    } else {
      setEditMode(false);
      setFormData({
        settingKey: '',
        settingValue: '',
        description: '',
        category: 'general',
        isActive: true,
        isPublic: false
      });
    }
    setModal(true);
  };

  const handleSave = async () => {
    try {
      // JSON parse dene
      let parsedValue: any = formData.settingValue;
      try {
        parsedValue = JSON.parse(formData.settingValue);
      } catch {
        // String olarak kalsın
      }

      const data = {
        ...formData,
        settingValue: parsedValue
      };

      if (editMode) {
        await systemSettingsService.updateSetting(formData.settingKey, data);
        toast.success('Ayar güncellendi');
      } else {
        await systemSettingsService.createSetting(data);
        toast.success('Ayar oluşturuldu');
      }

      setModal(false);
      fetchSettings();
    } catch (error: any) {
      console.error('Kayıt hatası:', error);
      toast.error(error.response?.data?.message || 'Kayıt başarısız');
    }
  };

  const handleDelete = async (key: string) => {
    if (!confirm('Bu ayarı silmek istediğinizden emin misiniz?')) return;

    try {
      await systemSettingsService.deleteSetting(key);
      toast.success('Ayar silindi');
      fetchSettings();
    } catch (error: any) {
      console.error('Silme hatası:', error);
      toast.error(error.response?.data?.message || 'Silme işlemi başarısız');
    }
  };

  const formatValue = (value: any) => {
    if (typeof value === 'object') {
      return JSON.stringify(value);
    }
    return String(value);
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
      <Breadcrumbs title="Sistem Ayarları" mainTitle="Sistem Ayarları Yönetimi" parent={Dashboard} />
      <Container fluid={true}>
        {/* Üst Butonlar */}
        <Row className="mb-3">
          <Col sm={12}>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between">
                  <Button color="primary" onClick={() => handleOpenModal()}>
                    <Plus size={16} className="me-2" />
                    Yeni Ayar Ekle
                  </Button>
                  <Button color="secondary" outline onClick={handleInitializeDefaults}>
                    Varsayılan Ayarları Yükle
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Kategori Sekmeleri */}
        <Row className="mb-3">
          <Col sm={12}>
            <Card>
              <CardBody>
                <Nav tabs>
                  {categories.map(cat => (
                    <NavItem key={cat.key}>
                      <NavLink
                        className={activeCategory === cat.key ? 'active' : ''}
                        onClick={() => setActiveCategory(cat.key)}
                        style={{ cursor: 'pointer' }}
                      >
                        {cat.label}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Ayarlar Tablosu */}
        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <h5 className="mb-0">Sistem Ayarları</h5>
              </CardHeader>
              <CardBody>
                {settings.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted">Henüz ayar bulunmuyor.</p>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead className="table-light">
                        <tr>
                          <th>Anahtar</th>
                          <th>Değer</th>
                          <th>Kategori</th>
                          <th>Durum</th>
                          <th>Erişim</th>
                          <th>Güncelleme</th>
                          <th className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {settings.map((setting) => (
                          <tr key={setting.id}>
                            <td>
                              <strong>{setting.settingKey}</strong>
                              {setting.description && (
                                <>
                                  <br />
                                  <small className="text-muted">{setting.description}</small>
                                </>
                              )}
                            </td>
                            <td>
                              <code style={{ fontSize: '12px', maxWidth: '200px', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {formatValue(setting.settingValue)}
                              </code>
                            </td>
                            <td>
                              <Badge color="info">{setting.category || 'general'}</Badge>
                            </td>
                            <td>
                              {setting.isActive ? (
                                <Badge color="success">Aktif</Badge>
                              ) : (
                                <Badge color="secondary">Pasif</Badge>
                              )}
                            </td>
                            <td>
                              {setting.isPublic ? (
                                <Badge color="warning">Public</Badge>
                              ) : (
                                <Badge color="secondary">Private</Badge>
                              )}
                            </td>
                            <td>
                              <small>{formatDate(setting.updatedAt)}</small>
                            </td>
                            <td className="text-end">
                              <Button
                                color="primary"
                                size="sm"
                                className="me-2"
                                onClick={() => handleOpenModal(setting)}
                                title="Düzenle"
                              >
                                <Edit size={14} />
                              </Button>
                              <Button
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(setting.settingKey)}
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
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Düzenleme/Ekleme Modal */}
      <Modal isOpen={modal} toggle={() => setModal(!modal)} size="lg">
        <ModalHeader toggle={() => setModal(!modal)}>
          {editMode ? 'Ayar Düzenle' : 'Yeni Ayar Ekle'}
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="settingKey">Anahtar *</Label>
            <Input
              type="text"
              id="settingKey"
              value={formData.settingKey}
              onChange={(e) => setFormData({ ...formData, settingKey: e.target.value })}
              disabled={editMode}
              placeholder="örn: default_currency"
            />
          </FormGroup>
          <FormGroup>
            <Label for="settingValue">Değer * (JSON veya String)</Label>
            <Input
              type="textarea"
              id="settingValue"
              value={formData.settingValue}
              onChange={(e) => setFormData({ ...formData, settingValue: e.target.value })}
              rows={5}
              placeholder='örn: "TRY" veya {"enabled": true, "options": ["TRY", "USD"]}'
            />
            <small className="text-muted">
              JSON formatı: {`{"key": "value"}`} | String: "değer"
            </small>
          </FormGroup>
          <FormGroup>
            <Label for="description">Açıklama</Label>
            <Input
              type="textarea"
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={2}
              placeholder="Bu ayar ne işe yarar?"
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="category">Kategori</Label>
                <Input
                  type="select"
                  id="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="general">Genel</option>
                  <option value="payment">Ödeme</option>
                  <option value="donation">Bağış</option>
                  <option value="notification">Bildirim</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <div className="d-flex gap-3 mt-4">
                  <div className="form-check">
                    <Input
                      type="checkbox"
                      id="isActive"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    />
                    <Label className="form-check-label" for="isActive">
                      Aktif
                    </Label>
                  </div>
                  <div className="form-check">
                    <Input
                      type="checkbox"
                      id="isPublic"
                      checked={formData.isPublic}
                      onChange={(e) => setFormData({ ...formData, isPublic: e.target.checked })}
                    />
                    <Label className="form-check-label" for="isPublic">
                      Public API
                    </Label>
                  </div>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setModal(false)}>
            <X size={16} className="me-2" />
            İptal
          </Button>
          <Button color="primary" onClick={handleSave}>
            <Save size={16} className="me-2" />
            Kaydet
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default withPermission(SystemSettingsPage, {
  moduleKey: 'system-settings',
  action: 'read'
});

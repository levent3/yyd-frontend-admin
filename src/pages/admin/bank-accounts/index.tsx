/**
 * Bank Accounts Page - REFACTORED
 */
import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Table, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import { Dashboard } from "utils/Constant";
import withPermission from "../../../../helper/WithPermission";
import LoadingState from "../../../components/common/LoadingState";
import EmptyState from "../../../components/common/EmptyState";
import useConfirm from "../../../hooks/useConfirm";
import donationService, { BankAccount, CreateBankAccountData } from "../../../services/donationService";
import { Edit, Trash2 } from "react-feather";

const BankAccountsPage = () => {
  const confirm = useConfirm();
  const [accounts, setAccounts] = useState<BankAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [formData, setFormData] = useState<CreateBankAccountData>({
    bankName: "",
    accountName: "",
    iban: "",
    swift: "",
    accountNumber: "",
    branch: "",
    currency: "TRY",
    isActive: true,
    displayOrder: 0
  });

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const data = await donationService.getAllBankAccounts();
      setAccounts(data);
    } catch (error: any) {
      console.error('Banka hesapları yüklenirken hata:', error);
      confirm.error('Hata!', 'Banka hesapları yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const toggleModal = () => {
    setModal(!modal);
    if (modal) {
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      bankName: "",
      accountName: "",
      iban: "",
      swift: "",
      accountNumber: "",
      branch: "",
      currency: "TRY",
      isActive: true,
      displayOrder: 0
    });
    setEditMode(false);
    setCurrentId(null);
  };

  const handleEdit = (account: BankAccount) => {
    setFormData({
      bankName: account.bankName,
      accountName: account.accountName,
      iban: account.iban,
      swift: account.swift || "",
      accountNumber: account.accountNumber || "",
      branch: account.branch || "",
      currency: account.currency,
      isActive: account.isActive,
      displayOrder: account.displayOrder
    });
    setCurrentId(account.id);
    setEditMode(true);
    setModal(true);
  };

  const handleDelete = async (id: number, bankName: string) => {
    if (!(await confirm(`"${bankName}" banka hesabını silmek istediğinize emin misiniz?`, 'Bu işlem geri alınamaz.'))) {
      return;
    }

    try {
      await donationService.deleteBankAccount(id);
      confirm.success('Başarılı!', 'Banka hesabı başarıyla silindi');
      fetchAccounts();
    } catch (error: any) {
      console.error('Banka hesabı silinirken hata:', error);
      confirm.error('Hata!', error.response?.data?.message || 'Banka hesabı silinirken hata oluştu');
    }
  };

  if (loading) return <LoadingState message="Banka hesapları yükleniyor..." />;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.bankName.trim() || !formData.iban.trim()) {
      toast.error('Banka adı ve IBAN gerekli');
      return;
    }

    try {
      if (editMode && currentId) {
        await donationService.updateBankAccount(currentId, formData);
        toast.success('Banka hesabı güncellendi');
      } else {
        await donationService.createBankAccount(formData);
        toast.success('Banka hesabı oluşturuldu');
      }
      toggleModal();
      fetchAccounts();
    } catch (error: any) {
      console.error('Banka hesabı kaydedilirken hata:', error);
      toast.error(error.response?.data?.message || 'Banka hesabı kaydedilirken hata oluştu');
    }
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
      <Breadcrumbs title="Banka Hesapları" mainTitle="Banka Hesabı Yönetimi" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Banka Hesapları</h5>
                  <Button color="primary" size="sm" onClick={toggleModal}>
                    + Yeni Hesap Ekle
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {accounts.length === 0 ? (
                  <div className="text-center py-5">
                    <p className="text-muted">Henüz banka hesabı bulunmuyor.</p>
                    <Button color="primary" onClick={toggleModal}>
                      İlk Hesabı Ekle
                    </Button>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead className="table-light">
                        <tr>
                          <th>Banka</th>
                          <th>Hesap Adı</th>
                          <th>IBAN</th>
                          <th>Hesap No</th>
                          <th>Para Birimi</th>
                          <th>Durum</th>
                          <th className="text-end">İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {accounts.map((account) => (
                          <tr key={account.id}>
                            <td><strong>{account.bankName}</strong></td>
                            <td>{account.accountName}</td>
                            <td>
                              <code>{account.iban}</code>
                              <br />
                              {account.swift && <small className="text-muted">SWIFT: {account.swift}</small>}
                            </td>
                            <td>
                              {account.accountNumber || '-'}
                              {account.branch && (
                                <>
                                  <br />
                                  <small className="text-muted">Şube: {account.branch}</small>
                                </>
                              )}
                            </td>
                            <td>
                              <Badge color="secondary">{account.currency}</Badge>
                            </td>
                            <td>
                              {account.isActive ? (
                                <Badge color="success">Aktif</Badge>
                              ) : (
                                <Badge color="danger">Pasif</Badge>
                              )}
                            </td>
                            <td className="text-end">
                              <Button
                                color="info"
                                size="sm"
                                className="me-2"
                                onClick={() => handleEdit(account)}
                              >
                                <Edit size={14} />
                              </Button>
                              <Button
                                color="danger"
                                size="sm"
                                onClick={() => handleDelete(account.id, account.bankName)}
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

      <Modal isOpen={modal} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>
          {editMode ? 'Banka Hesabını Düzenle' : 'Yeni Banka Hesabı Ekle'}
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="bankName">Banka Adı *</Label>
                  <Input
                    type="text"
                    id="bankName"
                    name="bankName"
                    placeholder="Örn: Ziraat Bankası"
                    value={formData.bankName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="accountName">Hesap Adı *</Label>
                  <Input
                    type="text"
                    id="accountName"
                    name="accountName"
                    placeholder="Örn: Yeryüzü Doktorları Derneği"
                    value={formData.accountName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label for="iban">IBAN *</Label>
              <Input
                type="text"
                id="iban"
                name="iban"
                placeholder="TR00 0000 0000 0000 0000 0000 00"
                value={formData.iban}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="accountNumber">Hesap Numarası</Label>
                  <Input
                    type="text"
                    id="accountNumber"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="swift">SWIFT Kodu</Label>
                  <Input
                    type="text"
                    id="swift"
                    name="swift"
                    placeholder="TCZBTR2A"
                    value={formData.swift}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="branch">Şube</Label>
                  <Input
                    type="text"
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="currency">Para Birimi *</Label>
                  <Input
                    type="select"
                    id="currency"
                    name="currency"
                    value={formData.currency}
                    onChange={handleChange}
                    required
                  >
                    <option value="TRY">TRY (₺)</option>
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                  </Input>
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
              <Col md={6}>
                <FormGroup check className="mt-4">
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
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggleModal}>
              İptal
            </Button>
            <Button color="primary" type="submit">
              {editMode ? 'Güncelle' : 'Oluştur'}
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default withPermission(BankAccountsPage, {
  moduleKey: 'bank-accounts',
  action: 'read'
});

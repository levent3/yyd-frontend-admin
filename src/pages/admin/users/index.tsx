/**
 * Users Page - REFACTORED
 */
import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, Table, Button, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import LoadingState from "../../../components/common/LoadingState";
import EmptyState from "../../../components/common/EmptyState";
import useConfirm from "../../../hooks/useConfirm";
import userService, { User, CreateUserData, UpdateUserData } from "../../../services/userService";
import roleService, { Role } from "../../../services/roleService";
import { useAuth } from "../../../context/AuthContext";
import { PaginationInfo } from '../../../types/pagination';
import Pagination from '../../../components/common/Pagination';
import withPermission from "../../../../helper/WithPermission";

const UsersPage = () => {
  const { user: currentUser } = useAuth();
  const confirm = useConfirm();
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullName: '',
    roleId: 0
  });
  const [formErrors, setFormErrors] = useState<any>({});

  const isSuperAdmin = currentUser?.role?.name?.toLowerCase() === 'superadmin';
  const userPermission = currentUser?.permissions?.find(p => p.moduleKey === 'users');
  const canCreate = isSuperAdmin || userPermission?.create || false;
  const canUpdate = isSuperAdmin || userPermission?.update || false;
  const canDelete = isSuperAdmin || userPermission?.delete || false;

  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await userService.getAllUsers({ page: currentPage, limit: 10 });
      const { data, pagination } = response;
      setUsers(data);
      setPagination(pagination);
    } catch (error: any) {
      confirm.error('Hata!', error.response?.data?.message || 'Kullanıcılar yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const fetchRoles = async () => {
    try {
      const data = await roleService.getAllRoles();
      setRoles(data);
    } catch (error: any) {
      console.error('Roller yüklenirken hata:', error);
    }
  };

  const handleOpenModal = (user?: User) => {
    if (user) {
      setEditingUser(user);
      setFormData({
        username: user.username,
        email: user.email,
        password: '',
        fullName: user.fullName || '',
        roleId: user.roleId
      });
    } else {
      setEditingUser(null);
      setFormData({
        username: '',
        email: '',
        password: '',
        fullName: '',
        roleId: roles.length > 0 ? roles[0].id : 0
      });
    }
    setFormErrors({});
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditingUser(null);
    setFormData({
      username: '',
      email: '',
      password: '',
      fullName: '',
      roleId: 0
    });
    setFormErrors({});
  };

  const validateForm = () => {
    const errors: any = {};

    if (!formData.username.trim()) {
      errors.username = 'Kullanıcı adı gereklidir';
    }

    if (!formData.email.trim()) {
      errors.email = 'E-posta gereklidir';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Geçerli bir e-posta adresi giriniz';
    }

    if (!editingUser && !formData.password) {
      errors.password = 'Şifre gereklidir';
    }

    if (formData.password && formData.password.length < 6) {
      errors.password = 'Şifre en az 6 karakter olmalıdır';
    }

    if (!formData.roleId || formData.roleId === 0) {
      errors.roleId = 'Rol seçimi gereklidir';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      if (editingUser) {
        // Güncelleme
        const updateData: UpdateUserData = {
          username: formData.username,
          email: formData.email,
          fullName: formData.fullName || undefined,
          roleId: formData.roleId
        };

        if (formData.password) {
          updateData.password = formData.password;
        }

        await userService.updateUser(editingUser.id, updateData);
        toast.success('Kullanıcı başarıyla güncellendi');
      } else {
        // Yeni kullanıcı
        const createData: CreateUserData = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          fullName: formData.fullName || undefined,
          roleId: formData.roleId
        };

        await userService.createUser(createData);
        toast.success('Kullanıcı başarıyla oluşturuldu');
      }

      handleCloseModal();
      fetchUsers();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'İşlem sırasında hata oluştu');
    }
  };

  const handleDelete = async (id: number, username: string) => {
    if (!confirm(`"${username}" kullanıcısını silmek istediğinize emin misiniz?`)) {
      return;
    }

    try {
      await userService.deleteUser(id);
      toast.success('Kullanıcı başarıyla silindi');
      fetchUsers();
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Kullanıcı silinirken hata oluştu');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) return <LoadingState message="Kullanıcılar yükleniyor..." />;

  return (
    <div className="page-body">
      <Breadcrumbs
        title="Kullanıcı Yönetimi"
        mainTitle="Kullanıcı Yönetimi"
        parent="Yönetim"
      />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>Kullanıcılar</h5>
                  {canCreate && (
                    <Button color="primary" size="sm" onClick={() => handleOpenModal()}>
                      + Yeni Kullanıcı
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
                          <th>#</th>
                          <th>Kullanıcı Adı</th>
                          <th>E-posta</th>
                          <th>Ad Soyad</th>
                          <th>Rol</th>
                          <th>Kayıt Tarihi</th>
                          <th>İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                              <strong>{user.username}</strong>
                            </td>
                            <td>{user.email}</td>
                            <td>{user.fullName || '-'}</td>
                            <td>
                              <Badge
                                color={user.role.name.toLowerCase() === 'superadmin' ? 'danger' : 'info'}
                              >
                                {user.role.name}
                              </Badge>
                            </td>
                            <td>{formatDate(user.createdAt)}</td>
                            <td>
                              {canUpdate && (
                                <Button
                                  color="warning"
                                  size="sm"
                                  className="me-2"
                                  outline
                                  onClick={() => handleOpenModal(user)}
                                >
                                  Düzenle
                                </Button>
                              )}
                              {canDelete && (
                                <Button
                                  color="danger"
                                  size="sm"
                                  outline
                                  onClick={() => handleDelete(user.id, user.username)}
                                >
                                  Sil
                                </Button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>

                    {users.length === 0 && (
                      <div className="text-center py-4 text-muted">
                        Henüz kullanıcı bulunmamaktadır.
                      </div>
                    )}

                    {pagination && (
                      <Pagination
                        pagination={pagination}
                        onPageChange={(page) => setCurrentPage(page)}
                      />
                    )}
                  </div>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Kullanıcı Ekleme/Düzenleme Modal */}
      <Modal isOpen={modalOpen} toggle={handleCloseModal}>
        <ModalHeader toggle={handleCloseModal}>
          {editingUser ? 'Kullanıcı Düzenle' : 'Yeni Kullanıcı'}
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="username">Kullanıcı Adı *</Label>
              <Input
                type="text"
                id="username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                invalid={!!formErrors.username}
              />
              {formErrors.username && <FormFeedback>{formErrors.username}</FormFeedback>}
            </FormGroup>

            <FormGroup>
              <Label for="email">E-posta *</Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                invalid={!!formErrors.email}
              />
              {formErrors.email && <FormFeedback>{formErrors.email}</FormFeedback>}
            </FormGroup>

            <FormGroup>
              <Label for="password">
                Şifre {editingUser ? '(Değiştirmek istemiyorsanız boş bırakın)' : '*'}
              </Label>
              <Input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                invalid={!!formErrors.password}
                placeholder={editingUser ? 'Boş bırakılırsa değişmez' : ''}
              />
              {formErrors.password && <FormFeedback>{formErrors.password}</FormFeedback>}
            </FormGroup>

            <FormGroup>
              <Label for="fullName">Ad Soyad</Label>
              <Input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </FormGroup>

            <FormGroup>
              <Label for="roleId">Rol *</Label>
              <Input
                type="select"
                id="roleId"
                value={formData.roleId}
                onChange={(e) => setFormData({ ...formData, roleId: parseInt(e.target.value) })}
                invalid={!!formErrors.roleId}
              >
                <option value="0">Rol Seçiniz</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </Input>
              {formErrors.roleId && <FormFeedback>{formErrors.roleId}</FormFeedback>}
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={handleCloseModal}>
              İptal
            </Button>
            <Button color="primary" type="submit">
              {editingUser ? 'Güncelle' : 'Oluştur'}
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

// Sayfa seviyesi permission kontrolü
// Kullanıcının 'users' modülüne 'read' yetkisi yoksa:
// - Toast gösterir
// - Dashboard'a yönlendirir
export default withPermission(UsersPage, {
  moduleKey: 'users',
  action: 'read'
});

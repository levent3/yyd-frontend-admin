import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useEffect, useState } from "react";
import {
  Container, Row, Col, Card, CardBody, Table, Button, Badge
} from "reactstrap";
import Link from "next/link";
import LoadingState from "../../../components/common/LoadingState";
import withPermission from "../../../../helper/WithPermission";
import EmptyState from "../../../components/common/EmptyState";
import useConfirm from "../../../hooks/useConfirm";
import teamMemberService, { TeamMember } from "../../../services/teamMemberService";
import { useAuth } from "../../../context/AuthContext";
import { PaginationInfo } from '../../../types/pagination';
import Pagination from '../../../components/common/Pagination';

const TeamMembersPage = () => {
  const { user } = useAuth();
  const confirm = useConfirm();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Check user permissions
  const isSuperAdmin = user?.role?.name?.toLowerCase() === 'superadmin';
  const teamMemberPermission = user?.permissions?.find(p => p.moduleKey === 'team-members');
  const canCreate = isSuperAdmin || teamMemberPermission?.create || false;
  const canUpdate = isSuperAdmin || teamMemberPermission?.update || false;
  const canDelete = isSuperAdmin || teamMemberPermission?.delete || false;

  useEffect(() => {
    fetchTeamMembers();
  }, [currentPage]);

  const fetchTeamMembers = async () => {
    try {
      setLoading(true);
      const response = await teamMemberService.getAllTeamMembers({ page: currentPage, limit: 10 });
      const { data, pagination } = response;
      setTeamMembers(data);
      setPagination(pagination);
    } catch (error: any) {
      confirm.error('Hata!', error.response?.data?.message || 'Ekip üyeleri yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number, fullName: string) => {
    if (!(await confirm(`"${fullName}" adlı ekip üyesini silmek istediğinize emin misiniz?`, 'Bu işlem geri alınamaz.'))) {
      return;
    }

    try {
      await teamMemberService.deleteTeamMember(id);
      confirm.success('Başarılı!', 'Ekip üyesi başarıyla silindi');
      fetchTeamMembers();
    } catch (error: any) {
      confirm.error('Hata!', error.response?.data?.message || 'Ekip üyesi silinirken hata oluştu');
    }
  };

  const getTeamTypeBadgeColor = (teamType: string) => {
    switch (teamType) {
      case 'yonetim': return 'primary';
      case 'denetim': return 'info';
      default: return 'secondary';
    }
  };

  const getTeamTypeLabel = (teamType: string) => {
    switch (teamType) {
      case 'yonetim': return 'Yönetim Kurulu';
      case 'denetim': return 'Denetim Kurulu';
      default: return teamType;
    }
  };

  if (loading) {
    return <LoadingState message="Ekip üyeleri yükleniyor..." />;
  }

  return (
    <div className="page-body">
      <Breadcrumbs
        title="Ekip Üyeleri Yönetimi"
        mainTitle="Ekip Üyeleri"
        parent="Yönetim"
      />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>Ekip Üyeleri</h5>
                  {canCreate && (
                    <Link href="/admin/team-members/create">
                      <Button color="primary" size="sm">
                        + Yeni Üye Ekle
                      </Button>
                    </Link>
                  )}
                </div>

                {teamMembers.length === 0 ? (
                  <EmptyState
                    message="Henüz ekip üyesi bulunmamaktadır"
                    actionLabel={canCreate ? "Yeni Üye Ekle" : undefined}
                    onAction={canCreate ? () => window.location.href = '/admin/team-members/create' : undefined}
                  />
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead>
                        <tr>
                          <th>Fotoğraf</th>
                          <th>İsim</th>
                          <th>Pozisyon</th>
                          <th>Kurul</th>
                          <th>Sıralama</th>
                          <th>Durum</th>
                          <th>İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {teamMembers.map((member) => (
                          <tr key={member.id}>
                            <td>
                              {member.photoUrl ? (
                                <img
                                  src={member.photoUrl}
                                  alt={member.fullName}
                                  style={{
                                    width: '50px',
                                    height: '50px',
                                    objectFit: 'cover',
                                    borderRadius: '50%'
                                  }}
                                />
                              ) : (
                                <div
                                  style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#f0f0f0',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                  }}
                                >
                                  <span style={{ fontSize: '12px', color: '#999' }}>
                                    {member.fullName?.charAt(0) || '?'}
                                  </span>
                                </div>
                              )}
                            </td>
                            <td>
                              <strong>{member.fullName || '-'}</strong>
                              {member.birthYear && (
                                <>
                                  <br />
                                  <small className="text-muted">
                                    {member.birthYear}
                                    {member.birthCity && ` - ${member.birthCity}`}
                                  </small>
                                </>
                              )}
                            </td>
                            <td>{member.position}</td>
                            <td>
                              <Badge color={getTeamTypeBadgeColor(member.teamType)}>
                                {getTeamTypeLabel(member.teamType)}
                              </Badge>
                            </td>
                            <td>{member.displayOrder}</td>
                            <td>
                              <Badge color={member.isActive ? 'success' : 'secondary'}>
                                {member.isActive ? 'Aktif' : 'Pasif'}
                              </Badge>
                            </td>
                            <td>
                              {canUpdate && (
                                <Link href={`/admin/team-members/edit/${member.id}`}>
                                  <Button
                                    color="warning"
                                    size="sm"
                                    className="me-2"
                                    outline
                                  >
                                    Düzenle
                                  </Button>
                                </Link>
                              )}
                              {canDelete && (
                                <Button
                                  color="danger"
                                  size="sm"
                                  outline
                                  onClick={() => handleDelete(member.id, member.fullName || 'Bu üye')}
                                >
                                  Sil
                                </Button>
                              )}
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
    </div>
  );
};

export default withPermission(TeamMembersPage, {
  moduleKey: 'team-members',
  action: 'read'
});

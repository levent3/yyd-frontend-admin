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
import timelineService, { Timeline } from "../../../services/timelineService";
import { useAuth } from "../../../context/AuthContext";
import { PaginationInfo } from '../../../types/pagination';
import Pagination from '../../../components/common/Pagination';

const TimelinePage = () => {
  const { user } = useAuth();
  const confirm = useConfirm();
  const [timelines, setTimelines] = useState<Timeline[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<PaginationInfo | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Check user permissions
  const isSuperAdmin = user?.role?.name?.toLowerCase() === 'superadmin';
  const timelinePermission = user?.permissions?.find(p => p.moduleKey === 'timeline');
  const canCreate = isSuperAdmin || timelinePermission?.create || false;
  const canUpdate = isSuperAdmin || timelinePermission?.update || false;
  const canDelete = isSuperAdmin || timelinePermission?.delete || false;

  useEffect(() => {
    fetchTimelines();
  }, [currentPage]);

  const fetchTimelines = async () => {
    try {
      setLoading(true);
      const response = await timelineService.getAllTimelines({ page: currentPage, limit: 10 });
      const { data, pagination } = response;
      setTimelines(data);
      setPagination(pagination);
    } catch (error: any) {
      confirm.error('Hata!', error.response?.data?.message || 'Tarihçe yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number, year: number) => {
    if (!(await confirm(`${year} yılına ait tarihçe kaydını silmek istediğinize emin misiniz?`, 'Bu işlem geri alınamaz.'))) {
      return;
    }

    try {
      await timelineService.deleteTimeline(id);
      confirm.success('Başarılı!', 'Tarihçe kaydı başarıyla silindi');
      fetchTimelines();
    } catch (error: any) {
      confirm.error('Hata!', error.response?.data?.message || 'Tarihçe kaydı silinirken hata oluştu');
    }
  };

  if (loading) {
    return <LoadingState message="Tarihçe yükleniyor..." />;
  }

  return (
    <div className="page-body">
      <Breadcrumbs
        title="Tarihçe Yönetimi"
        mainTitle="Tarihçe Yönetimi"
        parent="Yönetim"
      />
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <Card>
              <CardBody>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>Tarihçe</h5>
                  {canCreate && (
                    <Link href="/admin/timeline/create">
                      <Button color="primary" size="sm">
                        + Yeni Kayıt Ekle
                      </Button>
                    </Link>
                  )}
                </div>

                {timelines.length === 0 ? (
                  <EmptyState
                    message="Henüz tarihçe kaydı bulunmamaktadır"
                    actionLabel={canCreate ? "Yeni Kayıt Ekle" : undefined}
                    onAction={canCreate ? () => window.location.href = '/admin/timeline/create' : undefined}
                  />
                ) : (
                  <div className="table-responsive">
                    <Table hover>
                      <thead>
                        <tr>
                          <th>Yıl</th>
                          <th>Başlık</th>
                          <th>Açıklama</th>
                          <th>Sıralama</th>
                          <th>Durum</th>
                          <th>İşlemler</th>
                        </tr>
                      </thead>
                      <tbody>
                        {timelines.map((timeline) => (
                          <tr key={timeline.id}>
                            <td>
                              <strong>{timeline.year}</strong>
                            </td>
                            <td>
                              {timeline.title || '-'}
                            </td>
                            <td>
                              {timeline.description ? timeline.description.substring(0, 80) + '...' : '-'}
                            </td>
                            <td>{timeline.displayOrder}</td>
                            <td>
                              <Badge color={timeline.isActive ? 'success' : 'secondary'}>
                                {timeline.isActive ? 'Aktif' : 'Pasif'}
                              </Badge>
                            </td>
                            <td>
                              {canUpdate && (
                                <Link href={`/admin/timeline/edit/${timeline.id}`}>
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
                                  onClick={() => handleDelete(timeline.id, timeline.year)}
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

export default withPermission(TimelinePage, {
  moduleKey: 'timeline',
  action: 'read'
});

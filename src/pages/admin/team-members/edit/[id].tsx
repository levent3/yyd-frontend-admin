import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button, Nav, NavItem, NavLink, TabContent, TabPane, Spinner } from "reactstrap";
import { Dashboard } from "utils/Constant";
import teamMemberService from "../../../../services/teamMemberService";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const TeamMemberEdit = () => {
  const router = useRouter();
  const { id } = router.query;
  const [activeTab, setActiveTab] = useState('tr');
  const [formData, setFormData] = useState({
    photoUrl: "",
    position: "",
    teamType: "yonetim",
    displayOrder: 0,
    isActive: true,
    birthYear: "",
    birthCity: "",
    languages: "",
    translations: [
      { language: 'tr', fullName: '', biography: '', education: '', experience: '' },
      { language: 'en', fullName: '', biography: '', education: '', experience: '' },
      { language: 'ar', fullName: '', biography: '', education: '', experience: '' }
    ]
  });
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  useEffect(() => {
    if (id) {
      fetchTeamMember();
    }
  }, [id]);

  const fetchTeamMember = async () => {
    try {
      setLoadingData(true);
      const member = await teamMemberService.getTeamMemberById(Number(id));

      // Backend'den gelen translations varsa kullan
      const translations = member.translations || [
        {
          language: 'tr',
          fullName: member.fullName || '',
          biography: member.biography || '',
          education: member.education || '',
          experience: member.experience || ''
        },
        { language: 'en', fullName: '', biography: '', education: '', experience: '' },
        { language: 'ar', fullName: '', biography: '', education: '', experience: '' }
      ];

      // Tüm diller için translation olduğundan emin ol
      const ensureAllLanguages = (trans: any[]) => {
        const languages = ['tr', 'en', 'ar'];
        return languages.map(lang => {
          const existing = trans.find(t => t.language === lang);
          return existing || { language: lang, fullName: '', biography: '', education: '', experience: '' };
        });
      };

      setFormData({
        photoUrl: member.photoUrl || "",
        position: member.position || "",
        teamType: member.teamType || "yonetim",
        displayOrder: member.displayOrder || 0,
        isActive: member.isActive ?? true,
        birthYear: member.birthYear?.toString() || "",
        birthCity: member.birthCity || "",
        languages: member.languages || "",
        translations: ensureAllLanguages(translations)
      });
      setImagePreview(member.photoUrl || '');
    } catch (error: any) {
      console.error('Ekip üyesi yüklenirken hata:', error);
      toast.error('Ekip üyesi yüklenirken hata oluştu');
      router.push('/admin/team-members');
    } finally {
      setLoadingData(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    // Language-independent fields
    if (name !== 'fullName' && name !== 'biography' && name !== 'education' && name !== 'experience') {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
      return;
    }

    // Language-dependent fields
    setFormData(prev => {
      const updatedTranslations = prev.translations.map(trans => {
        if (trans.language === activeTab) {
          return { ...trans, [name]: value };
        }
        return trans;
      });
      return { ...prev, translations: updatedTranslations };
    });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // At least one language must have a fullName
    const hasValidTranslation = formData.translations.some(t => t.fullName.trim());
    if (!hasValidTranslation) {
      toast.error('En az bir dilde isim girmelisiniz');
      return;
    }

    if (!formData.position.trim()) {
      toast.error('Pozisyon alanı zorunludur');
      return;
    }

    // Filter non-empty translations
    const validTranslations = formData.translations.filter(t =>
      t.fullName.trim() || t.biography.trim() || t.education.trim() || t.experience.trim()
    );

    try {
      setLoading(true);

      let photoUrl = formData.photoUrl;

      // Eğer yeni bir görsel seçildiyse, önce yükle
      if (imageFile) {
        const uploadResult = await teamMemberService.uploadPhoto(imageFile);
        photoUrl = uploadResult.imageUrl;
      }

      await teamMemberService.updateTeamMember(Number(id), {
        photoUrl: photoUrl || undefined,
        position: formData.position,
        teamType: formData.teamType,
        displayOrder: Number(formData.displayOrder),
        isActive: formData.isActive,
        birthYear: formData.birthYear ? Number(formData.birthYear) : undefined,
        birthCity: formData.birthCity || undefined,
        languages: formData.languages || undefined,
        translations: validTranslations
      });

      toast.success('Ekip üyesi başarıyla güncellendi');
      router.push('/admin/team-members');
    } catch (error: any) {
      console.error('Ekip üyesi güncellenirken hata:', error);
      toast.error(error.response?.data?.message || 'Ekip üyesi güncellenirken hata oluştu');
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
            <p className="mt-2">Ekip üyesi yükleniyor...</p>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="page-body">
      <Breadcrumbs title="Ekip Üyesi Düzenle" mainTitle="Ekip Üyesi Düzenle" parent={Dashboard} />
      <Container fluid={true}>
        <Row>
          <Col sm={12} lg={8} className="mx-auto">
            <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Ekip Üyesi Düzenle</h5>
                  <Button color="secondary" size="sm" onClick={() => router.push('/admin/team-members')}>
                    ← Geri Dön
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  {/* Basic Info */}
                  <Row className="mb-3">
                    <Col md={6}>
                      <FormGroup>
                        <Label for="position">Pozisyon *</Label>
                        <Input
                          type="text"
                          id="position"
                          name="position"
                          value={formData.position}
                          onChange={handleChange}
                          required
                          placeholder="Örn: Başkan, Başkan Yardımcısı, Üye"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="teamType">Kurul Tipi</Label>
                        <Input
                          type="select"
                          id="teamType"
                          name="teamType"
                          value={formData.teamType}
                          onChange={handleChange}
                        >
                          <option value="yonetim">Yönetim Kurulu</option>
                          <option value="denetim">Denetim Kurulu</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <FormGroup>
                        <Label for="birthYear">Doğum Yılı</Label>
                        <Input
                          type="number"
                          id="birthYear"
                          name="birthYear"
                          value={formData.birthYear}
                          onChange={handleChange}
                          min="1900"
                          max={new Date().getFullYear()}
                          placeholder="Örn: 1980"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="birthCity">Doğum Yeri</Label>
                        <Input
                          type="text"
                          id="birthCity"
                          name="birthCity"
                          value={formData.birthCity}
                          onChange={handleChange}
                          placeholder="Örn: İstanbul"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col md={6}>
                      <FormGroup>
                        <Label for="languages">Diller</Label>
                        <Input
                          type="text"
                          id="languages"
                          name="languages"
                          value={formData.languages}
                          onChange={handleChange}
                          placeholder="Örn: Türkçe, İngilizce, Arapça"
                        />
                      </FormGroup>
                    </Col>
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

                  <FormGroup>
                    <Label for="photoUrl">Fotoğraf</Label>
                    <Input
                      type="file"
                      id="photoUrl"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    {imagePreview && (
                      <div className="mt-2">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          style={{
                            width: '150px',
                            height: '150px',
                            objectFit: 'cover',
                            borderRadius: '50%'
                          }}
                        />
                      </div>
                    )}
                  </FormGroup>

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

                  <hr />

                  {/* Language Tabs */}
                  <Nav tabs className="mb-3">
                    <NavItem>
                      <NavLink
                        className={activeTab === 'tr' ? 'active' : ''}
                        onClick={() => setActiveTab('tr')}
                        style={{ cursor: 'pointer' }}
                      >
                        🇹🇷 Türkçe
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === 'en' ? 'active' : ''}
                        onClick={() => setActiveTab('en')}
                        style={{ cursor: 'pointer' }}
                      >
                        🇬🇧 English
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === 'ar' ? 'active' : ''}
                        onClick={() => setActiveTab('ar')}
                        style={{ cursor: 'pointer' }}
                      >
                        🇸🇦 العربية
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab}>
                    {['tr', 'en', 'ar'].map(lang => {
                      const translation = formData.translations.find(t => t.language === lang) ||
                        { fullName: '', biography: '', education: '', experience: '' };
                      return (
                        <TabPane key={lang} tabId={lang}>
                          <FormGroup>
                            <Label for={`fullName-${lang}`}>İsim Soyisim * ({lang.toUpperCase()})</Label>
                            <Input
                              type="text"
                              id={`fullName-${lang}`}
                              name="fullName"
                              value={translation.fullName}
                              onChange={handleChange}
                              placeholder={`İsim Soyisim (${lang.toUpperCase()})`}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for={`biography-${lang}`}>Biyografi ({lang.toUpperCase()})</Label>
                            <Input
                              type="textarea"
                              id={`biography-${lang}`}
                              name="biography"
                              rows={3}
                              value={translation.biography}
                              onChange={handleChange}
                              placeholder={`Kısa biyografi (${lang.toUpperCase()})`}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for={`education-${lang}`}>Eğitim ({lang.toUpperCase()})</Label>
                            <Input
                              type="textarea"
                              id={`education-${lang}`}
                              name="education"
                              rows={2}
                              value={translation.education}
                              onChange={handleChange}
                              placeholder={`Eğitim bilgileri (${lang.toUpperCase()})`}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for={`experience-${lang}`}>Deneyim ({lang.toUpperCase()})</Label>
                            <Input
                              type="textarea"
                              id={`experience-${lang}`}
                              name="experience"
                              rows={3}
                              value={translation.experience}
                              onChange={handleChange}
                              placeholder={`İş deneyimi (${lang.toUpperCase()})`}
                            />
                          </FormGroup>
                        </TabPane>
                      );
                    })}
                  </TabContent>

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <Button color="secondary" onClick={() => router.push('/admin/team-members')} disabled={loading}>
                      İptal
                    </Button>
                    <Button color="primary" type="submit" disabled={loading}>
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

export default TeamMemberEdit;

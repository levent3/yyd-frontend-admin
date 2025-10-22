import Breadcrumbs from "CommonElements/Breadcrumbs";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader, Button, Spinner, Input, FormGroup, Label, Alert } from "reactstrap";
import { Dashboard } from "utils/Constant";
import withPermission from "../../../../helper/WithPermission";
import campaignSettingsService, { CreateCampaignSettingsData } from "../../../services/campaignSettingsService";
import donationService, { DonationCampaign } from "../../../services/donationService";
import { toast } from "react-toastify";
import { Save, RefreshCw } from "react-feather";

const CampaignSettingsPage = () => {
  const [campaigns, setCampaigns] = useState<DonationCampaign[]>([]);
  const [selectedCampaign, setSelectedCampaign] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasSettings, setHasSettings] = useState(false);
  const [formData, setFormData] = useState<any>({
    presetAmounts: [100, 250, 500, 1000],
    minAmount: 10,
    maxAmount: 100000,
    allowRepeat: true,
    minRepeatCount: 2,
    maxRepeatCount: 12,
    allowOneTime: true,
    allowRecurring: true,
    allowedFrequencies: ['monthly', 'quarterly', 'yearly'],
    allowDedication: false,
    allowAnonymous: true,
    requireMessage: false,
    showProgress: true,
    showDonorCount: true,
    showBeneficiaries: false
  });

  useEffect(() => {
    fetchCampaigns();
  }, []);

  useEffect(() => {
    if (selectedCampaign) {
      fetchSettings();
    }
  }, [selectedCampaign]);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const response = await donationService.getAllCampaigns({ page: 1, limit: 100 });
      setCampaigns(response.data);
    } catch (error: any) {
      console.error('Kampanyalar yüklenirken hata:', error);
      toast.error('Kampanyalar yüklenirken hata oluştu');
    } finally {
      setLoading(false);
    }
  };

  const fetchSettings = async () => {
    if (!selectedCampaign) return;

    try {
      const response = await campaignSettingsService.getSettingsByCampaign(selectedCampaign);
      if (!response.isDefault) {
        setHasSettings(true);
        const settings = response.settings;
        setFormData({
          presetAmounts: settings.presetAmounts || [],
          minAmount: settings.minAmount || 10,
          maxAmount: settings.maxAmount || 100000,
          allowRepeat: settings.allowRepeat ?? true,
          minRepeatCount: settings.minRepeatCount || 2,
          maxRepeatCount: settings.maxRepeatCount || 12,
          allowOneTime: settings.allowOneTime ?? true,
          allowRecurring: settings.allowRecurring ?? true,
          allowedFrequencies: settings.allowedFrequencies || ['monthly'],
          allowDedication: settings.allowDedication ?? false,
          allowAnonymous: settings.allowAnonymous ?? true,
          requireMessage: settings.requireMessage ?? false,
          showProgress: settings.showProgress ?? true,
          showDonorCount: settings.showDonorCount ?? true,
          showBeneficiaries: settings.showBeneficiaries ?? false
        });
      } else {
        setHasSettings(false);
      }
    } catch (error: any) {
      console.error('Ayarlar yüklenirken hata:', error);
    }
  };

  const handleSave = async () => {
    if (!selectedCampaign) {
      toast.error('Lütfen bir kampanya seçin');
      return;
    }

    try {
      setSaving(true);
      const data: any = {
        ...formData,
        presetAmounts: formData.presetAmounts.filter((a: number) => a > 0)
      };

      await campaignSettingsService.upsertSettings(selectedCampaign, data);
      toast.success('Kampanya ayarları kaydedildi');
      setHasSettings(true);
    } catch (error: any) {
      console.error('Kayıt hatası:', error);
      toast.error(error.response?.data?.message || 'Kayıt başarısız');
    } finally {
      setSaving(false);
    }
  };

  const handlePresetAmountChange = (index: number, value: string) => {
    const newAmounts = [...formData.presetAmounts];
    newAmounts[index] = parseInt(value) || 0;
    setFormData({ ...formData, presetAmounts: newAmounts });
  };

  const handleAddPresetAmount = () => {
    setFormData({ ...formData, presetAmounts: [...formData.presetAmounts, 0] });
  };

  const handleRemovePresetAmount = (index: number) => {
    const newAmounts = formData.presetAmounts.filter((_: any, i: number) => i !== index);
    setFormData({ ...formData, presetAmounts: newAmounts });
  };

  const handleFrequencyToggle = (freq: string) => {
    const frequencies = formData.allowedFrequencies;
    if (frequencies.includes(freq)) {
      setFormData({
        ...formData,
        allowedFrequencies: frequencies.filter((f: string) => f !== freq)
      });
    } else {
      setFormData({
        ...formData,
        allowedFrequencies: [...frequencies, freq]
      });
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
      <Breadcrumbs title="Kampanya Ayarları" mainTitle="Kampanya Özel Ayarları" parent={Dashboard} />
      <Container fluid={true}>
        {/* Kampanya Seçimi */}
        <Row className="mb-3">
          <Col sm={12}>
            <Card>
              <CardBody>
                <FormGroup>
                  <Label for="campaignSelect">Kampanya Seç *</Label>
                  <Input
                    type="select"
                    id="campaignSelect"
                    value={selectedCampaign || ''}
                    onChange={(e) => setSelectedCampaign(parseInt(e.target.value) || null)}
                  >
                    <option value="">-- Kampanya Seçin --</option>
                    {campaigns.map((campaign) => (
                      <option key={campaign.id} value={campaign.id}>
                        {campaign.title}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
                {selectedCampaign && (
                  <Alert color={hasSettings ? 'info' : 'warning'}>
                    {hasSettings
                      ? 'Bu kampanya için özel ayarlar var.'
                      : 'Bu kampanya varsayılan ayarları kullanıyor.'}
                  </Alert>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>

        {selectedCampaign && (
          <>
            {/* Bağış Tutarları */}
            <Row className="mb-3">
              <Col sm={12}>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">Bağış Tutarları</h5>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label>Önceden Tanımlı Tutarlar</Label>
                          {formData.presetAmounts.map((amount: number, index: number) => (
                            <div key={index} className="d-flex gap-2 mb-2">
                              <Input
                                type="number"
                                value={amount}
                                onChange={(e) => handlePresetAmountChange(index, e.target.value)}
                                placeholder="Tutar (₺)"
                              />
                              <Button
                                color="danger"
                                size="sm"
                                onClick={() => handleRemovePresetAmount(index)}
                              >
                                Sil
                              </Button>
                            </div>
                          ))}
                          <Button
                            color="secondary"
                            size="sm"
                            onClick={handleAddPresetAmount}
                          >
                            + Yeni Tutar Ekle
                          </Button>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="minAmount">Minimum Tutar (₺)</Label>
                          <Input
                            type="number"
                            id="minAmount"
                            value={formData.minAmount}
                            onChange={(e) => setFormData({ ...formData, minAmount: parseInt(e.target.value) || 0 })}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Label for="maxAmount">Maximum Tutar (₺)</Label>
                          <Input
                            type="number"
                            id="maxAmount"
                            value={formData.maxAmount}
                            onChange={(e) => setFormData({ ...formData, maxAmount: parseInt(e.target.value) || 0 })}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            {/* Bağış Tipleri */}
            <Row className="mb-3">
              <Col md={6}>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">Bağış Tipleri</h5>
                  </CardHeader>
                  <CardBody>
                    <FormGroup check className="mb-3">
                      <Input
                        type="checkbox"
                        id="allowOneTime"
                        checked={formData.allowOneTime}
                        onChange={(e) => setFormData({ ...formData, allowOneTime: e.target.checked })}
                      />
                      <Label check for="allowOneTime">
                        Tek Seferlik Bağışa İzin Ver
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mb-3">
                      <Input
                        type="checkbox"
                        id="allowRecurring"
                        checked={formData.allowRecurring}
                        onChange={(e) => setFormData({ ...formData, allowRecurring: e.target.checked })}
                      />
                      <Label check for="allowRecurring">
                        Düzenli Bağışa İzin Ver
                      </Label>
                    </FormGroup>
                    {formData.allowRecurring && (
                      <div className="ms-4">
                        <Label>İzin Verilen Periyotlar:</Label>
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id="freq_monthly"
                            checked={formData.allowedFrequencies.includes('monthly')}
                            onChange={() => handleFrequencyToggle('monthly')}
                          />
                          <Label check for="freq_monthly">Aylık</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id="freq_quarterly"
                            checked={formData.allowedFrequencies.includes('quarterly')}
                            onChange={() => handleFrequencyToggle('quarterly')}
                          />
                          <Label check for="freq_quarterly">3 Aylık</Label>
                        </FormGroup>
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id="freq_yearly"
                            checked={formData.allowedFrequencies.includes('yearly')}
                            onChange={() => handleFrequencyToggle('yearly')}
                          />
                          <Label check for="freq_yearly">Yıllık</Label>
                        </FormGroup>
                      </div>
                    )}
                  </CardBody>
                </Card>
              </Col>

              {/* Özel Özellikler */}
              <Col md={6}>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">Özel Özellikler</h5>
                  </CardHeader>
                  <CardBody>
                    <FormGroup check className="mb-3">
                      <Input
                        type="checkbox"
                        id="allowDedication"
                        checked={formData.allowDedication}
                        onChange={(e) => setFormData({ ...formData, allowDedication: e.target.checked })}
                      />
                      <Label check for="allowDedication">
                        Adanmış Bağışa İzin Ver (Anısına/Onuruna)
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mb-3">
                      <Input
                        type="checkbox"
                        id="allowAnonymous"
                        checked={formData.allowAnonymous}
                        onChange={(e) => setFormData({ ...formData, allowAnonymous: e.target.checked })}
                      />
                      <Label check for="allowAnonymous">
                        Anonim Bağışa İzin Ver
                      </Label>
                    </FormGroup>
                    <FormGroup check className="mb-3">
                      <Input
                        type="checkbox"
                        id="requireMessage"
                        checked={formData.requireMessage}
                        onChange={(e) => setFormData({ ...formData, requireMessage: e.target.checked })}
                      />
                      <Label check for="requireMessage">
                        Mesaj Zorunlu
                      </Label>
                    </FormGroup>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            {/* Görünüm Ayarları */}
            <Row className="mb-3">
              <Col sm={12}>
                <Card>
                  <CardHeader>
                    <h5 className="mb-0">Görünüm Ayarları</h5>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col md={4}>
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id="showProgress"
                            checked={formData.showProgress}
                            onChange={(e) => setFormData({ ...formData, showProgress: e.target.checked })}
                          />
                          <Label check for="showProgress">
                            İlerleme Çubuğunu Göster
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id="showDonorCount"
                            checked={formData.showDonorCount}
                            onChange={(e) => setFormData({ ...formData, showDonorCount: e.target.checked })}
                          />
                          <Label check for="showDonorCount">
                            Bağışçı Sayısını Göster
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup check>
                          <Input
                            type="checkbox"
                            id="showBeneficiaries"
                            checked={formData.showBeneficiaries}
                            onChange={(e) => setFormData({ ...formData, showBeneficiaries: e.target.checked })}
                          />
                          <Label check for="showBeneficiaries">
                            Faydalananları Göster
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            {/* Tekrar Sayısı */}
            {formData.allowRepeat && (
              <Row className="mb-3">
                <Col sm={12}>
                  <Card>
                    <CardHeader>
                      <h5 className="mb-0">Tekrar Sayısı Ayarları</h5>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="minRepeatCount">Minimum Tekrar Sayısı</Label>
                            <Input
                              type="number"
                              id="minRepeatCount"
                              value={formData.minRepeatCount}
                              onChange={(e) => setFormData({ ...formData, minRepeatCount: parseInt(e.target.value) || 2 })}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="maxRepeatCount">Maximum Tekrar Sayısı</Label>
                            <Input
                              type="number"
                              id="maxRepeatCount"
                              value={formData.maxRepeatCount}
                              onChange={(e) => setFormData({ ...formData, maxRepeatCount: parseInt(e.target.value) || 12 })}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            )}

            {/* Kaydet Butonu */}
            <Row>
              <Col sm={12}>
                <Card>
                  <CardBody>
                    <div className="d-flex justify-content-end gap-2">
                      <Button color="secondary" onClick={() => fetchSettings()} disabled={saving}>
                        <RefreshCw size={16} className="me-2" />
                        Sıfırla
                      </Button>
                      <Button color="primary" onClick={handleSave} disabled={saving}>
                        {saving ? (
                          <>
                            <Spinner size="sm" className="me-2" />
                            Kaydediliyor...
                          </>
                        ) : (
                          <>
                            <Save size={16} className="me-2" />
                            Kaydet
                          </>
                        )}
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default withPermission(CampaignSettingsPage, {
  moduleKey: 'campaign-settings',
  action: 'read'
});

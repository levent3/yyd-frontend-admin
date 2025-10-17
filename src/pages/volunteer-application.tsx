import { useState } from 'react';
import { Container, Row, Col, Card, CardBody, Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';
import volunteerService, { VolunteerFormData } from '../services/volunteerService';
import { toast } from 'react-toastify';

const VolunteerApplication = () => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      toast.error('Lütfen gerekli alanları doldurun');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Geçerli bir e-posta adresi girin');
      return;
    }

    try {
      setLoading(true);
      await volunteerService.create(formData);
      setSubmitted(true);
      toast.success('Başvurunuz başarıyla gönderildi!');

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    } catch (error: any) {
      console.error('Başvuru gönderilemedi:', error);
      const errorMessage = error.response?.data?.message || 'Başvuru gönderilemedi. Lütfen tekrar deneyin.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa', paddingTop: '50px', paddingBottom: '50px' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <Card className="shadow-sm">
              <CardBody className="p-4 p-md-5">
                <div className="text-center mb-4">
                  <h2 className="mb-3">Gönüllü Başvuru Formu</h2>
                  <p className="text-muted">
                    Yardımlaşma Yolu Derneği'ne gönüllü olarak katılmak için aşağıdaki formu doldurun.
                    Sizinle en kısa sürede iletişime geçeceğiz.
                  </p>
                </div>

                {submitted && (
                  <Alert color="success" className="mb-4">
                    <h5 className="alert-heading">Teşekkürler!</h5>
                    <p className="mb-0">
                      Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="fullName">
                      Ad Soyad <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Adınız ve soyadınız"
                      required
                      disabled={loading}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="email">
                      E-posta <span className="text-danger">*</span>
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ornek@email.com"
                      required
                      disabled={loading}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="phoneNumber">Telefon</Label>
                    <Input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="05XX XXX XX XX"
                      disabled={loading}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="message">Mesajınız</Label>
                    <Input
                      type="textarea"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Neden gönüllü olmak istiyorsunuz? Hangi alanlarda katkıda bulunmak istersiniz?"
                      rows={6}
                      disabled={loading}
                    />
                  </FormGroup>

                  <div className="d-grid gap-2 mt-4">
                    <Button
                      color="primary"
                      size="lg"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Gönderiliyor...
                        </>
                      ) : (
                        'Başvuruyu Gönder'
                      )}
                    </Button>
                  </div>

                  <div className="text-center mt-3">
                    <small className="text-muted">
                      <span className="text-danger">*</span> ile işaretli alanlar zorunludur
                    </small>
                  </div>
                </Form>

                <div className="mt-5 pt-4 border-top">
                  <h6 className="mb-3">Gönüllülük Hakkında</h6>
                  <p className="text-muted small">
                    Gönüllülerimiz, projelerimizin hayata geçirilmesinde, etkinliklerin organizasyonunda,
                    sosyal medya yönetiminde, eğitim faaliyetlerinde ve daha birçok alanda katkı sağlayabilir.
                    Her türlü yetenek ve deneyim bizim için değerlidir.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default VolunteerApplication;

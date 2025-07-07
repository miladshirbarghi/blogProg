import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';
import './about.css';
import NavBar from "../navBar/navBar";
import Footer from "../footer/footer"; 

function About() {
  return (
    <>
      <NavBar />
      <Container className="my-5" dir="rtl">
        <Card className="p-4 shadow-sm about-card">
          <Card.Body>
            <Card.Title className="mb-4 fs-3 fw-bold text-right">درباره این پروژه</Card.Title>
            <Card.Text className="text-right">
              این پروژه یک وب‌اپلیکیشن مدرن برای مدیریت مقالات است که با استفاده از کتابخانه <strong>React</strong> و ابزار سریع <strong>Vite</strong> طراحی شده است.
              هدف اصلی از توسعه این پروژه، تمرین عملی مفاهیم اصلی توسعه فرانت‌اند و آماده‌سازی برای موقعیت‌های شغلی مرتبط بوده است.
            </Card.Text>

            <Card.Text className="text-right mt-4 mb-2 fw-semibold">امکانات اصلی پروژه:</Card.Text>
            <ListGroup variant="flush" className="mb-4">
              <ListGroup.Item className="text-right">نمایش لیست مقالات</ListGroup.Item>
              <ListGroup.Item className="text-right">افزودن مقاله جدید با فرم</ListGroup.Item>
              <ListGroup.Item className="text-right">ویرایش یا حذف مقالات موجود</ListGroup.Item>
              <ListGroup.Item className="text-right">مشاهده جزئیات هر مقاله در صفحه اختصاصی</ListGroup.Item>
            </ListGroup>

            <Card.Text className="text-right">
              رابط کاربری کاملاً فارسی طراحی شده و از فونت‌های فارسی استاندارد مانند <em>B Nazanin</em>، <em>Yekan</em> و <em>Lalezar</em> بهره می‌برد که خوانایی بالایی دارند.
            </Card.Text>

            <Card.Text className="text-right mt-4 mb-2 fw-semibold">تکنولوژی‌های استفاده شده:</Card.Text>
            <Row>
              <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="text-right"><strong>React</strong>: برای ساخت رابط کاربری SPA</ListGroup.Item>
                  <ListGroup.Item className="text-right"><strong>Vite</strong>: برای توسعه سریع و ماژولار</ListGroup.Item>
                  <ListGroup.Item className="text-right"><strong>React Router</strong>: برای مدیریت مسیرها</ListGroup.Item>
                  <ListGroup.Item className="text-right"><strong>React-Bootstrap</strong>: طراحی رابط با Bootstrap</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={6}>
                <ListGroup variant="flush">
                  <ListGroup.Item className="text-right"><strong>JSON Server</strong>: شبیه‌سازی API با db.json</ListGroup.Item>
                  <ListGroup.Item className="text-right"><strong>CSS Modules</strong>: استایل‌دهی ماژولار</ListGroup.Item>
                  <ListGroup.Item className="text-right"><strong>ESLint</strong>: بررسی کیفیت کد</ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default About;

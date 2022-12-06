import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import style from "./Signin.module.scss";

// 디자인 페이지
export default function Signin() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event: any) => {
    console.log(event);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="main-container">
      <Row>
        <Col className={style.ellaImage} md={7}></Col>
        <Col md={5}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Username Or Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="email"
                  // defaultValue="email"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="text" placeholder="비밀번호" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row> */}
            <Row>
              <Button type="submit">구글 로그인</Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

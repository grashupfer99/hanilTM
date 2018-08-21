import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

const speechBubble = {
  // width: "275px",
  height: "155px",
  backgroundImage: "url(http://res.cloudinary.com/dijc9b7wz/image/upload/v1534830218/bubble-03_anh78w.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  position: "relative"
}

const greeting = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontWeight:"bold",
  fontSize: "17px"
}

class Login extends Component {
 
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <h1 className="card-title text-center" style={{fontWeight:"bold", fontSize:"25px"}}>
            영업1실 
            관리자 
            로그인
          </h1>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
              <Card className="text-white bg-primary py-5 no-bg">
              {/* style={{width: 45 + "%"}} */}
              {/* d-md-down-none */}
                  <CardBody className="text-center">
                    <div>
                      <img src="http://res.cloudinary.com/dijc9b7wz/image/upload/v1534816690/character-01_obeqe6.png" className="img-fluid" alt="character" />
                    </div>
                  </CardBody>
                </Card>
                <Card className="p-4 no-bg">
                  <CardBody>
                    <div className="text-center mb-4" style={speechBubble}>
                      <div style={greeting}>
                          <span className="d-block pb-2">
                              <span>홍길동</span> 실장님~
                          </span>
                          <span className="d-block pt-2">어서오세요!</span>
                      </div>
                    </div> 
                    <Form>
                      <InputGroup className="mb-4">
                        <Input className="shadow brdr" type="password" placeholder="Password" autoComplete="current-password" />
                        <Col xs="6">
                          <Button color="primary" className="px-4 shadow bold-font">로그인</Button>
                        </Col>
                      </InputGroup>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;

import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import AccountList from '../src/components/AccountList'

export default (props) => (
  <React.Fragment>
    <Container>
      <div className="divider"></div>
    </Container>
    <div className="contacts">
      <div className="head-bg"></div>
      <div className="join">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={7}>
              <h1>Join with Us</h1>
              <p>Get in touch and let us know how we can help. Fill out the form and we’ll be in touch as soon as possible.</p>

              <Form className="form-join">
                <FormGroup row>
                  <Label for="contact_name" xs={12} sm={12} md={5}>Your full name</Label>
                  <Col xs={12} md={7}>
                    <Input type="text" name="contact_name" id="contact_name" placeholder="John Doe" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="contact_email" xs={12} sm={12} md={5}>Your email address</Label>
                  <Col xs={12} md={7}>
                    <Input type="email" name="contact_email" id="contact_email" placeholder="john.doe@email.com"/>
                  </Col>
                </FormGroup>
                <FormGroup row className="message">
                  <Label for="contact_message" xs={12}  sm={12} md={5}>What you gonna tell us?</Label>
                  <Col xs={12} md={7}>
                     <Input type="textarea" name="contact_message" />
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col md={{ size: 7, offset: 5 }} className="action">
                    <Button>Send</Button>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
            <Col xs={12} md={12} lg={5}>
              <div className="banner illus-message contact">
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="connect" id="#connect">
        <Container>
          <h1>We’d love hear from you</h1>
          <p>If you have technical questions, you can meet us on:</p>
          <AccountList />
        </Container>
      </div>
    </div>
  </React.Fragment>
)

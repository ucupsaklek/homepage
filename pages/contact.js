import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import AccountList from '../src/components/AccountList'

export default (props) => (
  <div className="contact">

    <div className="join">
      <Container>
        <Row>
          <Col md={7} lg={7}>
            <h1>Join with Us</h1>
            <p>Get in touch and let us know how we can help. Fill out the form and we’ll be in touch as soon as possible.</p>

            <Form className="form-join">
              <FormGroup row>
                <Label for="contact_name" sm={5}>Your full name</Label>
                <Col sm={7}>
                  <Input type="text" name="contact_name" id="contact_name" placeholder="John Doe" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="contact_email" sm={5}>Your email address</Label>
                <Col sm={7}>
                  <Input type="email" name="contact_email" id="contact_email" placeholder="john.doe@email.com"/>
                </Col>
              </FormGroup>
              <FormGroup row className="message">
                <Label for="contact_message" sm={5}>What you gonna tell us?</Label>
                <Col sm={7}>
                   <Input type="textarea" name="contact_message" />
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 7, offset: 5 }} className="action">
                  <Button>Send</Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
          <Col md={5} lg={5}>2</Col>
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
)

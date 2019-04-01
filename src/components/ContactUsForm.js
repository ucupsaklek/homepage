import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactUsForm = (props) => (
  <div className="contact-wrapper">
    <h1>Send Us A Message</h1>
    <p>Feel free to contact us for any suggestion or partnership offer!</p>

    <Form>
      <FormGroup row>
        <Col sm={12}>
          <Input type="text" name="contact_name" id="contact_name" placeholder="Name"/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={12}>
          <Input type="email" name="contact_email" id="contact_email" placeholder="Email"/>
        </Col>
      </FormGroup>
      <FormGroup row className="message">
        <Col sm={12}>
           <Input type="textarea" name="contact_message" placeholder="Message" />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Button>Send</Button>
      </FormGroup>
    </Form>
  </div>
)


export default ContactUsForm;

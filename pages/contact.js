import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sendEmail } from 'actions/email'
import Head from 'next/head'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import AccountList from '../src/components/AccountList'

class ContactPage extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleEmailChange  = (e) => {
    this.setState({ email: e.target.value })
  }

  handleMessageChange  = (e) => {
    this.setState({ message: e.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const valid = event.target.checkValidity()

    if (valid) {
      this.props.sendEmail(this.state)
    }
  }

  render() {
    return  (
      <React.Fragment>
        <Head>
          <title>Plasma Chamber | Contact</title>
          <meta property='og:title' content={'Plasma Chamber | Contact'} />
        </Head>

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

                  <Form className="form-join" onSubmit={this.handleSubmit}>
                    <FormGroup row>
                      <Label for="contact_name" xs={12} sm={12} md={5}>Your full name</Label>
                      <Col xs={12} md={7}>
                        <Input type="text" name="contact_name" id="contact_name" value={this.state.name} onChange={this.handleNameChange} placeholder="John Doe" required/>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="contact_email" xs={12} sm={12} md={5}>Your email address</Label>
                      <Col xs={12} md={7}>
                        <Input type="email" name="contact_email" id="contact_email" placeholder="john.doe@email.com" value={this.state.email} onChange={this.handleEmailChange} />
                      </Col>
                    </FormGroup>
                    <FormGroup row className="message">
                      <Label for="contact_message" xs={12}  sm={12} md={5}>What you gonna tell us?</Label>
                      <Col xs={12} md={7}>
                         <Input type="textarea" name="contact_message" value={this.state.message} onChange={this.handleMessageChange} required/>
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
    }
  }

  export default connect(null, { sendEmail })(ContactPage)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap'
import { sendEmail } from 'actions/email'

class ContactUsForm extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      message: '',
      isSending: false
    }
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handleMessageChange = (e) => {
    this.setState({ message: e.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.setState({ isSending: true })

    const valid = event.target.checkValidity()

    if (valid) {
      this.props.sendEmail(this.state).then((res) => {
        this.setState({ name: '' })
        this.setState({ email: '' })
        this.setState({ message: '' })
        this.setState({ isSending: false })
        console.log('res:', res)
      }).catch(function (err) {
        window.alert('An error occurred during the contact process.\nPlease try again a little later.')
        console.log(err)
      })
    }
  }

  render () {
    return (
      <div className='contact' id='contact'>
        <div className='message-bg' />
        <Container>
          <Row>
            <Col xs={12} md={12} lg={5}>
              <div className='contact-wrapper'>
                <h2>Send Us A Message</h2>
                <p>Feel free to contact us for any suggestion or partnership offer!</p>

                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Col sm={12} className='h-100'>
                      <Input type='text' name='contact_name' value={this.state.name} onChange={this.handleNameChange} id='contact_name' placeholder='Name' required />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm={12} className='h-100'>
                      <Input type='email' name='contact_email' value={this.state.email} onChange={this.handleEmailChange} id='contact_email' placeholder='Email' required />
                    </Col>
                  </FormGroup>
                  <FormGroup row className='message'>
                    <Col sm={12} className='h-100'>
                      <Input type='textarea' name='contact_message' value={this.state.message} onChange={this.handleMessageChange} placeholder='Message' required />
                    </Col>
                  </FormGroup>
                  <FormGroup check row>
                    <Button disabled={this.state.isSending}>Send</Button>
                  </FormGroup>
                </Form>
              </div>
            </Col>
            <Col xs={12} md={12} lg={7}>
              <div className='banner illus illus-message' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default connect(null,
  {
    sendEmail
  }
)(ContactUsForm)

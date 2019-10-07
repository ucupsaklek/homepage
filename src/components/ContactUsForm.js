import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row
} from 'reactstrap'
import { sendEmail } from 'actions/contact'

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

  handleInputChange = async (e) => {
    await this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.setState({ isSending: true })

    const valid = event.target.checkValidity()
    if (valid) {
      this.props.sendEmail(this.state).then(async (res) => {
        await this.setState({
          name: '',
          email: '',
          message: '',
          isSending: false
        })
        console.log('res:', res)
      }).catch(function (err) {
        window.alert('An error occurred during the contact process.\nPlease try again a little later.')
        console.log(err)
      })
    }
  }

  render () {
    return (
      <>
        <div id='contact'>
          <Container>
            <Row>
              <Col xs={12} md={12} lg={5}>
                <div className='contact-form-wrapper'>
                  <h2>Send Us A Message</h2>
                  <p>Feel free to contact us for any suggestion or partnership offer!</p>

                  <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                      <Col sm={12}>
                        <Input type='text' name='name' value={this.state.name} onChange={this.handleInputChange} placeholder='Name' required />
                      </Col>
                    </FormGroup>

                    <FormGroup row>
                      <Col sm={12}>
                        <Input type='email' name='email' value={this.state.email} onChange={this.handleInputChange} placeholder='Email' required />
                      </Col>
                    </FormGroup>

                    <FormGroup row className='message'>
                      <Col sm={12}>
                        <Input type='textarea' name='message' value={this.state.message} onChange={this.handleInputChange} placeholder='Message' required />
                      </Col>
                    </FormGroup>

                    <FormGroup row className='contact-submit-btn-wrapper'>
                      <Col sm={12}>
                        <Button color='primary' disabled={this.state.isSending}>Send</Button>
                      </Col>
                    </FormGroup>
                  </Form>
                </div>
              </Col>

              <Col xs={12} md={12} lg={7}>
                <div className='banner illus-message' />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )
  }
}

export default connect(null,
  {
    sendEmail
  }
)(ContactUsForm)

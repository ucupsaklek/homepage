import React from 'react'
import { connect } from 'react-redux'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { sendEmail } from 'actions/email'

class ContactUsForm extends React.Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      message: ''
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

    const valid = event.target.checkValidity()

    if (valid) {
      this.props.sendEmail(this.state).then((res) => {
        this.setState({ name: '' })
        this.setState({ email: '' })
        this.setState({ message: '' })
        console.log('res:', res)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }

  render () {
    return (
      <div className='contact-wrapper'>
        <h1>Send Us A Message</h1>
        <p>Feel free to contact us for any suggestion or partnership offer!</p>

        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Col sm={12}>
              <Input type='text' name='contact_name' value={this.state.name} onChange={this.handleNameChange} id='contact_name' placeholder='Name' required />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input type='email' name='contact_email' value={this.state.email} onChange={this.handleEmailChange} id='contact_email' placeholder='Email' required />
            </Col>
          </FormGroup>
          <FormGroup row className='message'>
            <Col sm={12}>
              <Input type='textarea' name='contact_message' value={this.state.message} onChange={this.handleMessageChange} placeholder='Message' required />
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Button>Send</Button>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default connect(null, { sendEmail })(ContactUsForm)

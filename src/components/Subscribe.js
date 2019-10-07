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
import { sendSubscribe } from 'actions/contact'

class Subscribe extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
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
      this.props.sendSubscribe(this.state).then(async (res) => {
        await this.setState({
          email: '',
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
        <Container>
          <div className='subscribe-form-wrapper'>
            <Row>
              <Col md={12} lg={5}>
                <div className='subscribe-label'>
                  Subscribe now!
                </div>
              </Col>

              <Col md={12} lg={7}>
                <Form onSubmit={this.handleSubmit} inline>
                  <FormGroup>
                    <Input type='email' name='email' value={this.state.email} onChange={this.handleInputChange} placeholder='Put your email here' required />
                  </FormGroup>

                  <FormGroup>
                    <Button className='btn btn-primary' disabled={this.state.isSending}>Send</Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </div>
        </Container>
      </>
    )
  }
}

export default connect(null,
  {
    sendSubscribe
  }
)(Subscribe)

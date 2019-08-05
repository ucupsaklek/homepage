import React from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Col,
  Form,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap'
import { sendSubscribe } from 'actions/email'

class SubscribeNewsForm extends React.Component {
  constructor () {
    super()

    this.state = {
      email: '',
      isSubscribeSending: false
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.setState({ isSubscribeSending: true })

    const valid = event.target.checkValidity()

    if (valid) {
      this.props.sendSubscribe(this.state).then((res) => {
        this.setState({
          email: '',
          isSubscribeSending: false
        })
        console.log('res:', res)
      }).catch(function (err) {
        alert('An error occurred during the subscribing process.\nPlease try again a little later.')
        console.log(err)
      })
    }
  }

  render () {
    return (
      <Col xs={12} md={{ size: '4', offset: '4' }} className='mt-4 mb-4'>
        <Form onSubmit={this.handleSubmit}>
          <InputGroup>
            <Input type='email' name='email' onChange={this.handleInputChange} value={this.state.email} placeholder='Subscribe to our news!' required />
            <InputGroupAddon addonType='append'>
              <Button disabled={this.state.isSubscribeSending}>Submit</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Col>
    )
  }
}

export default connect(null, {
  sendSubscribe
})(SubscribeNewsForm)

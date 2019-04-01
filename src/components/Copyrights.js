import React from 'react'
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  class Copyrights extends React.Component {
    constructor (props) {
      super(props)

      this.state = {
        open: false,
      }
    }

    toggle = () => {
      this.setState({ open: !this.state.open})
    }

    onMouseOver = () => {
      this.setState({ open: true})
    }

    onMouseLeave = () => {
      this.setState({ open: false})
    }

    render () {
      return (
        <React.Fragment>
          <div className="copyrights">
            <h5 className="d-none">2019 Cryptoeconomic Labs</h5>

            <ul className="social">
              <li className="icon-github icon-small"></li>
              <li className="icon-medium icon-small"></li>
              <li className="icon-telegram icon-small"></li>
            </ul>

            <Dropdown nav className="options"
              onMouseOver={this.onMouseOver}
              isOpen={this.state.open}
              toggle={this.toggle}
            >
              <DropdownToggle nav >
                English
              </DropdownToggle>
              <DropdownMenu onMouseLeave={this.onMouseLeave}>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>Japan</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          <h5 className="company d-lg-block">2019 Cryptoeconomic Labs</h5>
        </React.Fragment>
      )
    }
  }


export default Copyrights;

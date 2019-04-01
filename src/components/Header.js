import React from 'react'
import Link from 'next/link'
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      openConnect: false,
      openOption: false,
    }
  }

  toggleConnect = () => {
    this.setState({ openConnect: !this.state.openConnect})
  }

  onMouseOverConnect = () => {
    this.setState({ openConnect: true})
  }

  onMouseLeaveConnect = () => {
    this.setState({ openConnect: false})
  }

  toggleOption = () => {
    this.setState({ openOption: !this.state.openOption})
  }

  onMouseOverOption = () => {
    this.setState({ openOption: true})
  }

  onMouseLeaveOption = () => {
    this.setState({ openOption: false})
  }

  render () {
    return (
      <header className={"header " + (this.props.sticky ? 'sticky' : '')} style={this.props.style}>
        <Navbar
          expand={true}
        >
          <Container>
            <NavbarBrand href='/'>
              <div className="logo">
                Cryptoeconomics Lab
              </div>
            </NavbarBrand>
            <Nav navbar>
              <NavItem>
                <Link href='/plasma-chamber'>
                  <a>Plasma Chamber</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href='#url'>
                  <a>Company</a>
                </Link>
              </NavItem>

              <Dropdown nav inNavbar
                isOpen={this.state.openConnect}
                toggle={this.toggleConnect}
              >
                <DropdownToggle nav
                  onMouseOver={this.onMouseOverConnect}

                >
                  Connect
                </DropdownToggle>
                <DropdownMenu left={0} onMouseLeave={this.onMouseLeaveConnect}>
                  <DropdownItem>
                    Telegraph
                  </DropdownItem>
                  <DropdownItem>
                    Github
                  </DropdownItem>
                  <DropdownItem>
                    Medium
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem>
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </NavItem>
            </Nav>

            <Dropdown nav className="options"
              onMouseOver={this.onMouseOverOption}
              isOpen={this.state.openOption}
              onMouseLeave={this.onMouseLeaveOption}
              toggle={this.toggleOption}
            >
              <DropdownToggle nav >
                English
              </DropdownToggle>
              <DropdownMenu onMouseLeave={this.onMouseLeaveOption}>
                <DropdownItem>English</DropdownItem>
                <DropdownItem>Japan</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Container>
        </Navbar>
      </header>
    )
  }
}

/**
 * Default Props
 */
Header.defaultProps = {
  sticky: false,
}


export default Header

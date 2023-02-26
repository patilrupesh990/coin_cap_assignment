import React, { Component } from 'react'
import { NavBarContainer, NavItems, NavLeftMenu, NavLogo, NavMenu, NavMenuSM, NavRightMenu } from './NavBarElements'
import { SearchOutlined, SettingFilled, MenuOutlined } from '@ant-design/icons'


export default class NavBar extends Component {
  render() {
    return (
      <NavBarContainer>
        <NavItems>
          <NavLeftMenu>
            <NavMenu>
              Coins
            </NavMenu>
            <NavMenu>
              Exchange
            </NavMenu>
            <NavMenu>
              Swap
            </NavMenu>
          </NavLeftMenu>
          <NavMenuSM>
            <SearchOutlined />
          </NavMenuSM>
          <NavLogo>
            <img style={{ height: '5vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} src='https://coincap.io/static/logos/black.svg' alt='logo' />
          </NavLogo>
          <NavMenuSM>
            <MenuOutlined />
          </NavMenuSM>
          <NavRightMenu>
            <NavMenu>
              USD
            </NavMenu>
            <NavMenu>
              English
            </NavMenu>
            <NavMenu>
              <SearchOutlined />
            </NavMenu>

            <NavMenu>
              <SettingFilled />
            </NavMenu>

          </NavRightMenu>
        </NavItems>

      </NavBarContainer>
    )
  }
}

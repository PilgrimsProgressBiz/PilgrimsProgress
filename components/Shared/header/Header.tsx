import React from 'react'
import { AppBar, Box, Container, Toolbar } from '@mui/material'
import HeaderMenu from '../../Smart/HeaderMenu/HeaderMenu'
import Title from '../../Presentational/Title/Title'

const Header: React.FC = () => {
  return (
    <>
      <Box className="header-container">
        <AppBar position="static" className="header-bar">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Title />
              <Box sx={{ flexGrow: 1 }}></Box>
              <HeaderMenu />
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  )
}

export default Header

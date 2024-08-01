import React from 'react'
import { MenuItem, Typography, ListItemIcon } from '@mui/material'
import CallMadeIcon from '@mui/icons-material/CallMade'

interface HeaderMenuItemProps {
  handleCloseNavMenu: (path: string) => void
  text: string
  path: string
  id?: string
}

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
  handleCloseNavMenu,
  text,
  path,
  id,
}) => {

  const isExternal = path.startsWith('http');

  function handleClick() {
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({behavior : 'smooth'})
      }
    }
    else if (isExternal) {
      window.open(path, '_blank');
    }
    handleCloseNavMenu(path);

  }

  return (
    <MenuItem
      onClick={() => handleClick()}
      sx={{
        height: 70,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography
        textAlign="center"
        sx={{
          fontWeight: 700,
          fontFamily: 'lato',
        }}
      >
        {text}
      </Typography>
      <ListItemIcon>
        <CallMadeIcon fontSize="small" />
      </ListItemIcon>
    </MenuItem>
  )
}

export default HeaderMenuItem

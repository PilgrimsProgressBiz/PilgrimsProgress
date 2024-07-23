import React from 'react'
import { MenuItem, Typography, ListItemIcon } from '@mui/material'
import CallMadeIcon from '@mui/icons-material/CallMade'

interface HeaderMenuItemProps {
  handleCloseNavMenu: (path: string) => void
  text: string
  path: string
}

const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({
  handleCloseNavMenu,
  text,
  path,
}) => {

  const isExternal = path.startsWith('http');

  function handleClick() {
    if (isExternal) {
      window.open(path, '_blank');
    } else {
      handleCloseNavMenu(path);
    }
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

import React from 'react'
import {Typography, Divider, Box } from '@mui/material'



interface MeetTheTeam {
  header: string
  heading: string
  description: string
}

const MeetTheTeam: React.FC<MeetTheTeam> = ({
  header,
  heading,
  description
}) => {


  return (
    <Box p="4rem 3rem" className="about-us">
      <Typography fontSize={30} fontWeight={600}>
        <span style={{ color: '#63AC45' }}>{header}</span>
      </Typography>

      <Typography fontWeight={500}>{heading}</Typography>

      <Divider className="about-us-divider" />
      <Typography className="description">{description}</Typography>

      


    </Box>
  )
}

export default MeetTheTeam

import React from 'react'
import {Typography, Divider, Box } from '@mui/material'
import { meetTheTeamData } from '../../../data/data'
import Link from 'next/link'
import Image from 'next/image'

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

      <div className="images-main-container">
          {meetTheTeamData.teamMembers.map((employee) => {
              return (
                <Link
                  key={employee.id}
                  href={"/"}
                >
                  <div className="image-container">
                    <Image
                      className="image"
                      alt="emp-image"
                      height={150}
                      width={150}
                      src={employee.image}
                    />
                    <Typography fontWeight={500} fontSize={14}>
                      {employee.name}
                    </Typography>
                    <Typography
                      fontWeight={500}
                      fontSize={14}
                      className="color-primary"
                    >
                      {employee.title}
                    </Typography>
                  </div>
                </Link>
              )
            })}
      </div>
            

    </Box>
  )
}

export default MeetTheTeam

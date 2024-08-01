import React from 'react'
import {Typography, Divider, Box } from '@mui/material'
import { meetTheTeamData } from '../../../data/data'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface MeetTheTeam {
  header: string
  heading: string
  description: string
  images: {
    img: StaticImageData
    className: string
  }[]
}

const MeetTheTeam: React.FC<MeetTheTeam> = ({
  header,
  heading,
  description,
  images
}) => {


  return (
    <Box p="4rem 3rem" id="meet-the-team-section" className="about-us">
      {images.map((image, index) => (
        <Box className={`${image.className} img`} key={index}>
          <Image src={image.img} alt="aboutus" layout="responsive" />
        </Box>
      ))}
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
                    <Typography
                      fontWeight={300}
                      fontSize={11}                      
                    >
                      {employee.description}
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

import React from 'react'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import { footerData } from '../../../data/data'
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../../../public/images/prixite-logo.png'
import { siteName } from '../../../data/data'

const Footer = () => {
  const { copyright, info, joinUs, details } = footerData

  return (
    <Box className="footer-container">
      <Container maxWidth="xl" className="footer-items">
        <Box className="footer-items-container">
          <Box className="title-container">
            <Link href="/" className="title-link">
              <Box className="title-image">
                <Image 
                  src={logoImg.src} 
                  alt={siteName} 
                  width={30} 
                  height={30} 
                  style={{ 
                    position: 'relative',
                    top: '-30px',
                  }}
                />
              </Box>
            </Link>
          </Box>
          {details?.map(({ icon, desc }, index) => (
            <Stack direction={'row'} spacing={1} key={index}>
              <Box>
                <Image 
                  src={icon.src} 
                  alt="icon" 
                  width={20} 
                  height={20}
                />
              </Box>
              <Typography className="description">
                {new RegExp(/^\S+@\S+\.\S+$/).test(desc) ? (
                  <Link href={`mailto:${desc}`}>{desc}</Link>
                ) : (
                  desc
                )}
              </Typography>
            </Stack>
          ))}
        </Box>
        <Box className="footer-items-container">
          <Typography fontSize={18} fontWeight={'600'}>
            {info.title}
          </Typography>
          {info.contactUs.map((contact, index) => (
            <Link key={index} href={contact.path}>
              {contact.text}
            </Link>
          ))}
        </Box>
        <Box className="footer-items-container">
          <Typography fontSize={18} fontWeight={'600'}>
            {joinUs.title}
          </Typography>
          <Box className="join-us-icons">
            {joinUs.links.map(({ icon, path, width, height }, index, array) => (
              <React.Fragment key={index}>
                <a href={path} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={icon.src}
                    alt="icon"
                    style={{ cursor: 'pointer' }}
                    width={width}
                    height={height}
                  />
                </a>
                {index === array.length - 1 ? (
                  ''
                ) : (
                  <Divider className="join-us-divider" />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Container>
      <Container maxWidth="xl">
        <Divider sx={{ marginTop: 4 }} />
        <Box className="copyright">
          <Typography>
            <Link href="/">{copyright.split(' ')[0]}&nbsp;</Link>
            {copyright.split(' ').splice(1).toString().replaceAll(',', ' ')}
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

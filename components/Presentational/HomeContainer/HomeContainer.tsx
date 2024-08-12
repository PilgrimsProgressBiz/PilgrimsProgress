import { Stack, Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import ContactButton from '../../Smart/ContactButton/ContactButton'
import Image from 'next/image'
import { homeData } from '../../../data/data'

const HomeContainer = () => {
  const {
    header,
    headerImages,
    heading,
    homeAim,
    contactUsButtonText,
    // eslint-disable-next-line
    videoButtonText,
    // eslint-disable-next-line
    youtubeIcon,
  } = homeData

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
        setOpacity(1);
      }, 1000) // This should match the fade-out duration
    }, 3000) // Switch image every 3 seconds

    return () => clearInterval(intervalId) // Cleanup interval on component unmount
  }, [headerImages.length])
  return (
    <Stack
      pt={{ xs: '20px', md: '60px', lg: '30px' }}
      pb={{ xs: '100px', lg: '60px' }}
      direction={{ xs: 'column-reverse', md: 'row' }}
      spacing={5}
      alignItems={'center'}
    >
      <Box className="home-container">
        <Typography variant="h6" className="home-main-heading-1">
          {header}
        </Typography>

        <Typography variant="h4" className="home-main-heading-2">
          {/* {heading.slice(0, 8)}
          <span className="solution-color">{heading.slice(8, 17)}</span>
          {heading.slice(17, 40)} */}
          {heading}
        </Typography>

        <Typography>{homeAim}</Typography>

        <Box display="flex" gap="25px" alignItems={'center'} mt={6}>
          <ContactButton text={contactUsButtonText} />

          {/* <Box className="youtube-icon">
            <Image unoptimized priority src={youtubeIcon} alt="service-image" />
          </Box>
          <Typography>{videoButtonText}</Typography> */}
        </Box>
      </Box>

            <Box>
        <Image
          src={headerImages[currentImageIndex]}
          alt="service-image"
          layout="responsive"
          className='headerImageSlideShow'
          style={{ 
            transition: 'opacity 1s ease-in-out',
            opacity: opacity 
          }}
        />
      </Box>
    </Stack>
  )
}

export default HomeContainer

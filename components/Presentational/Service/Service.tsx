import React from 'react'
import { Grid, Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceProps {
  img: string
  title: string
  description: string
  mini_description: string
  path: string
  href? : null | string
}
const Service: React.FC<ServiceProps> = ({ img, title, description, mini_description, path, href }) => {
  return (
    <Grid item sm={12} md={3} className="service">
      <Link href={href ?? path}>
        <Box marginBottom="10px">
          <Box className="service-image-container">
            <Image
              width={img === '/images/services/odoo.png' ? 32 : 22}
              height={
                img === '/images/services/devops.png'
                  ? 14
                  : img === '/images/services/odoo.png'
                  ? 32
                  : 20
              }
              src={img}
              alt="service-image"
            />
          </Box>

          <Typography sx={{ fontSize: 15, fontWeight: 600 }} mt="18px">
            {title}
          </Typography>

          <Typography className="service-description">
            {mini_description && mini_description.length > 200
              ? `${mini_description.substring(0, 200)}...`
              : mini_description}
          </Typography>


          </Box>
      </Link>
    </Grid>
  )
}

export default Service

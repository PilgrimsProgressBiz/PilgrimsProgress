import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import { contactUs } from '../data/data'
import Head from 'next/head'
// eslint-disable-next-line
import Subscribe from '../components/Shared/Subscribe/Subscribe'
// eslint-disable-next-line
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import ContactForm from '../components/Smart/ContactForm/ContactForm'

const ContactUs = () => {
  const { title, heading } = contactUs

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="prixite" content="Prixte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl" className="page-header contact-us-page">
        <Box className="header">
          <Box className="heading">
            <Typography className="heading-text">
              {heading.slice(0, 24)}
              <span style={{ color: 'var(--primary-green)' }}>
                {heading.slice(24, 41)}
              </span>
            </Typography>
          </Box>
          {/* <Button className="contact-icon" variant="contained">
            <LocalPhoneOutlinedIcon fontSize="medium" />
          </Button> */}
        </Box>

        <Box>
          <ContactForm />
          {/* <iframe width="540" height="305" src="https://9e056495.sibforms.com/serve/MUIFAEQRDDU7SgF3IkppCGlbScFnMx4nkYUXl0aH1VSp-NO77lV8Ehc3qf0vBSnGtUSnZ-L_02RyGod0czt__05cABGN1TN85Mrat21-Y9lNJ5vkIY2q-S6sarHL-nWicvGRUOA5peACVDTrMTzS6MlHXAPrLWBA0nLgC0tcxIStS8dcXith0UnlzTuZDY5i5kZ42k1q9hWDqXYg" frameborder="0" scrolling="auto" allowfullscreen style="display: block;margin-left: auto;margin-right: auto;max-width: 100%;"></iframe> */}
        </Box>

      </Container>
    </>
  )
}

export default ContactUs

import React, { ReactNode } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import GoogleAnalytics from '../../Smart/GoogleAnalytics'

type Props = { children: ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="responsiveness">
      <GoogleAnalytics/>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

type Props = { children: React.ReactNode }

export default function MainLayout({ children }: Props){
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

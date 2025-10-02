import React from 'react'
import './Hero.scss'
import heroIllustration from '../../assets/images/hero-illustration.png'

type Props = {
  title?: string
  subtitle?: string
}

export default function Hero({ title='Build trust with secure audits', subtitle='Security audits, automation and monitoring to protect your smart contracts and DeFi assets.' }: Props){
  return (
    <section className='hero'>
      <div className='container hero-inner'>
        <div className='hero-copy'>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className='hero-ctas'>
            <a className='btn primary' href='#'>Start Your First Audit</a>
            <a className='btn ghost' href='#'>Contact Sales</a>
          </div>
        </div>
        <div className='hero-art'>
          <img src={heroIllustration} alt='Illustration' />
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import Hero from '../../components/Hero/Hero'
import UseCaseCard from '../../components/UseCaseCard/UseCaseCard'
import './HomePage.scss'

const demoUseCases = [
  { title: 'DeFi', description: 'Audits and monitors DeFi projects' },
  { title: 'Gaming', description: 'Secure gaming contracts' },
  { title: 'NFTs', description: 'Token & marketplace audits' },
  { title: 'Insurance', description: 'Risk analysis and audits' }
]

export default function HomePage(){
  return (
    <div className='home-page'>
      <Hero />
      <section className='container usecases'>
        <h3>Real-World Use Cases</h3>
        <div className='grid'>
          {demoUseCases.map(u => <UseCaseCard key={u.title} title={u.title} description={u.description} />)}
        </div>
      </section>
    </div>
  )
}

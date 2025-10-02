import React from 'react'
import './UseCaseCard.scss'

type Props = {
  title: string
  description: string
  icon?: string
}

export default function UseCaseCard({ title, description, icon }: Props){
  return (
    <article className='usecase-card'>
      <div className='icon'>{icon ? <img src={icon} alt=''/> : <div className='placeholder'/>}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  )
}

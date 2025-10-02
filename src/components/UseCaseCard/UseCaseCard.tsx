import React from 'react'

type Props = {
  title: string
  description: string
  icon?: string
}

export default function UseCaseCard({ title, description }: Props){
  return (
    <article>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  )
}

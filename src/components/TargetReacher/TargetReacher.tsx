import React, { useEffect, useState } from 'react'
import apiClient from '../../api/apiClient'
import './TargetReacher.scss'

type TargetStatus = {
  target: string
  progress: number
  eta?: string
}

export default function TargetReacher(){
  const [data, setData] = useState<TargetStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    apiClient.get('/api/target')
      .then(res => {
        if(!mounted) return
        setData(res.data)
      })
      .catch(err => {
        if(!mounted) return
        setError(err?.message || 'Unknown error')
      })
      .finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [])

  if(loading) return <div className='target-reacher'>Loading target status…</div>
  if(error) return <div className='target-reacher error'>Error: {error}</div>
  if(!data) return <div className='target-reacher'>No data</div>

  return (
    <section className='target-reacher'>
      <div className='container'>
        <h3>Target Reacher</h3>
        <div className='status'>
          <div className='meta'>
            <div className='target'>{data.target}</div>
            <div className='eta'>{data.eta || '—'}</div>
          </div>
          <div className='progress-bar' role='progressbar' aria-valuenow={data.progress} aria-valuemin={0} aria-valuemax={100}>
            <div className='fill' style={{width: `${data.progress}%`}} />
          </div>
          <div className='progress-label'>{data.progress}% complete</div>
        </div>
      </div>
    </section>
  )
}

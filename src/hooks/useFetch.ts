import { useEffect, useState } from 'react'

export default function useFetch<T>(fn: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fn().then(res => {
      if (!mounted) return
      setData(res)
    }).catch(err => {
      if (!mounted) return
      setError(err)
    }).finally(() => mounted && setLoading(false))
    return () => { mounted = false }
  }, [fn])

  return { data, loading, error }
}

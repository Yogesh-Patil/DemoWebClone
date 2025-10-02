const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/api/home', (req, res) => {
  res.json({
    banner: { title: 'Build trust with secure audits', subtitle: 'Security audits and monitoring' },
    useCases: [
      { title: 'DeFi', description: 'Audits and monitors DeFi projects' },
      { title: 'Gaming', description: 'Secure gaming contracts' }
    ]
  })
})

app.get('/api/target', (req, res) => {
  res.json({
    target: 'Release v1.0',
    progress: 56,
    eta: '7 days'
  })
})

app.listen(port, () => {
  console.log('Test API server running on port', port)
})

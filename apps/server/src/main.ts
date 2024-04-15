import createApp from './app'

const app = createApp().listen(8080, () => {
  console.log('express app')
})
process.on('SIGTERM', () => {
  console.debug('SIGTERM signal received: closing HTTP server')
  app.close(() => {
    console.debug('http server closed')
  })
})

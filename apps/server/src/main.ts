import createApp from './app'

const app = createApp().listen(8080, () => {
    console.log('express app')
    console.log('again')
})
process.on('SIGTERM', () => {
    console.debug('SIGTERM signal received: closing HTTP server')
    app.close(() => {
        console.debug('http server closed')
    })
})
process.on('SIGINT', () => {
    console.debug('SIGTERM signal received: closing HTTP server')
    app.close(() => {
        console.debug('http server closed')
    })
    process.exit(0)
})

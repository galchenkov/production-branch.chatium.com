import { jsx } from '@app/html-jsx'

app.html('/', async (ctx) => {
  return (
    <html>
      <head>
        <title>My App Main branch</title>
      </head>
      <body>
        <h1>My App Main branch</h1>
        <p>{Date.now()}</p>
      </body>
    </html>
  )
})
import { app } from './app'
app.listen(app.get("port"), (err?: Error) => {
  if (err) {
    return console.error(err)
  }
  return console.log(`server is listening on ${app.get("port")}`)
})

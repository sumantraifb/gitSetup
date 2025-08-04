const http = require('http')

const app = http.createServer(
    ((req, res)=>{
    res.end("huwh")
})
)



app.listen(20000)
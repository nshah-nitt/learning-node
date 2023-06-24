import http from 'http'

const port = process.env.PORT || 8080;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('content-type','text/html');
    res.end('<h1>Hi i am harry </h1><p>I study in Nit tiruchirappalli</p>')
})
server.listen(port,()=>{
    console.log(`server is listning on the port ${port}`);
})
const express =require("express")
const fs = require("fs")

const app = express()
const port = process.env.PORT || 3000
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

 // app.use("/admin" , )

/* app.get('/', (req, res) => {
    const html = fs.readFileSync(__dirname + '/index.html' , 'utf-8')
    res.send(html);
});
 */

 // we need app.use() because we use react and it will make all in one page 
app.use('/', (req, res, next) => {
    const html = fs.readFileSync(__dirname + '/index.html' , 'utf-8')
    res.send(html);
});

app.listen(3000, () => {
    console.log(`App listening on port ${port}`);
});

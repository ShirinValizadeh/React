const express = require('express')
const app = express()
const validator = require('validator')

app.set('view engine', 'ejs');
app.set('views', __dirname+'/views');

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())




app.get('/', (req, res) => {
    res.render('home')
});



app.post('/', (req, res) => {
    console.log(req.body);
    const {title , category , description} = req.body

    let errMsg = "";
    if (validator.isEmpty(title)) {
        errMsg = " title schuld not be empty \n"
    }
    if (!validator.isLength(title, { min: 3, max: 50 })) {
        errMsg += "title lenght should be between 2 and 50"
    }

    if (validator.isEmpty(category)) {
        errMsg += " category schuld not be empty \n"
    }
    if (validator.isEmpty(description)) {
        errMsg += " description schuld not be empty \n"
    }
    if (!validator.isLength(description, { min: 10, max: 1000 })) {
        errMsg += "description lenght should be between 10 and 1000"
    }
    if (!errMsg) {
        res.json('correct data ')
    }else{
        res.json("incorrect data")
    }
});





app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
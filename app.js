const express = require('express'); 
const exphbs = require('express-handlebars'); 
const app = express(); 
const bodyParser = require('body-parser') 

 

app.engine('handlebars', exphbs()); 
app.set('view engine', 'handlebars'); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ extended: false })) 

 

app.get('/', function (req, res) { 
    res.render('home',{
        title: "Home Page"
    })
}); 

app.get('/contact-us', function (req, res) { 
    res.render('contactus',{
        title: "Contact Us Page"
    })
}); 

app.get('/products', function (req, res) { 
    res.render('product',{
        title: "Products Page"
    })

}); 

const PORT = process.env.PORT || 3000; 
app.listen(PORT,()=>{ 

    console.log(`The web server is up and running`); 

}); 
onst express = require('express'); 

const exphbs = require('express-handlebars'); 

const app = express(); 

const bodyParser = require('body-parser') 

 

app.engine('handlebars', exphbs()); 

app.set('view engine', 'handlebars'); 

app.use(express.static('public')); 

app.use(bodyParser.urlencoded({ extended: false })) 

 

app.get('/', function (req, res) { 

    res.render('home.handlebars',{
        title: "Home Page"
    })
}); 

app.get('/contact-us', function (req, res) { 

    res.render('contactus.handlebars',{
        title: "Contact Us Page"
    })
}); 

app.get('/products', function (req, res) { 

    res.render('products.handlebars',{
        title: "Products Page"
    })

}); 

const PORT=3000; 

  

app.listen(PORT,()=>{ 

    console.log(`Web Server Started`); 

}); 
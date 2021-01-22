const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');
const link = 'https://www.conversebank.am/hy/exchange-rate/';
const  {mongodb} = require('./config');
const model = require('./models/rateModel');
const { userInfo } = require('os');
const app = express();
const  path = require('path')
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(mongodb.link, { useNewUrlParser: true , useUnifiedTopology: true});

const parseConversebank = async () => {
    try {
        await axios.get(link)
            .then(res => res.data)
            .then(res => {
                let html = res;
                const $ = cheerio.load(html);
                const table = $('#main_static_content').children('table').first().html();
                let json = JSON.stringify(table.replace(/\s+/g, ''));
                let regexp = /(<([^>]+)>)/ig;
                let regexpJson = json.replace(regexp, "");
                const EUR = regexpJson .substr(regexpJson.indexOf("EUR") + 4,5);
                const USD = regexpJson .substr(regexpJson.indexOf("USD") + 4,5);
                app.get('/', (req, res) =>
                {
                    res.render('todo', { USD, EUR })
                })
                model.insertMany([ 
                    { EUR, USD }  
                ]).then(function(){ 
                    console.log("Data inserted")  
                }).catch(function(error){ 
                    console.log(error)      
                }); 
            })
    }catch (e) {
        console.log('err - ', e);
    }
}

app.listen(3000)
parseConversebank()




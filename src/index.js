const express = require('express');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;

const route = require('./routes');

//static file
app.use(express.static(path.join(__dirname, 'public')));

//middelware dung de xu ly du lieu tu form submit len
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//su dung thu vien js hay code js de submit
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
             app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//Routes init -khởi tạo tuyến đường
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

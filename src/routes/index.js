const newRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //req: required - chua thong tin ma ung dung o phia client yeu cau len server.
    //res: response - xu ly yeu cau tu client va tra ve client qua tab response.
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    app.use('/news', newRouter);

    app.use('/', siteRouter);
}

module.exports = route;

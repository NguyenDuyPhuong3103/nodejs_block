const express = require('express');
const router = express.Router();

const newsController = require('../app/controller/NewsController');

//Tuyến đường sẽ đọc từ trên xuống, khớp cái nào thì chọn cái đó rồi thực hiện
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;

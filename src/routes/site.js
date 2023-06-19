//Những file ko nằm ở 1 tài nguyên cụ thểs

const express = require('express');
const router = express.Router();

const siteController = require('../app/controller/SiteController');

//Tuyến đường sẽ đọc từ trên xuống, khớp cái nào thì chọn cái đó rồi thực hiện.
router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;

var express = require('express');
var router = express.Router();
var nodejieba = require("nodejieba");

/* GET home page. */
router.get('/', function(req, res, next) {

  var str = "为保障无线校园网高效可靠运行，将于 2018年2 月 7 日---8日两天对无线网络核心交换机进行优化升级改造，改造期间仅图书馆、国际学院3#宿舍和教育管理综合楼提供无线上网服务，其它办公楼、教学楼和学生宿舍停止无线上网服务，给大家带来不便，敬请谅解。";
  var result = nodejieba.cut(str);
  console.log(result);
  res.render('index', { title: 'Express' });
});

module.exports = router;

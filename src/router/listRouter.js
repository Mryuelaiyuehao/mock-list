const _ = require("lodash");
const Config = require("../static/js/config");
const { ResultCode } = require("../static/js/const");
const { isPositiveInt } = require("../utils");

/**
 * 注册列表接口
 * @param {*} router
 */
const registerListRouter = (router) => {
  router.post(Config.url, (req, res) => {
    if (!_.isObject(req.body)) {
      return res.send({
        resultCode: ResultCode.badRequest,
        description: "badRequest",
      });
    }
    const pageIndex = Number(req.body.pageIndex);
    const pageSize = Number(req.body.pageSize);
    if (!isPositiveInt(pageIndex)) {
      return res.send({
        resultCode: ResultCode.badRequest,
        description: "页码必须为正整数",
      });
    }
    if (!isPositiveInt(pageSize)) {
      return res.send({
        resultCode: ResultCode.badRequest,
        description: "单页数必须为正整数",
      });
    }
    Config.timer = setTimeout(() => {
      res.send({
        resultCode: String(Config.resultCode),
        description: Config.description,
        data: {
          list: Config.list.slice((pageIndex - 1) * pageSize, pageIndex * pageSize),
          totalSize: Config.totalSize,
          pageIndex: pageIndex,
          pageSize: pageSize,
          totalPages: Math.ceil(Config.totalSize / pageSize),
        },
      });
      clearTimeout(Config.timer);
    }, Math.random() * Config.delayTime * 1000);
  });
};

module.exports = registerListRouter;

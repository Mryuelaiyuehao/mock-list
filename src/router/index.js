const _ = require("lodash");
const express = require("express");
const { ResultCode } = require("../static/js/const");
const Rule = require("../static/js/rule");
const { isPositiveInt, resetConfig } = require("../utils");
const registerListRouter = require("./listRouter");

// 配置接口
const router = express.Router();
router.post("/config", (req, res) => {
  const body = req.body;
  if (!_.isObject(body)) {
    res.send({
      resultCode: ResultCode.badRequest,
      description: "参数类型错误",
    });
  }
  const { url, description } = body;
  const totalSize = Number(body.totalSize);
  const resultCode = Number(body.resultCode);
  const delayTime = Number(body.delayTime);
  let data = null;
  try {
    data = JSON.parse(body.data);
  } catch (err) {
    return res.send({
      resultCode: ResultCode.badRequest,
      description: err.message,
    });
  }
  if (!(_.isString(url) && Rule.url.test(url))) {
    return res.send({
      resultCode: ResultCode.badRequest,
      description: "url格式错误",
    });
  }
  if (!isPositiveInt(totalSize)) {
    return res.send({
      resultCode: ResultCode.badRequest,
      description: "总数必须是正整数",
    });
  }
  if (!Number.isSafeInteger(resultCode) || resultCode < 0) {
    return res.send({
      resultCode: ResultCode.badRequest,
      description: "状态码必须为大于等于0的整数",
    });
  }
  if (!_.isString(description)) {
    return res.send({
      resultCode: ResultCode.badRequest,
      description: "描述信息必须是字符串",
    });
  }
  if (isNaN(delayTime) || delayTime < 0) {
    return res.send({
      resultCode: ResultCode.badRequest,
      description: "最大延迟时间大于等于0的数字",
    });
  }
  resetConfig({
    url,
    totalSize,
    resultCode,
    description,
    delayTime,
    data,
  });
  registerListRouter(router);
  res.send({
    resultCode: ResultCode.success,
    description: "配置成功",
    data: body,
  });
});
module.exports = {
  router,
};

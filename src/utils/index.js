const Config = require("../static/js/config");

// 是否是正整数
const isPositiveInt = (val) => {
  return Number.isSafeInteger(val) && val > 0;
};

// 设置配置项
const resetConfig = ({
  url,
  totalSize,
  resultCode,
  description,
  delayTime,
  data,
}) => {
  Config.url = url;
  Config.totalSize = totalSize;
  Config.resultCode = resultCode;
  Config.description = description;
  Config.delayTime = delayTime;
  Config.data = data;
  Config.list = [];
  for (let i = 0; i < Config.totalSize; i++) {
    Config.list.push(Config.data);
  }
  clearTimeout(Config.timer);
};
module.exports = {
  isPositiveInt,
  resetConfig,
};

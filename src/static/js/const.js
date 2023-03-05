const ResultCode = {
  badRequest: "400", // 客户端请求的语法错误，服务器无法理解
  serverError: "500", // 服务器内部错误，无法完成请求
  success: "0", // 成功
};

const Port = 8888;
module.exports = {
  ResultCode,
  Port,
};

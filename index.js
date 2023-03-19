const path = require("path");
const express = require("express");
const cors = require("cors");
const { ResultCode, Port } = require("./src/static/js/const");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "./src/static/html")));
app.use("/list", express.static(path.join(__dirname, "./src/static/list")));

const { router } = require("./src/router");
app.use("/restapi", router);

// 全局错误处理中间件
app.use((err, req, res, next) => {
  if (err) {
    res.send({
      resultCode: ResultCode.serverError,
      description: err.message,
    });
  }
});

app.listen(Port, () => {
  console.log(`mock-list serve is working on http://127.0.0.1:${Port}`);
});

module.exports = {
  app,
};

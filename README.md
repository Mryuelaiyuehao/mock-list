# mock-list
这是一个用来mock列表的后台

# 使用说明

## 1、安装依赖包
```js
  npm i
```

## 2、启动服务
```js
  npm run serve
```

## 3、访问 <http://127.0.0.1:8888> 进入配置页
### 配置页面可配置项：
  -  链接
  -  总数
  -  状态码
  -  描述
  -  最大延迟时间
  -  列表名称
  -  数据

### 返回的响应体
  ```js
  {
     data:{
      "list": [ // 列表名称
        {}, // 数据
      ],
      "totalSize": 100, // 总数
      "pageIndex": 1, // 页码
      "pageSize": 10, // 单页数量
      "totalPages": 10 // 总页数
      }
    description: "", // 描述
    resultCode: "0" // 状态码
  }
  ```
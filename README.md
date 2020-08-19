# Nocp-Log
By NriotHrreion

## 下载

```shell
npm install nocp-log
```

## 使用

首先，你得使用 `init()` 将**nocp-log**初始化，并设置日志系统的配置。

```js
const nocpLog = require("nocp-log");

nocpLog.init({
    path: __dirname +"/log/", // 日志文件夹路径 注: 路径结尾必须是斜杠(/)
    // 模板 其中"%t"表示日志输出时间, "%c"表示日志内容
    INFO: "[INFO|%t] %c", // INFO 模板
    WARN: "[WARN|%t] %c", // WARN 模板
    ERROR: "[ERROR|%t] %c", // ERROR 模板
    console: true, // 输出日志时是否在控制台报告
    charset: "utf8" // 日志编码
});
```

接下来就可以通过 `log()` 开始操作日志了。

**Example:**
```js
const nocpLog = require("nocp-log");

nocpLog.init({....}) // 你必须初始化完才能开始操作日志!!

nocpLog.log("INFO", "HelloWorld", (err) => { // 输出INFO
    console.log(err);
});
nocpLog.log("WARN", "HelloWorld", (err) => { // 输出WARN
    console.log(err);
});
nocpLog.log("ERROR", "HelloWorld", (err) => { // 输出ERROR
    console.log(err);
});
```

## License

MIT

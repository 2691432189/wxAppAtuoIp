### 侦听ip变化，自动更新微信企业可信IP。
### 本项目仅为学习使用，所造成的所有后果均有使用者承担，本人概不负责。



需要先在/app/config文件夹中生成config.json

> -v /mnt/user/appdata/wxAppAtuoIp:/app/config

```json
{
  "initIp": "", // 不需要更改
  "cookie": "",  // 企业微信cookie
  "appConfig": [ // 应用配置为数组，可设置多个应用
    {
      "app_id": "", // 应用程序 id
      "_d2st": ""  // 应用程序 _d2st
    }
  ],
  "listenTime": 200 // 执行时间间隔 单位s
}
```

> docker 镜像 2691432189/wx-app-atuo-ip

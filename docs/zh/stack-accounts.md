# 账号密码

使用Odoo，可能会用到的几组账号密码如下：

## Odoo

在初始化安装的时候由用户自行设置

## PostgreSQL

Odoo 采用 [Peer Authentication](https://www.postgresql.org/docs/10/auth-methods.html#AUTH-PEER) 认证方式连接 PostgreSQL，即以操作系统用户登录数据库，无需密码

> 需要管理和备份 PostgreSQL，请参考 [Odoo 数据库管理](/zh/admin-postgresql.md)

## Linux

* 主机地址：服务公网IP地址
* 连接方式：云控制台在线SSH 或 SFTP客户端工具 或 SSH客户端工具
* 管理员密码：创建服务器的时候自行设置，若不记得密码需要通过云控制台重置。
* 管理员账号：不同的云平台有一定的差异
   |  云平台   |  管理员账号   |
   | --- | --- |
   |  Azure   |  创建服务器的时候自行设置   |
   |  AWS   |  ubuntu   |
   |  阿里云，华为云，腾讯云   |  root   |

## Windows系统

* 主机地址：服务公网IP地址
* 连接方式：云控制台在线管理 或 远程桌面工具
* 管理员密码：创建服务器的时候自行设置，若不记得密码需要通过云控制台重置。
* 管理员账号：不同的云平台有一定的差异
   |  云平台   |  管理员账号   |
   | --- | --- |
   |  Azure   |  创建服务器的时候自行设置   |
   |  azure，阿里云，华为云，腾讯云   |  administrator   |
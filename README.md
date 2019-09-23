# Odoo自动化安装与部署

本项目是基于Ansible的[Odoo](https://www.odoo.com//) 自动化安装脚本，实现在Ansible上一键安装Odoo。本项目是开源项目，支持MIT开源协议。如果您不熟悉Ansible的使用，您可以直接使用我们在公有云上提供的镜像。

## 操作系统

目前仅支持ubuntu 14.04/16.04/18.04

## 服务器配置要求

最低2G内存，20G系统盘空间，否则无法安装

## 版本

Odoo官方采用 APT 安装方式（Packaged installers），官方提供了最新版本的源地址，因此能够保证每次安装都是最新版本。[版本号查看](https://www.odoo.com/zh_CN/page/download)

Odoo的具体版本号采用大版本+日期的组织方式，例如：Odoo12-20190624


## 安装指南

本Ansible脚本支持root用户、普通用户（+su权限提升）等两种账号模式，也支持密码和秘钥对登录方式。

其中普通用户登录需要增加变量：

~~~
//假设普通用户的username为
admin_username: websoft9
~~~

## 组件
Odoo,Python,Nginx,PostgreSQL

## 使用指南

文档链接：http://en.websoft9.com/docs/odoo

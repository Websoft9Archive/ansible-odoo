---
sidebarDepth: 3
---

# 参数

Odoo 预装包包含 Odoo 运行所需一序列支撑软件（简称为“组件”），下面列出主要组件名称、安装路径、配置文件地址、端口、版本等重要的信息。

## 路径

Linux 和 Windows 版本的 Odoo 路径完全不同，请根据你的操作系统参考对应项：

### Linux
#### Odoo

Odoo 安装目录： */usr/lib/python3/dist-packages/odoo*  
Odoo 配置文件： */etc/odoo/odoo.conf*  
Odoo 日志目录： */var/log/odoo*

#### Python

Python 安装目录： */usr/lib/python**  
Python 虚拟机目录: */usr/bin/python**  
*is version 2.7/3/3.6/3.7

#### Nginx

Nginx 虚拟主机配置文件：*/etc/nginx/sites-available/default*  
Nginx 主配置文件： */etc/nginx/nginx.conf*  
Nginx 日志目录： */var/log/nginx/*

#### PostgreSQL

PostgreSQL 安装路径：*/usr/bin/psql*  
PostgreSQL 数据文件：*/var/lib/postgresql*   
PostgreSQL 配置文件：*/etc/postgresql/10/main/postgresql.conf*      
PostgreSQL 日志文件：*/var/log/postgresql*  
PostgreSQL 可视化管理地址: Odoo 登录界面提供了数据库的导入和密码修改等功能

### Windows

#### Odoo

Odoo 安装目录： *C:\Program Files (x86)\Odoo-v*  
Odoo 配置文件： *C:\Program Files (x86)\Odoo-v\server\odoo.conf*    
Odoo 日志文件： *C:\Program Files (x86)\Odoo-v\server\odoo*

#### PostgreSQL

PostgreSQL 安装路径: *C:\Program Files (x86)\Odoo-v\PostgreSQL*  
PostgreSQL 数据目录: *C:\Program Files (x86)\Odoo-v\PostgreSQL\base*  
PostgreSQL 可视化管理地址：服务器上安装了 pgAdmin 用于可视化管理 PostgreSQL

## 端口号

在云服务器中，通过 **[安全组设置](https://support.websoft9.com/docs/faq/zh/tech-instance.html)** 来控制（开启或关闭）端口是否可以被外部访问。 

本应用建议开启的端口如下：

| 名称 | 端口号 | 用途 |  必要性 |
| --- | --- | --- | --- |
| HTTP | 80 | 通过 HTTP 访问 Odoo | 必须 |
| HTTPS | 443 | 通过 HTTPS 访问 Odoo | 可选 |
| PostgreSQL | 5432 | 远程连接 PostgreSQL | 可选 |

## 版本号

组件版本号可以通过云市场商品页面查看。但部署到您的服务器之后，组件会自动进行更新导致版本号有一定的变化，故精准的版本号请通过在服务器上运行命令查看：

```shell
# Linux Version
lsb_release -a

# Python Version
python --version  
python3 --version

# Nginx version:
nginx -v

# PostgeSQL version:
psql --version
```
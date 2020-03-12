# Odoo自动化安装与部署

本项目是由 [Websoft9](http://www.websoft9.com) 研发的 [Odoo](https://nightly.odoo.com/) 自动化安装程序，开发语言是 Ansible。使用本项目，只需要用户在 Linux 上运行一条命令，即可自动化安装 GitLab，让原本复杂的安装过程变得没有任何技术门槛。  

本项目是开源项目，采用 LGPL3.0 开源协议。

## 配置要求

安装本项目，确保符合如下的条件：

| 条件       | 详情       | 备注  |
| ------------ | ------------ | ----- |
| 操作系统       | Ubuntu18.04       |   |
| 公有云| AWS, Azure, 阿里云, 华为云, 腾讯云 | 可选 |
| 私有云|  KVM, VMware, VirtualBox, OpenStack | 可选 |
| 服务器配置 | 最低2核4G，安装时所需的带宽不低于10M |  建议采用按量100M带宽 |

## 组件

包含的核心组件为：Odoo,Python,Nginx,PostgreSQL

更多请见[参数表](/docs/zh/stack-components.md)

## 本项目安装的是 Odoo 最新版吗？

首先要了解 Odoo 的版本构成

- 大版本：Odoo9, Odoo10, Odoo11, Odoo12, Odoo13
- 小版本：Odoo12-20190624，小版本采用 **大版本+日期** 的组织方式

由于 Odoo 官方采用 deb 包下载安装方式，Odoo 大版本的维护通过修改 [mainl.yml](/roles/odoo/defaults/main.yml) 文件中的 odoo_repo_url 值实现。（[如何查看 repo 的值？](https://nightly.odoo.com/)）。而小版本无需维护，Odoo 官方会维护大版本 deb 包中的小版本以保证其为最新。
```
odoo_repo_url: http://nightly.odoo.com/13.0/nightly/deb/
```

我们尽量及时更新大版本的下载地址，以保证用户能够安装到最新版本的 Odoo


## 安装指南

以 root 用户登录 Linux，运行下面的**一键自动化安装命令**即可启动自动化部署。若没有 root 用户，请以其他用户登录 Linux 后运行 `sudo su -` 命令提升为 root 权限，然后再运行下面的脚本。

```
wget -N https://raw.githubusercontent.com/Websoft9/linux/master/ansible_script/install.sh ; bash install.sh repository=odoo
```

脚本后启动，就开始了自动化安装，必要时需要用户做出交互式选择，然后耐心等待直至安装成功。

**安装中的注意事项：**  

1. 操作不慎或网络发生变化，可能会导致SSH连接被中断，安装就会失败，此时请重新安装
2. 安装缓慢、停滞不前或无故中断，主要是网络不通（或网速太慢）导致的下载问题，此时请重新安装

多种原因导致无法顺利安装，请使用我们在公有云上发布的 [Odoo镜像](https://apps.websoft9.com/odoo) 的部署方式


## 文档

文档链接：https://support.websoft9.com/docs/odoo/zh

## FAQ

- 命令脚本部署与镜像部署有什么区别？请参考[镜像部署-vs-脚本部署](https://support.websoft9.com/docs/faq/zh/bz-product.html#镜像部署-vs-脚本部署)
- 本项目支持在 Ansible Tower 上运行吗？支持


# Odoo 自动化安装与部署

[English](/README.md) | [简体中文](/README-zh.md)  

本项目是由 [Websoft9](https://www.websoft9.com) 研发的 [Odoo](https://www.odoo.com/) 自动化安装程序，开发语言是 Ansible。使用本项目，只需要用户在 Linux 上运行一条命令，即可自动化安装 Odoo，并预配置必要项，让原本复杂的安装和与配置过程变得没有任何技术门槛。

除了默认安装之外，我们还针对Odoo部署进行了如下的改进：

* 安装htmltopdf插件和中文字体，方便导出中文pdf表单
* 安装PostgreSQL可视化管理工具phpPgadmin，便于用户操作和维护数据库
* 采用Nginx做端口转发，输入IP地址即可访问Odoo，无需带端口号

## 配置要求

安装本项目，确保符合如下的条件：

| 条件       | 详情       | 备注  |
| ------------ | ------------ | ----- |
| 操作系统       | Ubuntu20.04|  可选  |
| 公有云| AWS, Azure, 阿里云, 华为云, 腾讯云 | 可选 |
| 私有云|  KVM, VMware, VirtualBox, OpenStack | 可选 |
| 服务器配置 | 最低1核2G，存储20GB以上，Swap分区2GB以上 |  建议采用按量100M带宽 |

更多请见： [官方 System requirement](https://www.odoo.com/forum/help-1/if-i-plan-for-100-users-what-are-some-suggestions-for-server-requirements-121217)。

## 组件

包含的核心组件为：Odoo,Python,Nginx,PostgreSQL  

更多请见: [参数表](/docs/zh/stack-components.md)。

## 安装指南

以 root 用户登录 Linux，运行下面的**一键自动化安装命令**即可启动自动化部署。若没有 root 用户，请以其他用户登录 Linux 后运行 `sudo su -` 命令提升为 root 权限，然后再运行下面的脚本。

```
wget -N https://ghproxy.com/https://raw.githubusercontent.com/Websoft9/ansible-linux/main/scripts/install.sh; bash install.sh -r odoo
```

脚本后启动，就开始了自动化安装，必要时需要用户做出交互式选择，然后耐心等待直至安装成功。

**安装中的注意事项：**  

1. 操作不慎或网络发生变化，可能会导致SSH连接被中断，安装就会失败，此时请重新安装
2. 安装缓慢、停滞不前或无故中断，主要是网络不通（或网速太慢）导致的下载问题，此时请重新安装

多种原因导致无法顺利安装，请使用我们在公有云上发布的 [Odoo 镜像](https://apps.websoft9.com/odoo) 的部署方式。


## 文档

文档链接：https://support.websoft9.com/docs/odoo/zh

## License

本项目是开源项目，采用 LGPL3.0 开源协议。补充条款：不允许在公有云的云市场上售卖通过本项目安装后直接或间接制作的镜像。

## FAQ

#### 本项目安装的是 Odoo 最新版吗？

本项目通过包安装，请通过[官方URL](https://nightly.odoo.com/)页面查看版本号。  
我们会定期检查[Release版本](https://github.com/Websoft9/ansible-odoo/releases)，更新并测试此项目，以保证用户可以顺利安装所需的Odoo版本。 
 
#### 命令脚本部署与镜像部署有什么区别？

请参考：[镜像部署-vs-脚本部署](https://support.websoft9.com/docs/faq/zh/bz-product.html#镜像部署-vs-脚本部署)

#### 本项目支持在 Ansible Tower 上运行吗
支持


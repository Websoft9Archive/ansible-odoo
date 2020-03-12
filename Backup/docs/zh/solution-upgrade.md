# 更新升级

网站技术日新月异，**更新升级**是维护工作之一，长时间不升级的程序，就如长时间不维护的建筑物一样，会加速老化、功能逐渐缺失直至无法使用。  

这里注意更新与升级这两词的差异（[延伸阅读](https://support.websoft9.com/docs/faq/zh/tech-upgrade.html#更新-vs-升级)），例如：
- 操作系统打个补丁常称之为**更新**，Ubuntu16.04 变更为 Ubuntu18.04，称之为**升级**
- MySQL5.6.25-->MySQL5.6.30 常称之为**更新**，MySQL5.6->MySQL5.7 称之为**升级**

Odoo 完整的更新升级包括：系统级更新（操作系统和运行环境）和 Odoo 程序升级两种类型

## 系统级更新

运行一条更新命令，即可完成系统级更新：

``` shell
#For Ubuntu&Debian
apt update && apt upgrade -y

#For Centos&Redhat
yum update -y
```
> 本部署包已预配置一个用于自动更新的计划任务。如果希望去掉自动更新，请删除对应的Cron


## Odoo升级

Odoo 后台提供了在线升级能力，让升级工作变得非常简单。参考下面的步骤完成升级：

1. 登录 Odoo 后台，[启动开发者模式](/zh/solution-odoo.md#开发者模式)
2. 通过 【Settings】>【Updates】开始更新 Odoo 主程序
   ![Odoo升级提示](https://libs.websoft9.com/Websoft9/DocsPicture/en/odoo/odoo-upgradesui-websoft9.png)
3. 升级成功会有 “Well done...” 的提示
4. 点击 【Update Apps list】，开始更新 Odoo 模块

更多更新方案和注意事项请参考官方文档：[Odoo Update](https://www.odoo.com/documentation/master/setup/update.html)
